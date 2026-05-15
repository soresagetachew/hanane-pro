"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pressOutlets } from "@/lib/data";

export default function Press() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-10">
          <Eyebrow>As Seen On</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
            {pressOutlets.map((p) => (
              <span
                key={p.name}
                className="font-jost text-[11px] uppercase tracking-[0.16em] text-stone hover:text-ink transition-colors duration-300"
              >
                {p.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
