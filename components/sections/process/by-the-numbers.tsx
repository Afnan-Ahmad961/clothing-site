"use client";

import * as React from "react";
import CountUp from "@/components/CountUp";

export default function ByTheNumbers() {
  return (
    <section className="py-24 bg-background text-foreground border-t border-border/20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Title and Description */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            By the Numbers
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
            Our production capabilities are built for scale, efficiency, and consistent quality
            across every order.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16">
          {/* Main Stat (Left Column) */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none flex items-baseline">
              <CountUp
                from={25000}
                to={30000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
              />
              <span>+</span>
            </div>
            <p className="mt-4 text-sm md:text-base text-muted-foreground font-medium max-w-xs">
              units monthly production capacity
            </p>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-px bg-border/60 self-stretch" />

          {/* Other Stats (Right Column) */}
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Stat 2 */}
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none flex items-baseline">
                <CountUp
                  from={0}
                  to={110}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0}
                />
                <span>+</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                stitching machines
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none flex items-baseline">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0}
                />
                <span>%</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                in-house printing & embroidery
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none">
                Global
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                fabric sourcing network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
