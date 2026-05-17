// src/components/ReviewsSection.tsx

"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaStar } from "react-icons/fa";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[var(--seafoam-soft)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--pink)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--seafoam)]/30 blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-script text-3xl text-[var(--pink)] md:text-4xl">
            Kind words from customers
          </p>

          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--gray-dark)] md:text-5xl">
            Locally trusted cleaning with a personal touch.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--foreground)]/75 md:text-lg">
            A few sweet words from customers who have trusted Lyn & Lili’s Tidy
            House for home cleaning, rental cleanings, and fresh starts around
            southwest Arkansas.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-extrabold text-[var(--gray-dark)] shadow-sm">
            <FaGoogle className="text-lg" />
            <span>5-star rated on Google</span>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="soft-card relative flex min-h-[280px] flex-col justify-between overflow-hidden p-7"
            >
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[var(--pink-soft)]" />
              <div className="absolute right-9 top-9 h-10 w-10 rounded-full bg-[var(--seafoam-soft)]" />

              <div className="relative">
                <div className="flex items-center gap-1 text-[var(--pink)]">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-base" />
                  ))}
                </div>

                <p className="mt-6 text-base leading-8 text-[var(--foreground)]/80">
                  “{review.text}”
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                <div>
                  <p className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--foreground)]/55">
                    Customer feedback
                  </p>
                </div>

                <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--seafoam-soft)] text-[var(--gray-dark)]">
                  <FaGoogle />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="max-w-2xl text-sm leading-7 text-[var(--foreground)]/65">
            Want to see more? Visit their Google profile to read more reviews or
            leave a kind word after your cleaning.
          </p>

          <a
            href="https://www.google.com/search?q=Lyn+%26+Lili%27s+Tidy+House+Home+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaGoogle />
            Read Google Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}