import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

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