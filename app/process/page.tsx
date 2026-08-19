import type { Metadata } from "next";
import ProcessHero from "@/components/sections/process/process-hero";
import ProcessTimeline from "@/components/sections/process/process-timeline";
import ByTheNumbers from "@/components/sections/process/by-the-numbers";

export const metadata: Metadata = {
  title: "Our Manufacturing Process | ZaamGrip Industries",
  description:
    "From requirements and sampling to production, quality control, packaging, and global delivery — see how ZaamGrip Industries manufactures workwear, sportswear, protective gloves, and fashion apparel.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <ProcessHero />
      <ProcessTimeline />
      <ByTheNumbers />
    </main>
  );
}
