"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ali Raza",
    username: "Founder, Apex Athletics",
    body: "ZaamGrip scaled our compression tights line from sample to 8,000 units per month without compromising fit or fabric performance. Their QC process is unmatched.",
    img: "https://avatar.vercel.sh/marcus",
  },
  {
    name: "Sofia Summan",
    username: "Procurement, IronCore Gyms",
    body: "Training tops, hoodies, and joggers — all produced on schedule with consistent sizing across every drop. A reliable manufacturing partner for our gym network.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Danish Ali",
    username: "Equipment Manager, Metro Sluggers",
    body: "Their custom batting gloves held up through a full season of daily cage work. Grip, stitching, and leather quality exceeded what our players expected.",
    img: "https://avatar.vercel.sh/derek",
  },
  {
    name: "Rehan Imran",
    username: "Director, StrikeForce MMA",
    body: "From MMA gloves to hand wraps, ZaamGrip understood the safety specs our promotion requires. Fast sampling and clean finishing on every batch.",
    img: "https://avatar.vercel.sh/yuki",
  },
  {
    name: "Samiullah Khan",
    username: "Head of Product, UrbanStride",
    body: "Our street wear capsule needed premium construction at volume. ZaamGrip delivered clean embroidery, accurate colour matching, and on-time cut-to-pack.",
    img: "https://avatar.vercel.sh/chloe",
  },
  {
    name: "Muhammad Usman",
    username: "Team Operations, City FC",
    body: "Match-day jerseys and training shorts produced for our entire squad with zero size discrepancies. The in-house printing held up wash after wash.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Rabia Amjad",
    username: "Co-Founder, GripLab",
    body: "Weight-lifting gloves are unforgiving on craftsmanship. ZaamGrip nailed palm padding, wrist support, and durability across our wholesale orders.",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Moiz Zubair",
    username: "CEO, Pace Performance",
    body: "Tracksuits and performance shorts for our retail launch — 12,000 units delivered ahead of schedule. Vertically integrated production made scaling effortless.",
    img: "https://avatar.vercel.sh/tom",
  },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4, 8);

function TestimonialCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border bg-card hover:bg-muted/50 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
        {body}
      </blockquote>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 mb-12 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black tracking-tight text-foreground"
        >
          Partner Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
        >
          Athletic brands, sports teams, gyms, and retailers trust ZaamGrip for
          performance wear and specialist glove manufacturing at scale.
        </motion.p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}
