"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Leaf, Factory, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-6rem)] pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden flex items-center z-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-2/3 max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl lg:left-1/4" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center max-w-2xl mx-auto lg:mx-0 lg:items-start lg:text-left"
        >
          {/* Eyebrow */}
          <span className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
            Global Sports Gear Manufacturer
          </span>

          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block italic text-primary">Global</span>
            <span className="block">Manufacturing.</span>
            <span className="block">Built for Performance.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg lg:max-w-lg">
            ZaamGrip Industries is a registered and certified manufacturer of sports gloves,
            protective gear, sportswear, and training accessories for brands, businesses, and
            distributors worldwide.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start">
            <Link
              href="/capabilities"
              className="group inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)] sm:w-auto"
            >
              Explore Our Products
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-border bg-secondary/50 px-8 py-4 text-sm font-bold text-foreground backdrop-blur-md transition-all hover:bg-secondary hover:scale-105 active:scale-95 sm:w-auto"
            >
              Request a Quote
            </Link>
          </div>

          {/* Reviews / Social proof */}
          <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:gap-6 lg:items-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-secondary"
                >
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Reviewer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-secondary text-[10px] font-bold text-foreground">
                7K+
              </div>
            </div>

            <div className="hidden h-10 w-px bg-border sm:block" />

            <div className="flex flex-col items-center gap-1 sm:items-start">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-bold text-foreground">
                  4.8 <span className="font-normal text-muted-foreground">/ 5</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                From Over <span className="font-bold text-foreground">12.8k</span> Reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image & Floating Elements Column — desktop only */}
        <div className="relative hidden w-full h-[600px] lg:flex lg:h-[700px] items-center justify-center">
          {/* Decorative Rings behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-primary/60" />

          {/* Floating Product Image */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[110%] h-[110%] z-10 drop-shadow-2xl"
          >
            <Image
              src="/images/hero-products.png"
              alt="ZaamGrip sports gloves and training accessories"
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
              Global Markets
            </div>
          </motion.div>

          {/* Floating Badge 2 - Middle Left */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] left-[-5%] xl:left-[5%] z-20 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border border-border flex items-center justify-center shadow-xl">
              <Factory className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-xs font-medium text-foreground/80 max-w-[80px] text-center leading-tight">
              OEM &amp; Private Label
            </div>
          </motion.div>

          {/* Floating Badge 3 - Bottom Right */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-[-5%] xl:right-[0%] z-20 flex items-center gap-3 bg-background/80 backdrop-blur-xl border border-border rounded-full pr-4 p-1.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-xs font-medium text-foreground pr-2">Certified Quality</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
