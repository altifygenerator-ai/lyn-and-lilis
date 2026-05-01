"use client";

import { useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/quote", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="section-padding bg-[var(--gray-dark)] text-white">
      <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-script text-4xl text-[var(--pink)]">Get a quote</p>
          <h2 className="font-heading mt-2 text-4xl font-bold md:text-5xl">
            Tell us what you need cleaned.
          </h2>
          <p className="mt-4 text-white/70">
            Send a few details and we’ll get back with you as soon as possible.
            For faster help, call or text directly.
          </p>

          <div className="mt-8 space-y-4 text-white/75">
            <p className="flex items-center gap-3">
              <FaPhone className="text-[var(--pink)]" /> Lili (870) 260-4536
              <FaPhone className="text-[var(--pink)]" /> Lyn  (870) 9977-7893
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
              <option>Move-In / Move-Out Cleaning</option>
              <option>Airbnb / Rental Turnover</option>
              <option>Professional Building Cleaning</option>
              <option>Other / Not Sure</option>
            </select>

            <input name="location" placeholder="City / area" className="input-style" />
            <input name="homeSize" placeholder="Home size or details" className="input-style" />

            <textarea
              name="message"
              placeholder="Tell us a little about the space..."
              rows={5}
              className="input-style sm:col-span-2"
            />
          </div>

          <button disabled={status === "loading"} className="btn-primary mt-5 w-full">
            {status === "loading" ? "Sending..." : <>Request Quote <FaPaperPlane /></>}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm font-bold text-green-700">
              Quote request sent. We’ll get back with you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-bold text-red-700">
              Something went wrong. Please call or text instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}