"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const checks = [
  "Material inspection",
  "Production monitoring",
  "Workmanship inspection",
  "Product specification checks",
  "Size and measurement checks",
  "Finishing inspection",
  "Final quality inspection",
  "Packaging inspection",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutQuality() {
  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="lg:sticky lg:top-32"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
              Quality Assurance
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground">
              Quality Is Not an Option. It Is Our Standard.
            </h2>
            <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Every product manufactured by ZaamGrip is produced with a strong focus on quality,
              consistency, functionality, and customer specifications. Our goal is simple: deliver
              products that meet your requirements and represent your brand with confidence.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            variants={fadeIn}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
              >
                <CircleCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-semibold text-foreground">{check}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
