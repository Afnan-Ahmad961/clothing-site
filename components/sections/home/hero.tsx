"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Leaf, Factory, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-12 pb-12 overflow-hidden flex items-center z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
            <span className="block text-primary italic mb-2">Sustainable</span>
            <span className="block">Textile</span>
            <span className="block">Manufacturing</span>
          </h1>

          <p className="mt-6 text-md md:text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
            From fabric sourcing to final packaging, Byon Textile delivers premium cut-to-pack garment solutions for emerging and established fashion brands worldwide.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="group inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]">
              Explore our Process
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex h-14 items-center justify-center rounded-xl bg-secondary/50 backdrop-blur-md border border-border px-8 text-sm font-bold text-foreground transition-all hover:bg-secondary hover:scale-105 active:scale-95">
              Contact Sales Team
            </button>
          </div>

          {/* Reviews Section */}
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary">
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Reviewer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground">
                7K+
              </div>
            </div>

            <div className="h-10 w-px bg-border hidden sm:block"></div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.8 <span className="text-muted-foreground font-normal">/ 5</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                From Over <span className="font-bold text-foreground">12.8k</span> Reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image & Floating Elements Column */}
        <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0">

          {/* Decorative Rings behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-primary/60" />

          {/* Floating Clothing Image */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[110%] h-[110%] z-10 drop-shadow-2xl"
          >
            <Image
              src="/hero-clothing.png"
              alt="Premium Clothing Manufacturing"
              fill
              priority
              className="object-contain object-center scale-110"
            />
          </motion.div>

          {/* Floating Badge 1 - Top Right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="absolute top-[15%] right-[5%] z-20 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border border-border flex items-center justify-center shadow-xl">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xs font-medium text-foreground max-w-[80px] text-center leading-tight">
              Global Standards
            </div>
          </motion.div>

          {/* Floating Badge 2 - Middle Left */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] left-[-5%] lg:left-[5%] z-20 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border border-border flex items-center justify-center shadow-xl">
              <Factory className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-xs font-medium text-foreground/80 max-w-[80px] text-center leading-tight">
              Ethical Production
            </div>
          </motion.div>

          {/* Floating Badge 3 - Bottom Right */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-[-5%] lg:right-[0%] z-20 flex items-center gap-3 bg-background/80 backdrop-blur-xl border border-border rounded-full pr-4 p-1.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-xs font-medium text-foreground pr-2">Sustainable Materials</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}