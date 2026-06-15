"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50M+", label: "Gallons of water saved" },
  { value: "15K+", label: "Tons CO2 offset" },
  { value: "2.3M+", label: "Lbs of waste recycled" },
  { value: "40%", label: "Renewable energy used" },
];

export default function SustainabilityImpact() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sustainability">
            Our impact
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">
            Real numbers behind responsible production.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-sustainability/20 bg-background p-7 text-center"
            >
              <p className="text-4xl font-black text-sustainability md:text-5xl">{stat.value}</p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
