import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/hero";
import ContactForm from "@/components/sections/contact/contact-form";

export const metadata: Metadata = {
    title: "Contact Us | ZaamGrip Industries",
    description:
        "Reach out to ZaamGrip Industries for inquiries about gym wear, street wear, sports wear, baseball batting gloves, MMA gloves, and weight-lifting gloves manufacturing.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ContactHero />
            <ContactForm />
        </main>
    );
}
