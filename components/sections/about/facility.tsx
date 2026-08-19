"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const operations = [
  "Production facility",
  "Manufacturing machinery",
  "Cutting & preparation",
  "Stitching / assembly",
  "Glove production",
  "Quality inspection",
  "Packaging",
  "Finished products",
  "Warehouse",
  "Dispatch",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutFacility() {
  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-2xl"
          >
            <Image
              src="/factory2.jpg"
              alt="ZaamGrip manufacturing facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            variants={fadeIn}
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
              Our Facility
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
              Where Ideas Become Products
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
              Our manufacturing operations bring together skilled professionals, organized
              production processes, quality control, and product expertise — everything needed to
              take a concept from the first sample to a finished, export-ready order.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {operations.map((operation) => (
                <span
                  key={operation}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {operation}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
