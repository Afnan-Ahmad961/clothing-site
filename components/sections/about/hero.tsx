"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Gauge, Globe, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Quality",
    copy: "Consistent manufacturing standards and attention to detail on every product.",
    icon: BadgeCheck,
  },
  {
    title: "Performance",
    copy: "Products designed around real-world use — comfort, durability, and functionality.",
    icon: Gauge,
  },
  {
    title: "Reliability",
    copy: "Professional production management and dependable customer service.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    copy: "Continuous improvement in materials, construction, designs, and processes.",
    icon: Lightbulb,
  },
  {
    title: "Global Partnerships",
    copy: "Long-term relationships with customers and businesses across international markets.",
    icon: Globe,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="bg-background pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-black uppercase tracking-[0.18em] text-primary"
          >
            About ZaamGrip
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground"
          >
            Your Global Manufacturing Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base md:text-lg leading-relaxed font-medium text-muted-foreground"
          >
            At ZaamGrip Industries, we believe great manufacturing is more than producing a
            product — it is about creating a reliable supply-chain partnership. Our capabilities
            cover multiple product categories, allowing international clients to source a wide
            range of apparel and protective products from one trusted manufacturing partner. Our
            experienced team works closely with customers from initial requirements and sampling
            through manufacturing, quality inspection, packaging, and shipment preparation.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                variants={fadeIn}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-black tracking-tight text-foreground">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
                  {value.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
