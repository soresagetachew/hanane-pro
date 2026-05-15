"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-screen">
        {/* LEFT */}
        <div className="order-2 md:order-1 flex flex-col justify-center py-20 md:py-32 px-6 md:pl-16 xl:pl-24 md:pr-12">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 border border-warm-gold text-warm-gold font-jost text-[10px] uppercase tracking-[0.14em] px-4 py-1.5 mb-8">
              <span aria-hidden>★</span>
              Best Emcee 2024 · Iconic Cosmopolitan Business Awards, Dubai
            </span>
          </motion.div>

          <h1 className="font-playfair font-light text-ink leading-[0.95] tracking-[-0.02em] text-[52px] md:text-[80px]">
            <motion.span className="block" {...fade(0.1)}>
              Hanane
            </motion.span>
            <motion.span className="block italic" {...fade(0.22)}>
              Spiers
            </motion.span>
          </h1>

          <motion.p
            {...fade(0.35)}
            className="mt-6 font-jost text-[12px] font-normal uppercase tracking-[0.14em] text-stone"
          >
            Emcee · TV Presenter · Model · Coach
          </motion.p>

          <motion.p
            {...fade(0.45)}
            className="mt-2 font-jost text-[13px] font-light text-stone"
          >
            London · Dubai · Global
          </motion.p>

          <motion.p
            {...fade(0.55)}
            className="mt-8 font-jost text-[15px] font-light leading-[1.8] text-charcoal max-w-sm"
          >
            Fifteen years commanding the world&apos;s most prestigious stages — from
            Samsung to government summits, from Grazia galas to GITEX.
          </motion.p>

          <motion.div
            {...fade(0.65)}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#contact" variant="primary">
              Book an Enquiry
            </Button>
            <Button href="#showreel" variant="outline">
              <span className="inline-flex items-center gap-2">
                Watch Showreel <ArrowDown size={14} />
              </span>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="order-1 md:order-2 relative h-[55vh] md:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero.jpg"
              alt="Hanane Spiers — editorial portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[center_top]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
