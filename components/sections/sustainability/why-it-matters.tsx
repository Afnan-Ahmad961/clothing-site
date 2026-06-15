"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Blocks, Factory, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "End-to-End Sportswear Manufacturing",
    copy:
      "From performance fabric sourcing and pattern development to cutting, stitching, finishing, and packing, we manage gym wear, street wear, and team sportswear under one roof.",
    icon: Blocks,
  },
  {
    title: "In-House Printing & Embroidery",
    copy:
      "Screen printing, sublimation, heat transfer, and custom embroidery give sports teams, gyms, and athletic brands sharp branding across jerseys, hoodies, joggers, and training tops.",
    icon: Sparkles,
  },
  {
    title: "Scalable Production Capacity",
    copy:
      "Structured production planning supports growing orders for compression tights, tracksuits, street wear drops, baseball batting gloves, MMA gloves, and weight-lifting gloves.",
    icon: Factory,
  },
  {
    title: "Strict Quality Control",
    copy:
      "Every performance garment and protective glove moves through measurement checks, stitch inspection, print review, and finishing control before it reaches brand partners.",
    icon: BadgeCheck,
  },
];

export default function WhyItMatters() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <h2 className="max-w-lg text-2xl font-black leading-[1.12] text-foreground md:text-3xl">
              Meeting athletic product demands with precision and sustainability
            </h2>
            <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              At ZaamGrip Industries, we deliver scalable, responsible cut-to-pack manufacturing
              for sports teams, gym brands, retailers, and performance labels. From technical
              fabrics to protective glove components, every stage is handled with disciplined
              quality control and cleaner production choices.
            </p>
          </motion.div>

          <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group grid gap-6 sm:grid-cols-[3rem_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center text-sustainability transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6 stroke-[2.25]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black leading-tight text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
                      {reason.copy}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
