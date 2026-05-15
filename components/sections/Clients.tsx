"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clientLogos } from "@/lib/data";

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
            A selection of the brands, broadcasters, and organisations Hanane has worked
            with across the Middle East, Europe, and beyond.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-6xl mx-auto">
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
              border-t border-l border-border
            "
          >
            {clientLogos.map((logo) => (
              <div
                key={logo.src}
                className="
                  group relative aspect-[4/3] flex items-center justify-center
                  border-r border-b border-border bg-white p-6
                  transition-colors duration-300 hover:bg-off-white
                "
              >
                <div
                  className="
                    relative w-full h-full
                    transition-all duration-300
                    grayscale opacity-70
                    group-hover:grayscale-0 group-hover:opacity-100
                  "
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
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
