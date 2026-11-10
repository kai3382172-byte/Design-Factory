"use client";

import {
  Bath,
  BedDouble,
  ChefHat,
  Factory,
  Headphones,
  Layers,
  LayoutGrid,
  Package,
  PenTool,
  Ruler,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tv,
  Wrench,
  type LucideProps,
} from "lucide-react";
import { company } from "@/lib/content";
import type { DictKey } from "@/lib/i18n";
import { useSite } from "./state";

const iconMap = {
  chef: ChefHat,
  shirt: Shirt,
  bed: BedDouble,
  tv: Tv,
  bath: Bath,
  grid: LayoutGrid,
  factory: Factory,
  layers: Layers,
  ruler: Ruler,
  shield: ShieldCheck,
  wrench: Wrench,
  package: Package,
  headphones: Headphones,
  pen: PenTool,
  sparkles: Sparkles,
} as const;

export type GlyphName = keyof typeof iconMap;

export function Glyph({ name, ...props }: { name: GlyphName } & LucideProps) {
  const Component = iconMap[name] ?? Sparkles;
  return <Component {...props} />;
}

export function Logo({
  className = "",
  boxed = false,
  height = 72,
}: {
  className?: string;
  boxed?: boolean;
  height?: number;
}) {
  return (
    <img
      src={company.logo}
      alt="Design Factory | Wood & Design"
      width={height}
      height={height}
      style={{ height, width: "auto" }}
      className={`${boxed ? "rounded-xl bg-white p-0.5" : "logo-multiply"} object-contain ${className}`}
    />
  );
}

export function SectionHeading({
  badge,
  title,
  desc,
  center = false,
  light = false,
}: {
  badge: DictKey;
  title: DictKey;
  desc?: DictKey;
  center?: boolean;
  light?: boolean;
}) {
  const { t } = useSite();
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={`${center ? "justify-center" : ""} flex items-center gap-3`}>
        <span className={`h-px w-9 ${light ? "bg-white/50" : "bg-copper"}`} />
        <span className={light ? "text-xs font-extrabold tracking-[0.22em] text-[#e0a45f] uppercase" : "eyebrow"}>
          {t(badge)}
        </span>
      </div>
      <h2 className={`mt-4 text-3xl leading-[1.3] font-extrabold sm:text-4xl lg:text-[2.7rem] ${light ? "text-white" : "text-ink"}`}>
        {t(title)}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-[1.9] ${light ? "text-white/70" : "text-ink/65"} ${center ? "mx-auto" : ""} max-w-2xl`}>
          {t(desc)}
        </p>
      )}
    </div>
  );
}

export function formatPrice(value: number) {
  return value.toLocaleString("en-US");
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
