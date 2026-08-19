import type { Metadata } from "next";
import AccreditationsHero from "@/components/sections/accreditations/hero";
import CertificationsSection from "@/components/sections/accreditations/certifications-section";
import StandardsCtaSection from "@/components/sections/accreditations/standards-cta-section";

export const metadata: Metadata = {
  title: "Accreditations & Certifications | ZaamGrip Industries",
  description:
    "ZaamGrip Industries operates as a registered and certified manufacturer, upholding quality, environmental, and safety standards across workwear, sportswear, protective gloves, and apparel production.",
};

export default function AccreditationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AccreditationsHero />
      <CertificationsSection />
      <StandardsCtaSection />
    </main>
  );
}
