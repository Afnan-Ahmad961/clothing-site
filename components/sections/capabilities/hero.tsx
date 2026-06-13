"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CapabilitiesHero() {
  return (
    <section className="bg-bacground text-foreground dark:bg-background dark:text-foreground pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
        >
          Our Sportswear &amp; Glove Manufacturing Capabilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-base md:text-lg leading-relaxed font-medium max-w-4xl text-foreground/70 dark:text-muted-foreground"
        >
          ZaamGrip Industries delivers complete cut-to-pack performance wear and sports glove
          manufacturing for athletic brands, sports teams, gyms, and retailers worldwide. From
          technical fabric sourcing and pattern development to sampling, cutting, stitching,
          in-house printing, embroidery, and final packing — every stage of production is handled
          under one roof. With advanced stitching lines and a monthly capacity of 25,000–30,000
          units, we combine skilled craftsmanship, modern production systems, and strict quality
          control across gym wear, street wear, sports jerseys, compression gear, and specialist
          gloves. Our vertically integrated approach lets partners scale confidently while
          maintaining premium performance standards and sustainable manufacturing practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Partner Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
