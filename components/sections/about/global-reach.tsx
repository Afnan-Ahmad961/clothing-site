"use client";

import { JetBrains_Mono } from "next/font/google";
import CountUp from "@/components/CountUp";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-about" });
const MONO = "font-[family-name:var(--font-mono-about)]";

const clients = [
  "Businesses",
  "Brands",
  "Wholesalers",
  "Distributors",
  "Importers",
  "Retailers",
  "Sports organizations",
  "Industrial companies",
];

const industries = [
  "Construction",
  "Manufacturing",
  "Oil & Gas",
  "Automotive",
  "Logistics",
  "Warehousing",
  "Agriculture",
  "Security",
  "Sports & Fitness",
  "Fashion",
  "Retail",
  "Corporate",
  "Hospitality",
  "Outdoor & Recreation",
];

export default function GlobalReach() {
  return (
    <section
      className={`${mono.variable} border-t border-border/20 bg-background py-20 md:py-28`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
            Global Reach
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-[1.02] tracking-tight text-foreground">
            Manufacturing for the World
          </h2>
          <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-muted-foreground">
            ZaamGrip Industries serves clients across international markets and works with
            businesses looking for dependable manufacturing solutions. From our manufacturing
            facility to markets around the world, our international clients include:
          </p>
        </div>

        {/* Counter band */}
        <div className="mt-12 flex flex-col gap-8 border-y border-border py-10 md:flex-row md:items-center md:gap-16">
          <div className="flex flex-col">
            <div className="flex items-baseline text-5xl md:text-6xl font-black tracking-tight text-primary">
              <CountUp from={0} to={14} direction="up" duration={1.2} delay={0} className="count-up-text" />
            </div>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Industries served</p>
          </div>
          <div className="hidden h-14 w-px bg-border md:block" />
          <div className="flex flex-col">
            <div className="flex items-baseline text-5xl md:text-6xl font-black tracking-tight text-primary">
              <CountUp from={0} to={8} direction="up" duration={1.2} delay={0} className="count-up-text" />
            </div>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Client categories</p>
          </div>
          <div className="hidden h-14 w-px bg-border md:block" />
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-black tracking-tight text-primary">Global</div>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Markets reached</p>
          </div>
        </div>

        {/* Supporting lists */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.2em] text-primary ${MONO}`}>
              Who We Supply
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {clients.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className={`text-[11px] uppercase tracking-[0.2em] text-primary ${MONO}`}>
              Industries We Serve
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-semibold text-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
