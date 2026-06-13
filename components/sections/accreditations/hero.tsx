"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const stats = [
  { label: "Total Certifications", value: 8, suffix: "", gradient: false },
  { label: "Categories", value: 4, suffix: "", gradient: false },
  { label: "Quality Commitment", value: 100, suffix: "%", gradient: true },
];

export default function AccreditationsHero() {
  return (
    <section className="bg-background pt-24 md:pt-32">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16 md:py-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl"
          >
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary via-primary to-amber-500 bg-clip-text text-transparent">
              Accreditations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
          >
            Certified excellence across quality, environmental responsibility, and worker
            safety — ensuring every gym wear line, sports jersey, and specialist glove meets
            the standards athletic brands and sports teams demand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-xl border border-border bg-secondary/50 px-6 py-5"
              >
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                <div
                  className={`mt-2 flex items-baseline justify-center text-3xl font-black md:text-4xl ${
                    stat.gradient
                      ? "bg-gradient-to-r from-primary via-primary to-amber-500 bg-clip-text text-transparent"
                      : "text-foreground"
                  }`}
                >
                  <CountUp
                    from={0}
                    to={stat.value}
                    direction="up"
                    duration={1.5}
                    delay={0.5 + i * 0.15}
                  />
                  {stat.suffix ? <span>{stat.suffix}</span> : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
