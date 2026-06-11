"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Check, ArrowRight } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="relative w-full py-24 bg-background overflow-hidden z-10">
      <div className="container w-full max-w-6xl bg-accent p-12 rounded-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-xl"
        >
          {/* Logo / Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sustainability to-emerald-400 shadow-lg shadow-sustainability/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-sustainability text-sm tracking-wide">
              Sustainability Matters
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] tracking-tight text-foreground mb-6">
            Environmental Responsibility at Our Core
          </h2>

          {/* Paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed font-medium mb-8">
            We believe sustainable manufacturing isn't optional—it's essential. From
            water conservation to renewable energy, every decision we make
            considers our impact on the planet. We're committed to creating
            premium textiles while protecting the environment for future
            generations.
          </p>

          {/* Checkmarks */}
          <ul className="space-y-4 mb-10 w-full">
            {[
              "60% reduction in water consumption",
              "Carbon neutral operations achieved",
              "85% of manufacturing waste recycled",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-sustainability shrink-0 shadow-sm shadow-sustainability/30">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-sustainability to-emerald-500 px-8 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            Our Sustainability Practices
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Right Image Column */}
        <div className="relative w-full h-full flex items-center justify-center lg:mt-0">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-md lg:max-w-none h-[380px] sm:h-[420px] lg:h-[480px] rounded-2xl bg-[#0d5c46] shadow-2xl flex flex-col justify-center"
          >
            {/* Inner container centers the image with green padding above and below */}
            <div className="relative w-full h-[60%] sm:h-[65%]">
              <Image
                src="/sustainability-image.avif"
                alt="Sustainable Plant Growth"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 -left-6 sm:bottom-6 sm:-left-20 z-20 bg-background/80 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-1 w-48"
            >
              <span className="text-sm font-medium text-muted-foreground/90">Annual Impact</span>
              <span className="text-4xl font-black text-sustainability drop-shadow-sm">50M+</span>
              <span className="text-xs font-medium text-muted-foreground/70">Gallons Saved</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
