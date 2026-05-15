"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="bg-off-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[42%_58%] gap-12 md:gap-16">
          <FadeIn className="md:sticky md:top-24 self-start">
            <div className="relative w-full aspect-[3/4] mx-auto max-w-md md:max-w-none">
              <Image
                src="/images/about.svg"
                alt="Portrait of Hanane Spiers"
                fill
                sizes="(max-width: 768px) 80vw, 42vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-jost text-[11px] text-stone tracking-wide">
              London-born · Algerian-Moroccan heritage
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col justify-center">
            <Eyebrow>About Hanane</Eyebrow>
            <h2 className="font-playfair italic font-normal text-ink text-[34px] md:text-[48px] leading-[1.1] mb-8">
              A presence you won&apos;t forget.
            </h2>

            <p className="font-jost text-[15px] font-light leading-[1.85] text-charcoal mb-5">
              Born in London of Algerian and Moroccan descent, Hanane Spiers has spent
              over fifteen years commanding stages across the globe — from corporate
              boardrooms in Dubai to live television studios in London.
            </p>
            <p className="font-jost text-[15px] font-light leading-[1.85] text-charcoal mb-5">
              With a background in Public Relations, Radio and Television, she brings
              warmth, precision, and an innate ability to read the room — ensuring
              every event she hosts feels effortless and every audience feels seen.
            </p>
            <p className="font-jost text-[15px] font-light leading-[1.85] text-charcoal mb-5">
              She presents fluently in English and Arabic, and has worked with some of
              the world&apos;s most recognised organisations — from Samsung and HSBC to
              the GOV HR Summit and GITEX Technology Week.
            </p>

            <blockquote className="mt-10 pl-5 border-l-2 border-warm-gold">
              <p className="font-playfair italic text-[17px] text-charcoal leading-[1.7]">
                At 12 years old, Hanane appeared in a Cher music video — her first
                taste of the camera, and she never looked back.
              </p>
            </blockquote>

            <div className="mt-10">
              <Button href="#contact" variant="primary">
                Book Hanane
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
