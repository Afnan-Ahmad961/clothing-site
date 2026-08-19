"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const customCapabilities = [
  "Custom designs",
  "Custom fabrics and materials",
  "Custom colors",
  "Custom sizing",
  "Embroidery",
  "Screen printing",
  "Heat transfer",
  "Rubber and woven labels",
  "Custom logos",
  "Custom packaging",
  "Private-label manufacturing",
  "Product development",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CustomOem() {
  return (
    <section className="border-t border-border/20 bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Custom Manufacturing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
              Custom Manufacturing
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
              Your Brand. Your Design. Our Expertise.
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
              Have your own design or product concept? ZaamGrip can manufacture products
              according to your specifications and branding requirements. Send us your
              specifications, reference samples, technical drawings, or product ideas and our
              team will develop the right manufacturing solution.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {customCapabilities.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* OEM & Private Label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            variants={fadeIn}
            className="flex flex-col justify-center rounded-3xl border border-border bg-background p-8 md:p-12"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
              OEM &amp; Private Label
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground">
              Build Your Brand With ZaamGrip
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground">
              ZaamGrip supports brands looking to manufacture products under their own name. From
              product development to finished production, we help businesses create branded
              apparel and protective products that are ready for their target market — whether
              you are launching a new brand or expanding an established product line.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["OEM", "ODM", "Private Label", "Custom Production"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
