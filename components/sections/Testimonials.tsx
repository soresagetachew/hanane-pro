"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-off-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1]">
            What clients say.
          </h2>
          <p className="font-jost text-[14px] text-stone mt-4 leading-[1.85]">
            From conference producers who&apos;ve worked with Hanane across multi-day summits.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn
              key={t.author}
              delay={i * 0.1}
              className="relative bg-white border border-border p-10"
            >
              <span
                aria-hidden
                className="absolute -top-3 left-8 font-playfair text-[80px] leading-none text-warm-gold opacity-60 select-none"
              >
                &ldquo;
              </span>
              <p className="font-playfair italic text-[16px] text-charcoal leading-[1.75] relative">
                {t.quote}
              </p>
              <div className="border-t border-border mt-8 pt-6">
                <p className="font-jost text-[13px] font-semibold text-ink">
                  {t.author}
                </p>
                <p className="font-jost text-[11px] uppercase tracking-[0.1em] text-stone mt-1">
                  {t.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
