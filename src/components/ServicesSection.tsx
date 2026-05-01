"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl px-5"
        >
          <p className="font-script text-4xl text-[var(--pink)]">What we offer</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)] md:text-5xl">
            Cleaning services made simple.
          </h2>
          <p className="mt-4 text-black/65">
            From regular upkeep to deep cleaning and rental turnovers, Lyn &
            Lili’s keeps things clear, honest, and easy to schedule.
          </p>
        </motion.div>

        <div className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="soft-card block h-full p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--seafoam-soft)] text-xl text-[var(--gray-dark)]">
                    <Icon />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                    {service.title}
                  </h3>

                  <p className="mt-2 font-extrabold text-[var(--seafoam)]">
                    {service.price}
                  </p>

                  <p className="mt-4 text-black/65">{service.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-black/65">
                    {service.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FaCheck className="text-[var(--pink)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]">
                    View Details <FaArrowRight />
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}