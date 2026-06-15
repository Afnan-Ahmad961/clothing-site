"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const impactStats = [
  { label: "Water Saved Annually", value: "50M+", detail: "gallons" },
  { label: "Emissions Offset", value: "100%", detail: "" },
  { label: "Waste Recycled", value: "85%", detail: "" },
];

export default function SustainabilityHero() {
  return (
    <section className="relative bg-card mx-4 mt-32 overflow-hidden rounded-t-4xl border-t border-border bg-background px-6 pt-16 pb-20 text-foreground sm:mx-8 md:px-12 lg:mx-12">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-1/2 bg-sustainability/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-6 left-0 h-96 w-1/3 bg-sustainability/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-sustainability/40 bg-sustainability/10 px-5 py-3 text-base font-black text-sustainability md:text-lg">
            <Leaf className="h-4 w-4" />
            Our Commitment to Earth
          </div>
          <h1 className="max-w-5xl text-4xl font-black leading-[0.98] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Sustainable{" "}
            <span className="bg-gradient-to-r from-sustainability to-sustainability/70 bg-clip-text text-transparent">
              Sportswear
            </span>
            <br />
            <span className="bg-gradient-to-r from-sustainability to-sustainability/70 bg-clip-text text-transparent">
              Manufacturing
            </span>
          </h1>
          <p className="mt-10 max-w-6xl font-medium leading-loose text-muted-foreground md:text-lg">
            At ZaamGrip Industries, sustainability is woven into every performance jersey,
            compression tight, hoodie, tracksuit, batting glove, MMA glove, and gym glove we
            produce. Through responsible materials, careful resource control, and continuous
            process improvement, we help athletic brands build high-performance products with
            lower-impact manufacturing.
          </p>
        </motion.div>

        <div className="mt-14 grid w-full max-w-4xl gap-5 sm:grid-cols-[1.35fr_0.85fr_0.8fr]">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="rounded-xl border border-sustainability/30 bg-card/80 px-8 py-7 backdrop-blur"
            >
              <p className="text-lg font-medium text-muted-foreground">{stat.label}</p>
              <p className="mt-3 text-3xl font-black leading-none text-sustainability md:text-4xl">
                {stat.value}
                {stat.detail ? <span className="text-current"> {stat.detail}</span> : null}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
