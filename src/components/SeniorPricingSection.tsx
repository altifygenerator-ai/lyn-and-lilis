// src/components/SeniorPricingSection.tsx

"use client";

import { motion } from "framer-motion";
import { FaHeart, FaHouseChimneyUser, FaHandHoldingHeart } from "react-icons/fa6";

export default function SeniorPricingSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--pink-soft)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[var(--seafoam-soft)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="container-custom relative"
      >
        <div className="soft-card grid gap-8 overflow-hidden p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--pink-soft)] px-4 py-2 text-sm font-extrabold text-[var(--gray-dark)]">
              <FaHeart className="text-[var(--pink)]" />
              Senior pricing available
            </div>

            <p className="font-script text-3xl text-[var(--pink)] md:text-4xl">
              A little extra help goes a long way
            </p>

            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--gray-dark)] md:text-5xl">
              Fair cleaning help for seniors and families who need it.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--foreground)]/75 md:text-lg">
              We know a clean home matters, but keeping up with everything can
              get harder over time. Lyn & Lili’s Tidy House offers senior
              pricing for customers who need dependable help with regular home
              cleaning, laundry, bedding, light organization, bathrooms, kitchens,
              floors, and the everyday household work that makes home feel better.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="/services/senior-home-help" className="btn-primary">
                View Senior Home Help
              </a>

              <a href="tel:8702604536" className="btn-secondary">
                Call or Text
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--pink-soft)] p-6">
              <FaHouseChimneyUser className="mb-4 text-3xl text-[var(--pink)]" />
              <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                Regular home cleaning
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--foreground)]/70">
                Helpful upkeep for the rooms that need attention most.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--seafoam-soft)] p-6">
              <FaHandHoldingHeart className="mb-4 text-3xl text-[var(--seafoam)]" />
              <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                Done with real care
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--foreground)]/70">
                Friendly, dependable service with attention to the small details.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}