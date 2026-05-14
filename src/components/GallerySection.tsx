"use client";

import { motion } from "framer-motion";

const images = [
  
  "/images/after-1.png",
  "/images/after-2.png",
  "/images/after-3.png",
  "/images/bathroom-1.png",
  "/images/bathroom-2.png",
  "/images/before-1.png",
  "/images/before-2.png",
  "/images/before-3.png",
  "/images/livingroom-1.png",
  "/images/livingroom-2.png",
  
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl px-5"
        >
          <p className="font-script text-4xl text-[var(--pink)]">Fresh spaces</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            A cleaner home, without the stress.
          </h2>
          <p className="mt-4 text-black/65">
  These are just example photos for now — as we start working with local homes, we’ll be updating this with real cleanings so you can see our actual results.
</p>
        </motion.div>

        <div className="grid gap-5 px-5 md:grid-cols-4">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt="Clean home service example"
                className="h-full min-h-[240px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}