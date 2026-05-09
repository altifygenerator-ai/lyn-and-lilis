"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

export default function ServiceAreas() {
  return (
    <section id="areas" className="section-padding">
      <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-script text-4xl text-[var(--pink)]">Local service</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            Proudly serving southwest Arkansas.
          </h2>
          <p className="mt-4 text-black/65">
            Based around Amity and Glenwood, serving nearby homes, rentals,
            offices, and professional buildings.
          </p>

          <Link href="/#quote" className="btn-secondary mt-6">
            Ask About Your Area <FaArrowRight />
          </Link>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="soft-card block h-full p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
              >
                <FaLocationDot className="mb-4 text-2xl text-[var(--pink)]" />
                <h3 className="font-heading text-2xl font-bold">
                  {location.city}, {location.state}
                </h3>
                <p className="mt-2 text-sm text-black/60">
                  Home cleaning, deep cleaning, move-out cleaning, Airbnb
                  turnovers, and small business cleaning.
                </p>

                <div className="mt-4 space-y-2 text-sm font-bold text-[var(--gray-dark)]">
                  {location.priorityServiceSlugs?.slice(0, 3).map((serviceSlug) => {
                    const service = services.find((item) => item.slug === serviceSlug);
                    if (!service) return null;

                    return (
                      <span
                        key={service.slug}
                        className="block hover:text-[var(--pink)]"
                      >
                        {service.title} in {location.city}
                      </span>
                    );
                  })}
                </div>

                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]">
                  View {location.city} Services <FaArrowRight />
                </p>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="soft-card bg-[var(--pink-soft)] p-6"
          >
            <FaLocationDot className="mb-4 text-2xl text-[var(--seafoam)]" />
            <h3 className="font-heading text-2xl font-bold">Nearby Areas</h3>
            <p className="mt-2 text-sm text-black/60">
              If you’re close by, reach out and ask. We’re happy to let you know
              if your location is in range.
            </p>
            <Link
              href="/#quote"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]"
            >
              Ask for a Quote <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}