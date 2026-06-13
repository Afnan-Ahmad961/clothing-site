"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Sports & Street Wear",
    description:
      "From compression tights and training tops to hoodies, joggers, and performance jerseys — ZaamGrip manufactures gym wear, street wear, and sports wear with technical fabrics, precise pattern grading, and consistent fit across every production run.",
    image: "/capabilities1.jpg",
    imagePosition: "right" as const,
    aspectRatio: "aspect-square",
    textColSpan: "lg:col-span-3",
    imageColSpan: "lg:col-span-1",
    imageSizes: "(max-width: 1024px) 80vw, 25vw",
  },
  {
    title: "Sports Gloves",
    description:
      "Specialist glove manufacturing for athletes at every level — baseball batting gloves, gym and weight-lifting gloves, and MMA gloves built for grip, durability, and protection. Custom palm padding, reinforced stitching, and brand-ready finishing on every pair.",
    image: "/capabilities2.jpg",
    imagePosition: "left" as const,
    aspectRatio: "aspect-video",
    textColSpan: "lg:col-span-1",
    imageColSpan: "lg:col-span-3",
    imageSizes: "(max-width: 1024px) 100vw, 75vw",
  },
  {
    title: "Accessories",
    description:
      "Complete your performance line with sports accessories manufactured to the same quality standards — hand wraps, wrist supports, training belts, and protective gear. Cut, stitched, and packed in-house for brands, teams, and retailers scaling their accessory ranges.",
    image: "/capabilities3.jpg",
    imagePosition: "right" as const,
    aspectRatio: "aspect-square",
    textColSpan: "lg:col-span-3",
    imageColSpan: "lg:col-span-1",
    imageSizes: "(max-width: 1024px) 80vw, 25vw",
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
