"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-off-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="max-w-xl mx-auto text-center mb-16">
          <Eyebrow>What I Do</Eyebrow>
          <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1]">
            Three disciplines. One presence.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <FadeIn
              key={s.id}
              delay={i * 0.1}
              className="group bg-white border border-border p-10 transition-colors duration-300 hover:border-warm-gold"
            >
              <p className="font-playfair text-[13px] text-warm-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-playfair text-[26px] mt-3 text-ink">
                {s.title}
              </h3>
              <div className="border-t border-border my-6" />
              <p className="font-jost text-[14px] font-light leading-[1.85] text-charcoal">
                {s.description}
              </p>
              <p className="font-jost text-[11px] uppercase tracking-[0.1em] text-stone mt-6">
                {s.highlights.join(" · ")}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
