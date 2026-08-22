import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/hero";
import ContactInfo from "@/components/sections/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us | ZaamGrip Industries",
  description:
    "Get in touch with ZaamGrip Industries — email, WhatsApp, phone, and factory address. Reach out to discuss workwear, sportswear, protective glove, and apparel manufacturing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <ContactInfo />
    </main>
  );
}
