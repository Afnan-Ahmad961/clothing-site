import type { Metadata } from "next";
import CapabilitiesHero from "@/components/sections/capabilities/hero";
import CapabilitiesShowcase from "@/components/sections/capabilities/capabilities-showcase";
import TestimonialsSection from "@/components/sections/capabilities/testimonials-section";
import { ImageCarosal } from "@/components/sections/home/image-carosal";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities & Products | ZaamGrip Industries",
  description:
    "One manufacturer, multiple product categories — workwear, protective gloves, sportswear, and fashion apparel. Explore ZaamGrip Industries' OEM, private-label, and custom manufacturing capabilities.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CapabilitiesHero />
      <ImageCarosal />
      <CapabilitiesShowcase />
      <TestimonialsSection />
    </main>
  );
}
