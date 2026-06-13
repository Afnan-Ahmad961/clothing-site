import CapabilitiesHero from "@/components/sections/capabilities/hero";
import CapabilitiesShowcase from "@/components/sections/capabilities/capabilities-showcase";
import TestimonialsSection from "@/components/sections/capabilities/testimonials-section";
import { ImageCarosal } from "@/components/sections/home/image-carosal";

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
