"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ProcessTimeline from "@/components/sections/process/process-timeline";
import ByTheNumbers from "@/components/sections/process/by-the-numbers";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground"
          >
            Our Manufacturing Process
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
          >
            From fabric sourcing to final packing, Byon Textile delivers a complete cut-to-pack
            manufacturing process with in-house production, strict quality control, and scalable
            output to ensure consistent quality at every stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <button className="group inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]">
              Start Production
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      <ProcessTimeline />
      <ByTheNumbers />
    </main>
  );
}
