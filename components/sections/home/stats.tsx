"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export function Stats() {
  return (
    <section className="relative z-20 -mt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Users", value: "2.4M+", badge: "+14%" },
          { label: "Total Volume", value: "$4.2B", badge: "All Time" },
          { label: "Global Reach", value: "140+", badge: "Countries" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard>
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] uppercase tracking-widest text-void-text/70 font-bold">
                  {stat.label}
                </span>
                <span className="inline-flex items-center justify-center rounded-full bg-cyber-yellow px-3 py-1 text-[10px] font-bold text-black uppercase tracking-wider">
                  {stat.badge}
                </span>
              </div>
              <div className="text-4xl lg:text-5xl font-black text-void-text tracking-tighter">
                {stat.value}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
