"use client";

import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-about" });
const MONO = "font-[family-name:var(--font-mono-about)]";

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

export default function AboutQuality() {
  return (
    <section
      className={`${mono.variable} border-t border-border/20 bg-background py-20 md:py-28`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              Quality Assurance
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight text-foreground">
              Quality Is Not an Option. It Is Our Standard.
            </h2>
          </div>
          <p className="text-sm md:text-base font-medium leading-relaxed text-muted-foreground">
            Every product manufactured by ZaamGrip is produced with a strong focus on quality,
            consistency, functionality, and customer specifications. Our goal is simple: deliver
            products that meet your requirements and represent your brand with confidence.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card">
          <div
            className={`flex items-center justify-between border-b border-border px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground ${MONO}`}
          >
            <span className="text-foreground">Inspection Sheet</span>
            <span>8 Checkpoints · Every Order</span>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            <motion.div
              initial={{ y: 0, opacity: 0.9 }}
              whileInView={{ y: "100%", opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-primary/20 to-transparent"
            />
            {checks.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group flex items-center gap-4 border-b border-border/60 px-5 py-4 sm:odd:border-r hover:bg-primary/5"
              >
                <span className={`w-12 shrink-0 text-xs text-primary/80 ${MONO}`}>
                  QC-{String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground">{item}</span>
                <Check
                  className="h-4 w-4 text-primary opacity-40 transition-opacity group-hover:opacity-100"
                  strokeWidth={3}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
