import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/hero";
import WhyZaamGrip from "@/components/sections/about/why-zaamgrip";
import CustomOem from "@/components/sections/about/custom-oem";
import AboutQuality from "@/components/sections/about/quality";
import GlobalReach from "@/components/sections/about/global-reach";
import AboutFacility from "@/components/sections/about/facility";
import CertificationsCta from "@/components/sections/about/certifications-cta";

export const metadata: Metadata = {
  title: "About ZaamGrip Industries | Your Global Manufacturing Partner",
  description:
    "Learn about ZaamGrip Industries — a certified global manufacturer of workwear, sportswear, protective gloves, and fashion apparel offering OEM, private-label, and custom manufacturing solutions worldwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AboutHero />
      <WhyZaamGrip />
      <CustomOem />
      <AboutQuality />
      <GlobalReach />
      <AboutFacility />
      <CertificationsCta />
    </main>
  );
}
