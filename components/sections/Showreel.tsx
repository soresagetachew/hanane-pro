"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/data";

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const src = `${siteConfig.showreelUrl}?rel=0&modestbranding=1${playing ? "&autoplay=1" : ""}`;

  return (
    <section id="showreel" className="bg-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <FadeIn className="text-center">
          <Eyebrow>Showreel</Eyebrow>
          <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1]">
            See Hanane in action.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-pearl border border-border overflow-hidden">
            {playing ? (
              <iframe
                src={src}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title="Hanane Spiers Showreel"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center group"
                aria-label="Play showreel"
              >
                <span className="absolute inset-0 bg-ink/10 group-hover:bg-ink/15 transition-colors duration-300" />
                <span className="relative w-20 h-20 rounded-full bg-ink/80 group-hover:bg-ink transition-colors duration-300 flex items-center justify-center">
                  <Play size={28} className="text-white translate-x-[2px]" fill="white" />
                </span>
              </button>
            )}
          </div>

          <p className="mt-8 text-center font-jost text-[13px] text-stone">
            Seen enough? Let&apos;s talk about your event.{" "}
            <a
              href="#contact"
              className="text-warm-gold border-b border-warm-gold pb-0.5 hover:opacity-75 transition-opacity ml-1"
            >
              Get in touch →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
