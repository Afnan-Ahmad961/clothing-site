"use client";

import { Leaf, Recycle, ShieldCheck, Zap } from "lucide-react";

import { Timeline } from "@/components/ui/timeline";

const initiatives = [
  {
    year: "2024",
    label: "Achieved",
    title: "Achieved Carbon Neutral Operations",
    focus: "Verified accountability across sportswear and glove production",
    copy:
      "Offset 100% of operational emissions through renewable energy transition planning and verified offset programs across gym wear, street wear, team sportswear, and protective glove manufacturing.",
    proof: [
      "Order-level emissions tracking",
      "Verified offset programs",
      "Efficiency reviews by production line",
    ],
    icon: ShieldCheck,
  },
  {
    year: "2025",
    label: "Target",
    title: "Target: 50% Renewable Energy",
    focus: "Cleaner power for cutting, stitching, printing, and assembly",
    copy:
      "Expand solar capacity and sign long-term renewable energy agreements to support lower-impact production for jerseys, hoodies, joggers, compression tights, batting gloves, and MMA gloves.",
    proof: [
      "Solar capacity expansion",
      "Renewable energy agreements",
      "Energy-aware line scheduling",
    ],
    icon: Zap,
  },
  {
    year: "2026",
    label: "Target",
    title: "Target: Zero Waste to Landfill",
    focus: "Waste-to-resource systems for garment and glove materials",
    copy:
      "Implement advanced waste-to-resource technologies in all facilities, turning fabric offcuts, thread waste, packaging, leather, foam, and trim scraps into recoverable production streams.",
    proof: [
      "Fabric offcut sorting",
      "Trim and thread recovery",
      "Packaging reuse controls",
    ],
    icon: Recycle,
  },
  {
    year: "2030",
    label: "Vision",
    title: "Vision: 100% Renewable Energy",
    focus: "Renewable-powered performance manufacturing at full scale",
    copy:
      "Transition the entire manufacturing operation to renewable power sources, giving sports teams, gym brands, retailers, and performance labels a cleaner sourcing partner.",
    proof: [
      "Renewable-powered facilities",
      "Lower-impact brand programs",
      "Long-term energy resilience",
    ],
    icon: Leaf,
  },
];

const timelineData = initiatives.map((item) => {
  const Icon = item.icon;

  return {
    title: item.year,
    content: (
      <article className="group max-w-3xl border-b border-border pb-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-sustainability/10 text-sustainability transition-colors duration-300 group-hover:bg-sustainability group-hover:text-background">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sustainability">
              {item.label}
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-foreground md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-3 text-lg font-black leading-snug text-foreground">
              {item.focus}
            </p>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
              {item.copy}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {item.proof.map((proof) => (
                <div
                  key={proof}
                  className="border-l border-sustainability/40 pl-4 text-sm font-bold leading-relaxed text-foreground"
                >
                  {proof}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    ),
  };
});

export default function SustainabilityInitiatives() {
  return (
    <section className="bg-background">
      <Timeline
        eyebrow="Our sustainability roadmap"
        title="Ambitious targets for a lower-impact future."
        data={timelineData}
      />
    </section>
  );
}
