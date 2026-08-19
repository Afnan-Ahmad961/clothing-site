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
          One Manufacturer. Multiple Product Categories.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-base md:text-lg leading-relaxed font-medium max-w-4xl text-foreground/70 dark:text-muted-foreground"
        >
          ZaamGrip Industries manufactures workwear, protective and work gloves, sportswear, and
          fashion apparel for brands, businesses, wholesalers, distributors, and organizations
          worldwide. From material sourcing and sampling to cutting, stitching, in-house printing,
          embroidery, and final packing, every stage of production is handled with skilled
          craftsmanship, modern manufacturing, and strict quality control. Our multi-category
          capability lets international clients source a wide range of apparel and protective
          products from one trusted manufacturing partner — with OEM, private-label, and fully
          customized solutions built around your specifications, branding, and quantities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
