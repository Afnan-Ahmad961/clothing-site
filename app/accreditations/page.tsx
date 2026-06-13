import AccreditationsHero from "@/components/sections/accreditations/hero";
import CertificationsSection from "@/components/sections/accreditations/certifications-section";
import StandardsCtaSection from "@/components/sections/accreditations/standards-cta-section";

export default function AccreditationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AccreditationsHero />
      <CertificationsSection />
      <StandardsCtaSection />
    </main>
  );
}
