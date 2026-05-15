"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { eventCategories } from "@/lib/data";

// Alternating aspect ratios for editorial rhythm
const aspects = ["aspect-[3/4]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]"];

export default function EventsGrid() {
  return (
    <section id="events" className="bg-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <Eyebrow>Events Portfolio</Eyebrow>
          <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1]">
            Every stage. Every audience.
          </h2>
          <p className="font-jost text-[15px] font-light text-charcoal mt-5 leading-[1.85]">
            A selection of events across award ceremonies, conferences, TV, and brand activations.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {eventCategories.map((e, i) => (
            <FadeIn
              key={e.title}
              delay={(i % 3) * 0.08}
              className={`relative overflow-hidden group ${aspects[i % aspects.length]}`}
            >
              <Image
                src={e.image}
                alt={e.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.88] transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="font-playfair italic text-[20px] text-white">
                  {e.title}
                </h3>
                <p className="font-jost text-[13px] text-white/70 mt-2 line-clamp-2 leading-[1.7]">
                  {e.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
