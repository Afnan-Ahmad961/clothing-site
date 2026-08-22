"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

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

const modes = ["OEM", "ODM", "Private Label", "Custom Production"];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function LabelChip({ text }: { text: string }) {
  return (
    <div className="mx-2 flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="whitespace-nowrap text-sm font-bold text-foreground">{text}</span>
    </div>
  );
}

export default function CustomOem() {
  const rowA = customCapabilities.slice(0, 6);
  const rowB = customCapabilities.slice(6);

  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      {/* Custom Manufacturing header */}
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              Custom Manufacturing
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black leading-[1.02] tracking-tight text-foreground">
              Your Brand. Your Design. Our Expertise.
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeIn}
            className="text-base font-medium leading-relaxed text-muted-foreground"
          >
            Have your own design or product concept? ZaamGrip can manufacture products according
            to your specifications and branding requirements. Send us your specifications,
            reference samples, technical drawings, or product ideas and our team will develop the
            right manufacturing solution.
          </motion.p>
        </div>
      </div>

      {/* Capability label bands */}
      <div className="relative mt-14 flex flex-col gap-4 overflow-hidden py-2">
        <Marquee pauseOnHover className="[--duration:32s]">
          {rowA.map((c) => (
            <LabelChip key={c} text={c} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:32s]">
          {rowB.map((c) => (
            <LabelChip key={c} text={c} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background" />
      </div>

      {/* OEM & Private Label */}
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mt-14 grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:items-center md:p-12"
        >
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              OEM &amp; Private Label
            </p>
            <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight tracking-tight text-foreground">
              Build Your Brand With ZaamGrip
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
              ZaamGrip supports brands looking to manufacture products under their own name. From
              product development to finished production, we help businesses create branded
              apparel and protective products that are ready for their target market — whether you
              are launching a new brand or expanding an established product line.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              {modes.map((m) => (
                <div
                  key={m}
                  className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-4 transition-colors hover:border-primary"
                >
                  <span className="text-sm font-black text-foreground">{m}</span>
                  <Plus className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              ))}
            </div>
            <Link
              href="/request-a-quote"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
