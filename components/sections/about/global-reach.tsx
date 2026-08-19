"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

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

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GlobalReach() {
  return (
    <section className="border-t border-border/20 bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Global Reach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-primary">
              Global Reach
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
              Manufacturing for the World
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
              ZaamGrip Industries serves clients across international markets and works with
              businesses looking for dependable manufacturing solutions. From our manufacturing
              facility to markets around the world, our international clients include:
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Industries We Serve */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            variants={fadeIn}
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
              Industries We Serve
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-border bg-background px-4 py-4 text-sm font-semibold text-foreground"
                >
                  {industry}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
