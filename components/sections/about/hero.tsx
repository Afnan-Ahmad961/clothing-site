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
            At ZaamGrip Industries, great manufacturing means being a reliable supply-chain partner. 
            We offer end-to-end solutions—from sampling and production to final packaging—allowing 
            global brands to source premium athletic apparel and protective gear under one roof.
          </motion.p>
        </div>

        {/* Desktop Connected Values */}
        <div className="hidden md:block relative mt-40">
          {/* Main connection line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>

          <div className="relative flex justify-between">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="flex flex-col items-center flex-1 group"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 mb-8 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-background border-4 border-border group-hover:border-primary flex items-center justify-center shadow-sm group-hover:shadow-[0_0_20px_rgba(253,224,71,0.2)] transition-all duration-300 group-hover:-translate-y-2">
                      <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors stroke-[1.5]" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-primary-foreground shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3 max-w-[14rem] transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-black text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed px-2">
                      {value.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Connected Values */}
        <div className="md:hidden mt-28">
          <div className="relative space-y-8 pl-8">
            {/* Mobile connection line */}
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary to-primary/10"></div>

            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="relative group"
                >
                  {/* Mobile icon circle */}
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md z-10">
                    <Icon className="w-4 h-4 text-primary stroke-[2]" />
                  </div>

                  {/* Mobile info card */}
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-black text-primary/30 text-3xl">
                        0{index + 1}
                      </div>
                      <h3 className="text-lg font-black text-foreground">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-medium text-sm ml-12">
                      {value.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
