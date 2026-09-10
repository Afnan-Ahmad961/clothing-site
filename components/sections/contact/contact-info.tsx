"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "923187268147";
const WHATSAPP_DISPLAY = "+92 318 7268147";
const PHONE_NUMBER = "923338763721";
const PHONE_DISPLAY = "+92 333 8763721";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const items = [
  {
    icon: Mail,
    title: "Email",
    value: "info@zaamgripindustries.com",
    href: "mailto:info@zaamgripindustries.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:+${PHONE_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "Factory Address",
    value: "Defence Road, Opposite WAPDA Grid Station, Sialkot 51310, Pakistan",
    href: "https://maps.google.com/?q=Defence+Road+Opposite+WAPDA+Grid+Station+Sialkot+51310+Pakistan",
    external: true,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function ContactInfo() {
  return (
    <section className="bg-background pb-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                {...fadeUp(i * 0.08)}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-base font-semibold leading-relaxed text-foreground transition-colors group-hover:text-primary">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/request-a-quote"
            className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)]"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-secondary hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
