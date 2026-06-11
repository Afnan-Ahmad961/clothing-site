"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FactorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Starts animating when top of section is at 60% of viewport
          end: "bottom 80%", // Ends when bottom of section is at 80% of viewport
          scrub: 1, // Smooth scrubbing
        },
      });

      // Initially they are clustered.
      // Left image moving left and rotating
      tl.fromTo(leftImageRef.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: "-70%",
          y: "15%",
          rotation: -12,
          ease: "power2.out",
        },
        0
      );

      // Right image moving right and rotating
      tl.fromTo(rightImageRef.current,
        { x: 0, y: 0, rotation: 0 },
        {
          x: "70%",
          y: "15%",
          rotation: 12,
          ease: "power2.out",
        },
        0
      );

      // Center image slightly scales up or moves up
      tl.fromTo(centerImageRef.current,
        { x: 0, y: 0, scale: 0.9 },
        {
          y: "-5%",
          scale: 1.05,
          ease: "power2.out"
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background py-32"
    >
      {/* Container for the images to keep them centered and clustered initially */}
      <div className="relative w-[50vw] max-w-[600px] aspect-[16/10]">
        {/* Left Image */}
        <div
          ref={leftImageRef}
          className="absolute inset-0 z-10 shadow-2xl"
        >
          <Image
            src="/factory1.jpg"
            alt="Factory Process 1"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right Image */}
        <div
          ref={rightImageRef}
          className="absolute inset-0 z-10 shadow-2xl"
        >
          <Image
            src="/factory3.jpg"
            alt="Factory Process 3"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Center Image */}
        <div
          ref={centerImageRef}
          className="absolute inset-0 z-20 shadow-2xl"
        >
          <Image
            src="/factory2.jpg"
            alt="Factory Process 2"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
