"use client";

import Image from "next/image";
import { Box, Palette, TrendingUp, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Multi-Category Manufacturing",
    description:
      "Source workwear, sportswear, protective gloves, uniforms, and fashion apparel from one trusted manufacturing partner — with the same standards applied across every product line.",
    image: "/images/product-range.png",
    icon: Box,
  },
  {
    title: "Custom & Private Label Production",
    description:
      "OEM, ODM, and private-label manufacturing tailored to your designs, fabrics, colours, sizing, branding, and packaging — from custom logos and embroidery to screen printing and woven labels.",
    image: "/images/product-lifestyle.png",
    icon: Palette,
  },
  {
    title: "Scalable Production Capacity",
    description:
      "Efficient, controlled production processes designed to serve growing brands and established businesses alike, delivering strong value for buyers across international markets.",
    image: "/images/service-3.png",
    icon: TrendingUp,
  },
  {
    title: "Strict Quality Control",
    description:
      "Every product moves through material inspection, production monitoring, measurement checks, and final inspection to ensure it meets your specifications and represents your brand with confidence.",
    image: "/images/service-4.png",
    icon: CheckCircle,
  },
];

function Card({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <div className="shadow-2xl rounded-2xl bg-card border border-border/50 overflow-hidden flex flex-col">
      <div className="relative h-[clamp(190px,30vh,300px)] w-full">
        <Image src={service.image} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white pr-6">
          <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
        </div>
      </div>
      <div className="p-6 md:p-7 bg-card">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-background px-4 md:px-8 lg:px-12 py-20 md:py-28">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-24 lg:items-start">
        {/* Left content — sticks alongside the scrolling deck on large screens */}
        <div className="lg:w-[45%] lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6 leading-[1.1] text-foreground">
            One Manufacturer. Multiple Product Categories.
          </h2>
          <p className="text-md md:text-lg font-medium text-muted-foreground leading-relaxed">
            At ZaamGrip Industries, great manufacturing is about more than
            producing a product — it&apos;s a reliable supply-chain partnership.
            Our capabilities let international clients source a wide range of
            apparel and protective products from one trusted partner, from initial
            requirements and sampling through to packaging and shipment.
          </p>
        </div>

        {/* Right content — cards stack into a deck via CSS sticky (no fixed pixels) */}
        <div className="lg:w-[55%] w-full mt-12 lg:mt-0 flex flex-col gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="lg:sticky"
              style={{ top: `calc(7rem + ${index * 1.5}rem)` }}
            >
              <Card service={service} />
            </div>
          ))}
          {/* Spacer lets the final card settle before the next section (scales with viewport) */}
          <div className="hidden lg:block h-[20vh]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
