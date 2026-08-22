"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CapabilitiesHero() {
  return (
    <section className="bg-bacground text-foreground dark:bg-background dark:text-foreground pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container px-6 md:px-12 max-w-5xl flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
        >
          One Manufacturer.<br />
          Multiple Product Categories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-base md:text-lg leading-relaxed font-medium max-w-4xl text-foreground/70 dark:text-muted-foreground"
        >
          ZaamGrip Industries is a premier manufacturer of high-performance gym wear, street wear,
          and sports gloves. We manage the entire production journey in-house—from advanced material
          sourcing to custom printing, embroidery, and packaging. Our specialized multi-category setup
          enables global brands and sports teams to source premium athletic apparel and gloves from
          a single trusted partner with custom private-label solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/request-a-quote"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Request a Quote
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
