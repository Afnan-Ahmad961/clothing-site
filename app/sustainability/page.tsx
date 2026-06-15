import type { Metadata } from "next";
import SustainabilityCta from "@/components/sections/sustainability/cta";
import SustainabilityHero from "@/components/sections/sustainability/hero";
import SustainabilityImpact from "@/components/sections/sustainability/impact";
import SustainabilityInitiatives from "@/components/sections/sustainability/roadmap";
import WhyItMatters from "@/components/sections/sustainability/why-it-matters";

export const metadata: Metadata = {
  title: "Sustainability | ZaamGrip Industries",
  description:
    "Explore ZaamGrip Industries' sustainability initiatives for responsible sportswear, gym wear, street wear, and sports glove manufacturing.",
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SustainabilityHero />
      <WhyItMatters />
      <SustainabilityInitiatives />
      <SustainabilityImpact />
      <SustainabilityCta />
    </main>
  );
}
