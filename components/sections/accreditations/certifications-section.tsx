"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";

const bulletPoints = [
  "Complete in-house production from technical fabric sourcing to cut, stitch, and final packing.",
  "Custom gym wear, performance jerseys, and sports gloves with in-house printing and embroidery.",
  "Strict multi-stage quality control with scalable monthly output for athletic brands and sports teams.",
];

const certifications = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    category: "Quality Management",
    description: "Consistent quality across all production",
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    category: "Environmental Management",
    description: "Sustainable and environmentally responsible manufacturing",
  },
  {
    id: "oeko-tex",
    name: "OEKO-TEX® Standard 100",
    category: "Product Safety",
    description: "Tested safe from harmful substances",
  },
  {
    id: "gots",
    name: "GOTS (Global Organic Textile Standard)",
    category: "Organic Certification",
    description: "Certified organic production and sourcing",
  },
  {
    id: "iso-45001",
    name: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    description: "Safe and healthy workplace standards",
  },
  {
    id: "sa-8000",
    name: "SA 8000",
    category: "Social Accountability",
    description: "Ethical labor and fair worker practices",
  },
  {
    id: "iso-50001",
    name: "ISO 50001:2018",
    category: "Energy Management",
    description: "Efficient energy use and sustainability",
  },
  {
    id: "fsc",
    name: "FSC Certified",
    category: "Sustainable Sourcing",
    description: "Responsibly sourced packaging materials",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function CertificationCard({
  name,
  category,
  description,
}: (typeof certifications)[number]) {
  return (
    <div className="w-full rounded-xl border border-border bg-card p-5 text-left md:p-6">
      <h3 className="text-base font-bold text-foreground md:text-lg">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-primary">{category}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section className="border-t border-border/20 bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Our Certifications
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Each certification represents ZaamGrip Industries&apos; dedication to excellence
              across quality management, environmental responsibility, worker safety, and
              sustainable manufacturing. 
            </p>

            <ul className="mt-8 space-y-5">
              {bulletPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <AnimatedList className="items-stretch gap-3" delay={450}>
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} {...cert} />
              ))}
            </AnimatedList>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
