"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CertificationsCta() {
  return (
    <section className="border-t border-border/20 bg-background px-6 py-20 md:px-12 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 text-center shadow-2xl shadow-foreground/5 md:p-14"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-primary">
          Certified. Registered. Professional.
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
          Certifications &amp; Registration
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
          ZaamGrip Industries operates as a registered and certified manufacturing company
          committed to professional manufacturing practices and quality standards across every
          product category.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/accreditations"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background px-7 text-sm font-bold text-foreground transition-all hover:bg-secondary hover:scale-105 active:scale-95"
          >
            View Our Certifications
          </Link>
          <Link
            href="/request-a-quote"
            className="group inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
