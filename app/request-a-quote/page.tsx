import type { Metadata } from "next";
import QuoteHero from "@/components/sections/quote/hero";
import QuoteForm from "@/components/sections/quote/quote-form";

export const metadata: Metadata = {
  title: "Request a Quote | ZaamGrip Industries",
  description:
    "Request a manufacturing quote from ZaamGrip Industries. Share your product specifications for workwear, sportswear, protective gloves, or fashion apparel and our team will reply with the next steps.",
};

export default function RequestAQuotePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <QuoteHero />
      <QuoteForm />
    </main>
  );
}
