"use client";

import { useCallback, useEffect, useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

type CaptchaChallenge = {
  question: string;
  token: string;
};

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [captchaLoading, setCaptchaLoading] = useState(true);

  const loadCaptcha = useCallback(async () => {
    setCaptchaLoading(true);

    try {
      const response = await fetch("/api/quote", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load human check");
      }

      const challenge = (await response.json()) as CaptchaChallenge;
      setCaptcha(challenge);
    } catch (error) {
      console.error("Captcha load error:", error);
      setCaptcha(null);
      setErrorMessage("The human check could not load. Please refresh the page or call or text us.");
      setStatus("error");
    } finally {
      setCaptchaLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/quote", { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load human check");
        }

        return response.json() as Promise<CaptchaChallenge>;
      })
      .then((challenge) => {
        setCaptcha(challenge);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error("Captcha load error:", error);
        setCaptcha(null);
        setErrorMessage("The human check could not load. Please refresh the page or call or text us.");
        setStatus("error");
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setCaptchaLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!captcha) {
      setStatus("error");
      setErrorMessage("The human check is not ready yet. Please refresh the page or call or text us.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData),
      captchaToken: captcha.token,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("sent");
        form.reset();
        void loadCaptcha();
        return;
      }

      if (data?.error === "captcha") {
        setErrorMessage("Please check the math answer and try again.");
        void loadCaptcha();
      } else {
        setErrorMessage("Something went wrong. Please call or text instead.");
      }

      setStatus("error");
    } catch (error) {
      console.error("Quote submit error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please call or text instead.");
    }
  }

  return (
    <section id="quote" className="section-padding bg-[var(--gray-dark)] text-white">
      <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-script text-4xl text-[var(--pink)]">Get a quote</p>
          <h2 className="font-heading mt-2 text-4xl font-bold md:text-5xl">
            Tell us what you need help with.
          </h2>
          <p className="mt-4 text-white/70">
            Send a few details and we’ll get back with you as soon as possible.
            For faster help, call or text directly.
          </p>

          <div className="mt-8 space-y-4 text-white/75">
            <p className="flex items-center gap-3">
              <FaPhone className="text-[var(--pink)]" /> Lili (870) 260-4536
              <FaPhone className="text-[var(--pink)]" /> Lyn (870) 997-7893
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--pink)]" /> lynandlilistidyhouse@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaClock className="text-[var(--pink)]" /> Mon–Fri 9am–6pm • Sat/Sun by request
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-[var(--gray-dark)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Name" className="input-style" />
            <input name="phone" required placeholder="Phone" className="input-style" />
            <input name="email" type="email" placeholder="Email" className="input-style sm:col-span-2" />

            <select name="service" required className="input-style sm:col-span-2">
              <option value="">Service needed</option>
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Tobacco Residue / Nicotine-Stained Wall Cleaning</option>
              <option>Move-In / Move-Out Cleaning</option>
              <option>Airbnb / Rental Turnover</option>
              <option>Professional Building Cleaning</option>
              <option>Home Organization & Decluttering</option>
              <option>Senior Home Cleaning & Household Help</option>
              <option>Holiday / Special Occasion Cleaning</option>
              <option>Post-Party Cleanup</option>
              <option>Other / Not Sure</option>
            </select>

            <input name="location" placeholder="City / area" className="input-style" />
            <input name="homeSize" placeholder="Home size or details" className="input-style" />

            <textarea
              name="message"
              placeholder="Tell us a little about the space and what you need help with..."
              rows={5}
              className="input-style sm:col-span-2"
            />

            <div className="sm:col-span-2 rounded-2xl border border-black/10 bg-black/[0.03] p-4">
              <label htmlFor="captchaAnswer" className="block text-sm font-bold">
                Quick human check: {captchaLoading ? "Loading..." : captcha?.question}
              </label>
              <input
                id="captchaAnswer"
                name="captchaAnswer"
                type="number"
                inputMode="numeric"
                required
                disabled={captchaLoading || !captcha}
                placeholder="Your answer"
                className="input-style mt-2 w-full"
              />
              <p className="mt-2 text-xs text-black/55">
                This helps us keep automated quote spam out of the inbox.
              </p>
            </div>

            <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="companyWebsite">Leave this field empty</label>
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </div>

          <button
            disabled={status === "loading" || captchaLoading || !captcha}
            className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : <>Request Quote <FaPaperPlane /></>}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm font-bold text-green-700">
              Quote request sent. We’ll get back with you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-bold text-red-700">
              {errorMessage || "Something went wrong. Please call or text instead."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
