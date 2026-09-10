"use client";

import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-about" });
const MONO = "font-[family-name:var(--font-mono-about)]";

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

export default function AboutFacility() {
  return (
    <section
      className={`${mono.variable} border-t border-border/20 bg-background py-20 md:py-28`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-2xl"
          >
            <Image
              src="/images/factory2.jpg"
              alt="ZaamGrip manufacturing facility"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </motion.div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              Our Facility
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-[1.05] tracking-tight text-foreground">
              Where Ideas Become Products
            </h2>
            <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-muted-foreground">
              Our manufacturing operations bring together skilled professionals, organized
              production processes, quality control, and product expertise — everything needed to
              take a concept from the first sample to a finished, export-ready order.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2">
              {operations.map((op, i) => (
                <motion.div
                  key={op}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: (i % 2) * 0.05 }}
                  className="flex items-baseline gap-3 border-b border-border/60 py-3 sm:odd:pr-6"
                >
                  <span className={`text-xs text-primary/70 ${MONO}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{op}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
