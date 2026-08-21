"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessHero() {
  return (
    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground"
        >
          From Concept to Production
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
        >
          From your first product requirements to global delivery, ZaamGrip
          Industries follows a controlled manufacturing process — sampling,
          production, quality control, and packaging — to ensure consistent
          quality at every stage across workwear, sportswear, gloves, and apparel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            href="/request-a-quote"
            className="group inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Start Your Project
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
