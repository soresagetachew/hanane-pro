"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="clients" className="bg-white border-y border-border py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Trusted By</Eyebrow>
          <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1]">
            In good company.
          </h2>
          <p className="mt-5 font-jost text-[14px] text-stone leading-[1.85]">
            A selection of the brands, broadcasters, and organisations Hanane has worked with
            across the Middle East, Europe, and beyond.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-6xl mx-auto">
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
              border-t border-l border-border
            "
          >
            {clients.map((name) => (
              <div
                key={name}
                className="
                  group relative aspect-[5/2] flex items-center justify-center
                  border-r border-b border-border bg-white
                  transition-colors duration-300 hover:bg-off-white
                "
              >
                <span
                  className="
                    font-playfair text-[15px] md:text-[17px] text-ink/70
                    tracking-[0.04em] text-center px-4
                    transition-colors duration-300 group-hover:text-ink
                  "
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <p className="mt-10 text-center font-jost text-[12px] text-stone italic tracking-wide">
          … and many more.
        </p>
      </div>
    </section>
  );
}
