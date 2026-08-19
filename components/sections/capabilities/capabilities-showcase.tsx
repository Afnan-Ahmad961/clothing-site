"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Workwear",
    description:
      "Industrial uniforms, work jackets, trousers, coveralls, and utility clothing built for demanding environments. From high-visibility and safety workwear to corporate and fully customized uniforms, we manufacture durable, professional workwear to your specifications.",
    image: "/capabilities1.jpg",
    imagePosition: "right" as const,
    aspectRatio: "aspect-square",
    textColSpan: "lg:col-span-3",
    imageColSpan: "lg:col-span-1",
    imageSizes: "(max-width: 1024px) 80vw, 25vw",
  },
  {
    title: "Protective & Work Gloves",
    description:
      "Specialist glove manufacturing across general-purpose, coated, and heavy-duty ranges — latex, PU, and nitrile-coated, cut-resistant, impact, mechanic, leather, welding, chemical-resistant, winter, and tactical gloves engineered for grip, durability, and protection.",
    image: "/capabilities2.jpg",
    imagePosition: "left" as const,
    aspectRatio: "aspect-video",
    textColSpan: "lg:col-span-1",
    imageColSpan: "lg:col-span-3",
    imageSizes: "(max-width: 1024px) 100vw, 75vw",
  },
  {
    title: "Sportswear",
    description:
      "Sports jerseys, training sets, tracksuits, performance tops, shorts, and compression wear produced with technical fabrics and consistent fit. From gym wear and teamwear to running and cycling apparel, we deliver custom sports uniforms for teams and brands.",
    image: "/capabilities3.jpg",
    imagePosition: "right" as const,
    aspectRatio: "aspect-square",
    textColSpan: "lg:col-span-3",
    imageColSpan: "lg:col-span-1",
    imageSizes: "(max-width: 1024px) 80vw, 25vw",
  },
  {
    title: "Fashion Apparel",
    description:
      "Premium fashion and casualwear — t-shirts, hoodies, sweatshirts, joggers, polos, jackets, varsity jackets, and streetwear. Clean construction, accurate colour matching, and brand-ready finishing for custom fashion collections at scale.",
    image: "/service-2.png",
    imagePosition: "left" as const,
    aspectRatio: "aspect-video",
    textColSpan: "lg:col-span-1",
    imageColSpan: "lg:col-span-3",
    imageSizes: "(max-width: 1024px) 100vw, 75vw",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function CapabilityBlock({
  title,
  description,
  image,
  imagePosition,
  aspectRatio,
  textColSpan,
  imageColSpan,
  imageSizes,
  index,
}: (typeof capabilities)[number] & { index: number }) {
  const isCompactImage = imageColSpan === "lg:col-span-1";

  const textContent = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      variants={fadeIn}
      className={`flex flex-col justify-center ${textColSpan} ${
        imagePosition === "left" ? "order-1 lg:order-2" : ""
      }`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-6 text-base md:text-lg leading-relaxed font-medium text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      variants={fadeIn}
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl md:rounded-3xl ${imageColSpan} ${
        imagePosition === "left" ? "order-2 lg:order-1" : ""
      } ${isCompactImage ? "max-w-[220px] mx-auto lg:max-w-none lg:mx-0" : ""}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes={imageSizes}
      />
    </motion.div>
  );

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 items-center ${
        index > 0 ? "mt-24 md:mt-32" : ""
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}

export default function CapabilitiesShowcase() {
  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {capabilities.map((capability, index) => (
          <CapabilityBlock key={capability.title} {...capability} index={index} />
        ))}
      </div>
    </section>
  );
}
