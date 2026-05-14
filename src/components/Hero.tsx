"use client";

import { motion } from "framer-motion";
import { FaPhone, FaArrowRight, FaWandMagicSparkles } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
     <div
  className="absolute inset-0 -z-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero.png')",
  }}
/>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,246,244,0.97),rgba(248,246,244,0.82),rgba(248,246,244,0.25))]" />

      <div className="container-custom px-5">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--seafoam-soft)] px-4 py-2 text-sm font-bold text-[var(--gray-dark)]">
            <FaWandMagicSparkles className="text-[var(--seafoam)]" />
            Serving Amity, Glenwood, Arkadelphia, Hot Springs & nearby areas
          </p>

          <h1 className="font-script text-6xl leading-none text-[var(--gray-dark)] md:text-8xl">
            Lyn & Lili’s
          </h1>

          <p className="mt-3 text-xl font-extrabold text-[var(--gray-dark)] md:text-2xl">
            Tidy House Home Services
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            House cleaning, deep cleaning, Airbnb turnover cleaning, and move-out cleaning services across Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#quote" className="btn-primary">
              Request a Quote <FaArrowRight />
            </a>
            <a href="tel:8700000000" className="btn-secondary">
              <FaPhone /> Call or Text
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-black/60">
            <span>Locally owned</span>
            <span>•</span>
            <span>Flexible scheduling</span>
            <span>•</span>
            <span>One-time or recurring</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}