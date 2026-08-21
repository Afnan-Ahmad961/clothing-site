"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function QuoteHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-12 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 w-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold text-primary"
        >
          <FileText className="h-4 w-4" />
          Request a Quote
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Let&apos;s Manufacture Your Next Product.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
        >
          Tell us what you need and our team will get back to you with the next
          steps. The more detail you share, the faster we can prepare an accurate
          quotation.
        </motion.p>
      </div>
    </section>
  );
}
