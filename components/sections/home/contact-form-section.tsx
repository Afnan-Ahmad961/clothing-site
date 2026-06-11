"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Scissors, Spool, Shirt } from "lucide-react";


const inputClassName =
  "w-full rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ring/40 focus:ring-2 focus:ring-ring/15";

export default function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-void-bg py-24 md:py-32"
    >
      {/* Floating scissors — top right */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-6 top-16 z-10 text-primary md:right-16 lg:right-24"
        aria-hidden
      >
        <Scissors className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
      </motion.div>

      {/* Floating spool — left */}
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute -left-2 top-1/2 z-10 -translate-y-1/2 text-sustainability md:left-8 lg:left-16"
        aria-hidden
      >
        <Spool className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
      </motion.div>

      <div className="relative z-20 mx-auto w-full max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-center text-3xl font-black tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Let&apos;s Build Your Brand
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name*"
              className={inputClassName}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className={inputClassName}
            />
          </div>

          <input
            type="email"
            name="email"
            required
            placeholder="Email*"
            className={inputClassName}
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number*"
            className={inputClassName}
          />

          <textarea
            name="details"
            rows={5}
            placeholder="Details"
            className={`${inputClassName} resize-none`}
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99]"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Floating message icon — bottom center */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-foreground"
        aria-hidden
      >
        <Shirt className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
