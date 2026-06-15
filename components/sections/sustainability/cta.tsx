"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SustainabilityCta() {
  return (
    <section className="bg-sustainability/5 px-6 py-20 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-3xl border border-sustainability/25 bg-background p-8 text-center shadow-xl shadow-sustainability/10 md:p-12"
      >
        <h2 className="text-3xl font-black leading-tight text-foreground md:text-5xl">
          Join our sustainability journey.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
          Sustainable manufacturing is a partnership. When athletic brands, gyms, teams, and
          retailers choose ZaamGrip Industries, they choose performance gear made with sharper
          resource discipline and a long-term commitment to better production.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-sustainability px-7 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-sustainability/90 active:scale-95"
        >
          Partner With Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
