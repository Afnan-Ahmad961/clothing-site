"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const standards = [
  {
    title: "International Standards",
    description:
      "All certifications align with international ISO and performance-wear manufacturing standards.",
    icon: Award,
  },
  {
    title: "Regular Audits",
    description:
      "Independent third-party audits ensure continuous compliance across sportswear and glove production.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Improvement",
    description:
      "We maintain and enhance our quality standards for athletes, gyms, and sports teams year after year.",
    icon: BadgeCheck,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function StandardsCtaSection() {
  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-3xl border-t px-6 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 lg:gap-12">
            {standards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: index === 1 ? [0, 3, 0] : [0, -4, 0],
                    }}
                    transition={{
                      duration: 4.5 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.35,
                    }}
                    className="text-primary"
                    aria-hidden
                  >
                    <Icon className="h-14 w-14 md:h-16 md:w-16" strokeWidth={1.8} />
                  </motion.div>

                  <h2 className="mt-8 text-xl font-black tracking-tight text-foreground md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-md font-medium leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-20 max-w-4xl rounded-2xl border border-border bg-background/70 px-6 py-12 text-center shadow-2xl shadow-foreground/5 md:mt-28 md:px-12 md:py-16"
          >
            <h2 className="text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Ready to Partner with a Certified Leader?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground">
              Our certifications demonstrate our commitment to quality, sustainability, and
              ethical practices for performance apparel and specialist sports gloves.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-primary via-primary to-amber-500 px-10 text-base font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.99]"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
