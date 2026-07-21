import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const CAPTCHA_MIN_AGE_MS = 1_500;

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCaptchaSecret() {
  const secret = process.env.CAPTCHA_SECRET || process.env.RESEND_API_KEY;

  if (!secret) {
    throw new Error("CAPTCHA_SECRET or RESEND_API_KEY must be configured");
  }

  return secret;
}

function signCaptcha(payload: string) {
  return createHmac("sha256", getCaptchaSecret()).update(payload).digest("hex");
}

function createCaptchaToken(firstNumber: number, secondNumber: number) {
  const createdAt = Date.now();
  const payload = `${firstNumber}:${secondNumber}:${createdAt}`;
  const signature = signCaptcha(payload);

  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

function signaturesMatch(expected: string, supplied: string) {
  const expectedBuffer = Buffer.from(expected, "hex");
  const suppliedBuffer = Buffer.from(supplied, "hex");

  return (
    expectedBuffer.length === suppliedBuffer.length &&
    timingSafeEqual(expectedBuffer, suppliedBuffer)
  );
}

function validateCaptcha(token: unknown, answer: unknown) {
  if (typeof token !== "string" || token.length > 500) {
    return false;
  }

  let decodedToken = "";

  try {
    decodedToken = Buffer.from(token, "base64url").toString("utf8");
  } catch {
    return false;
  }

  const [firstValue, secondValue, createdAtValue, suppliedSignature, ...extra] =
    decodedToken.split(":");

  if (extra.length > 0 || !suppliedSignature) {
    return false;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);
  const createdAt = Number(createdAtValue);
  const submittedAnswer = Number(answer);

  if (
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    firstNumber < 1 ||
    firstNumber > 9 ||
    secondNumber < 1 ||
    secondNumber > 9 ||
    !Number.isFinite(createdAt) ||
    !Number.isFinite(submittedAnswer)
  ) {
    return false;
  }

  const age = Date.now() - createdAt;

  if (age < CAPTCHA_MIN_AGE_MS || age > CAPTCHA_TTL_MS) {
    return false;
  }

  const payload = `${firstNumber}:${secondNumber}:${createdAt}`;
  const expectedSignature = signCaptcha(payload);

  if (!signaturesMatch(expectedSignature, suppliedSignature)) {
    return false;
  }

  return submittedAnswer === firstNumber + secondNumber;
}

export async function GET() {
  try {
    const firstNumber = Math.floor(Math.random() * 8) + 1;
    const secondNumber = Math.floor(Math.random() * 8) + 1;

    return NextResponse.json(
      {
        question: `What is ${firstNumber} + ${secondNumber}?`,
        token: createCaptchaToken(firstNumber, secondNumber),
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Captcha creation error:", error);

    return NextResponse.json(
      { error: "Failed to create human check" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Hidden honeypot field. Real visitors never see or fill this in.
    if (body.companyWebsite) {
      return NextResponse.json({ success: true });
    }

    if (!validateCaptcha(body.captchaToken, body.captchaAnswer)) {
      return NextResponse.json({ error: "captcha" }, { status: 400 });
    }

    const name = escapeHtml(body.name);
    const phone = escapeHtml(body.phone);
    const email = escapeHtml(body.email);
    const service = escapeHtml(body.service);
    const location = escapeHtml(body.location);
    const homeSize = escapeHtml(body.homeSize);
    const message = escapeHtml(body.message);

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Lyn and Lilis Website <quotes@hometownwebservicesar.cc>",
      to: "Lynandlilistidyhouse@gmail.com",
      subject: `New quote request from ${name}`,
      replyTo: email || undefined,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Location:</strong> ${location || "Not provided"}</p>
        <p><strong>Home Size / Details:</strong> ${homeSize || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);

    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
