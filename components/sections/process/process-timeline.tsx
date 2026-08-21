"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "01. Requirements",
        description: "It starts with your brief. Share your product specifications, designs, quantities, materials, branding, and any other requirements. Our team reviews everything up front so your project is understood clearly before a single sample is made.",
        layout: "single" as const,
        images: ["/service-1.png"]
    },
    {
        title: "02. Development & Sampling",
        description: "Our team develops samples according to your specifications for review and approval. This stage validates sizing, fit, materials, and finishing, with efficient iterations until the sample matches exactly what you need for production.",
        layout: "double" as const,
        images: ["/service-2.png", "/process/fabric_sourcing.png"]
    },
    {
        title: "03. Production",
        description: "Once your sample is approved, manufacturing begins under controlled production processes. Skilled operators and organized production lines keep quality and consistency intact from the first unit to the last across every product category.",
        layout: "single" as const,
        images: ["/factory1.jpg"]
    },
    {
        title: "04. Quality Control",
        description: "Products undergo quality checks throughout production and before final dispatch. Material inspection, workmanship checks, measurement verification, and final audits ensure every product meets your specifications and our standards.",
        layout: "double" as const,
        images: ["/process/6A.jpg", "/process/6B.png"]
    },
    {
        title: "05. Packaging",
        description: "Products are packed according to your requirements, including customized packaging where requested. Every order is labeled, protected, and prepared to represent your brand and arrive export-ready.",
        layout: "single" as const,
        images: ["/process/7.png"]
    },
    {
        title: "06. Ready for Global Delivery",
        description: "Finished orders are prepared for shipment to international customers and markets. From our manufacturing facility to markets around the world, your products are ready to move.",
        layout: "single" as const,
        images: ["/factory3.jpg"]
    }
];

const StepVisuals = ({ layout, images, title }: { layout: "single" | "double", images: string[], title: string }) => {
    if (layout === "single") {
        return (
            <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
                <div className="w-full aspect-square rounded-3xl border border-border shadow-2xl relative overflow-hidden bg-secondary/30">
                    <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>
        );
    }

    // Double layout
    return (
        <div className="w-full h-full flex items-center justify-center relative p-4 lg:p-8">
            {/* Back Image (Offset Left/Top) */}
            <div className="absolute left-[5%] top-[5%] lg:left-[10%] lg:top-[10%] w-[50%] aspect-[9/16] rounded-3xl border border-border shadow-2xl overflow-hidden bg-secondary/30">
                <Image
                    src={images[0]}
                    alt={`${title} - First Detail`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Front Image (Offset Right/Bottom) */}
            <div className="absolute right-[5%] bottom-[5%] lg:right-[10%] lg:bottom-[10%] w-[50%] aspect-[9/16] rounded-3xl border border-border shadow-2xl overflow-hidden z-10 bg-card">
                <Image
                    src={images[1]}
                    alt={`${title} - Second Detail`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default function ProcessTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;
        if (!isDesktop || !sectionRef.current || !imageContainerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${steps.length * 100}%`,
                    pin: true,
                    scrub: 1,
                },
            });

            // Initial states: Reset all to 0 except the first one
            steps.forEach((_, i) => {
                if (i === 0) {
                    gsap.set(textRefs.current[i], { opacity: 1, x: "0%" });
                    gsap.set(imgRefs.current[i], { opacity: 1 });
                } else {
                    gsap.set(textRefs.current[i], { opacity: 0 });
                    gsap.set(imgRefs.current[i], { opacity: 0 });
                }
            });

            // Loop through each transition
            steps.forEach((_, index) => {
                if (index === 0) return; // Skip first, as it's the starting state

                const isMovingLeft = index % 2 !== 0; // e.g. index 1 moves image to left
                const targetX = isMovingLeft ? "-50vw" : "0vw";

                const prevImg = imgRefs.current[index - 1];
                const nextImg = imgRefs.current[index];
                const prevText = textRefs.current[index - 1];
                const nextText = textRefs.current[index];

                const label = `step${index}`;
                tl.add(label);

                // 1. Move image container
                tl.to(imageContainerRef.current, { x: targetX, ease: "power2.inOut", duration: 2 }, label);

                // 2. Crossfade images
                tl.to(prevImg, { opacity: 0, duration: 1, ease: "power1.inOut" }, `${label}+=0.5`)
                    .to(nextImg, { opacity: 1, duration: 1, ease: "power1.inOut" }, `${label}+=0.5`);

                // 3. Fade out prev text
                const prevTextExitX = isMovingLeft ? "-20%" : "20%";
                tl.to(prevText, { opacity: 0, x: prevTextExitX, ease: "power2.in", duration: 1 }, label);

                // 4. Fade in next text
                const nextTextEnterX = isMovingLeft ? "20%" : "-20%";
                tl.fromTo(nextText,
                    { opacity: 0, x: nextTextEnterX },
                    { opacity: 1, x: "0%", ease: "power2.out", duration: 1.5 },
                    `${label}+=0.5`
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative md:h-screen w-full bg-background overflow-hidden flex items-center justify-center"
        >
            {/* Image Container (Desktop) */}
            <div
                ref={imageContainerRef}
                className="hidden md:block absolute right-[5%] top-[15%] w-[40vw] h-[70vh] z-10 pointer-events-none"
            >
                {steps.map((step, i) => (
                    <div key={i} ref={el => { imgRefs.current[i] = el; }} className="absolute inset-0">
                        <StepVisuals layout={step.layout} images={step.images} title={step.title} />
                    </div>
                ))}
            </div>

            {/* Main Content Area (Desktop) */}
            <div className="relative hidden md:flex w-full max-w-7xl mx-auto h-full px-8 items-center">
                {steps.map((step, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <div
                            key={i}
                            ref={el => { textRefs.current[i] = el; }}
                            className={`absolute top-1/2 -translate-y-1/2 w-[40%] flex flex-col space-y-6 ${isLeft ? "left-[5%]" : "right-[5%]"
                                }`}
                        >
                            <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight leading-[1.1]">{step.title}</h2>
                            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Mobile View: Static Stack */}
            <div className="md:hidden flex flex-col space-y-16 w-full py-16 px-6">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-foreground tracking-tight leading-[1.1]">{step.title}</h2>
                            <p className="text-base text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                        </div>
                        <div className="w-full aspect-[4/5] relative">
                            <StepVisuals layout={step.layout} images={step.images} title={step.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
