"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-void-bg py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Your Product. Our Manufacturing.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
        >
          From protective gloves and industrial workwear to performance sportswear
          and fashion apparel, ZaamGrip Industries provides the manufacturing
          expertise to turn your requirements into finished products.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 text-base font-black tracking-tight text-foreground md:text-lg"
        >
          Designed for your brand. Manufactured for your market. Built to perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-10"
        >
          <Link
            href="/request-a-quote"
            className="group inline-flex items-center justify-center rounded-xl bg-primary px-9 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(253,224,71,0.35)]"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
