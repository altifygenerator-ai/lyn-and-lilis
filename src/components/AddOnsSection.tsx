"use client";

import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const addOns = [
  "Oven cleaning",
  "Fridge cleaning",
  "Interior windows",
  "Laundry & folding",
  "Baseboard detailing",
  "Inside cabinets",
  "Pet hair detail",
  "Extra bathroom detail",
];

export default function AddOnsSection() {
  return (
    <section className="bg-[var(--seafoam-soft)] py-20">
      <div className="container-custom grid items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-script text-4xl text-[var(--pink)]">A little extra</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            Common extras & add-ons.
          </h2>
          <p className="mt-4 text-black/65">
            Add-ons can be included with most cleanings. Pricing depends on the
            size and condition of the space, but we’ll keep everything clear
            before getting started.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {addOns.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-bold shadow-sm"
            >
              <FaPlus className="text-[var(--pink)]" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}