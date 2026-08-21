import Hero from "@/components/sections/home/hero";
import FactorySection from "@/components/sections/home/factory-section";
import ServicesSection from "@/components/sections/home/services-section";
import SustainabilitySection from "@/components/sections/home/sustainability-section";
import { ImageCarosal } from "@/components/sections/home/image-carosal";
import FinalCta from "@/components/sections/home/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative overflow-x-clip pt-24">
      <Hero />
      <FactorySection />
      <ServicesSection />
      <SustainabilitySection />
      <ImageCarosal />
      <FinalCta />
    </main>
  );
}
