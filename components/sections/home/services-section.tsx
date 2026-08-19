"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Palette, TrendingUp, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Multi-Category Manufacturing",
    description:
      "Source workwear, sportswear, protective gloves, uniforms, and fashion apparel from one trusted manufacturing partner — with the same standards applied across every product line.",
    image: "/service-1.png",
    icon: Box,
  },
  {
    title: "Custom & Private Label Production",
    description:
      "OEM, ODM, and private-label manufacturing tailored to your designs, fabrics, colours, sizing, branding, and packaging — from custom logos and embroidery to screen printing and woven labels.",
    image: "/service-2.png",
    icon: Palette,
  },
  {
    title: "Scalable Production Capacity",
    description:
      "Efficient, controlled production processes designed to serve growing brands and established businesses alike, delivering strong value for buyers across international markets.",
    image: "/service-3.png",
    icon: TrendingUp,
  },
  {
    title: "Strict Quality Control",
    description:
      "Every product moves through material inspection, production monitoring, measurement checks, and final inspection to ensure it meets your specifications and represents your brand with confidence.",
    image: "/service-4.png",
    icon: CheckCircle,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create a timeline that pins the section and scrubs
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%", // Pin slightly below the top (accounts for a potential navbar)
          end: `+=${window.innerHeight * 2.5}`, // Total scroll distance to scrub through
          pin: true,
          scrub: 1, // Smooth scrubbing in both directions
        },
      });

      // Animate cards from index 1 to end
      services.forEach((_, index) => {
        if (index === 0) return; // First card is already in place

        // The final Y offset creates the overlapping "deck" look
        const finalY = index * 24;

        tl.fromTo(
          cardsRef.current[index],
          { y: "150%" }, // Start below the visible area
          {
            y: finalY,
            ease: "none",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background md:py-24 px-4 md:px-8 lg:px-12 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row md:gap-16 lg:gap-24 relative items-center">
        {/* Left Content */}
        <div className="lg:w-[45%]">
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

        {/* Right Content - Cards Container */}
        <div className="lg:w-[55%] relative h-[420px] md:h-[500px] w-full mt-12 lg:mt-0">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="absolute inset-x-0 top-0 shadow-2xl rounded-2xl bg-card border border-border/50 overflow-hidden flex flex-col origin-top"
                style={{
                  zIndex: index, // Ensure newer cards stack on top
                  // The first card stays at 0, others start out of view
                  transform: index === 0 ? "translateY(0)" : "translateY(150%)",
                }}
              >
                <div className="relative h-[220px] md:h-[300px] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white pr-6">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-card">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
