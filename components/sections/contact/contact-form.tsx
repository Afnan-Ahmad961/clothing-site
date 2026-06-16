"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageSquare, Mail } from "lucide-react";

const inputCls =
  "w-full rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10";

const infoItems = [
  {
    icon: MessageSquare,
    title: "FAQ",
    description: "Explore our FAQ for quick, clear answers to common queries.",
    linkLabel: "Visit FAQ",
    href: "/contact",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    description: "ZaamGrip Industries",
    detail: "Opposite Mak Palace, Hajji Pura Road, 51310 Sialkot, Pakistan",
    href: "https://maps.google.com",
  },
  {
    icon: Mail,
    title: "Contact us by email",
    description: "Prefer the written word? Drop us an email at",
    email: "contact@zaamgrip.com",
    href: "mailto:contact@zaamgrip.com",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function ContactForm() {
  const [pending, setPending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    // Simulated async send
    await new Promise((r) => setTimeout(r, 1200));
    setPending(false);
    setSent(true);
  };

  return (
    <section className="bg-background pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* ── Left: Form ── */}
          <motion.div {...fadeUp(0)}>
            <p className="mb-8 text-xl font-black text-foreground">
              Fill in the form below
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-10"
              >
                <span className="text-3xl">✓</span>
                <h3 className="text-xl font-black text-foreground">
                  Message sent!
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you in 1–2
                  business days.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    id="contact-full-name"
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name*"
                    className={inputCls}
                  />
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Company"
                    className={inputCls}
                  />
                </div>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  className={inputCls}
                />

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number*"
                  className={inputCls}
                />

                <textarea
                  id="contact-details"
                  name="details"
                  rows={5}
                  placeholder="Details"
                  className={`${inputCls} resize-none`}
                />

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={pending}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99] disabled:opacity-60"
                >
                  {pending ? (
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                  ) : null}
                  {pending ? "Sending…" : "Send Message"}
                </button>

                <p className="text-center text-xs font-medium text-muted-foreground">
                  We&apos;ll get back to{" "}
                  <span className="text-primary">you</span> in 1–2 business
                  days.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── Right: Info Items ── */}
          <div className="flex flex-col divide-y divide-border md:mt-6">
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp(0.1 + i * 0.1)}
                  className="flex gap-5 py-8 first:pt-0"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.description}
                    </p>
                    {item.detail && (
                      <p className="mt-0.5 text-sm italic text-muted-foreground/70">
                        {item.detail}
                      </p>
                    )}
                    {item.email && (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm font-bold text-primary hover:underline"
                      >
                        {item.email}
                      </a>
                    )}
                    {item.linkLabel && (
                      <a
                        href={item.href}
                        className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
                      >
                        {item.linkLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
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
