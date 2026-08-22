"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Globe,
  HeartHandshake,
  Layers,
  Settings2,
  Tag,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Multi-Category Manufacturing",
    copy: "Source workwear, sportswear, gloves, and fashion apparel from one manufacturing partner.",
    icon: Layers,
  },
  {
    title: "Custom Production",
    copy: "Solutions tailored to your designs, specifications, branding, and requirements.",
    icon: Settings2,
  },
  {
    title: "Quality Focused",
    copy: "A dedicated approach to maintaining consistent product quality.",
    icon: BadgeCheck,
  },
  {
    title: "Global Experience",
    copy: "Working with clients and businesses across international markets.",
    icon: Globe,
  },
  {
    title: "Competitive Manufacturing",
    copy: "Efficient production designed to deliver strong value for international buyers.",
    icon: TrendingUp,
  },
  {
    title: "Brand Ready",
    copy: "OEM, private-label, custom branding, and packaging solutions available.",
    icon: Tag,
  },
  {
    title: "Scalable Production",
    copy: "Manufacturing solutions suitable for growing brands and established businesses.",
    icon: Factory,
  },
  {
    title: "Long-Term Partnerships",
    copy: "We focus on building lasting relationships rather than one-time transactions.",
    icon: HeartHandshake,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyZaamGrip() {
  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
            Why ZaamGrip?
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground">
            Built for Businesses. Trusted by Global Clients.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                variants={fadeIn}
                className="group"
              >
                <div className="flex h-12 w-12 items-center justify-center text-primary transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6 stroke-[2.25]" />
                </div>
                <h3 className="mt-5 text-xl font-black leading-tight tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                  {feature.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
