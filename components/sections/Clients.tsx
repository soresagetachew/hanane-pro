"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clients } from "@/lib/data";

export default function Clients() {
  // Duplicate list for seamless marquee
  const row = [...clients, ...clients];

  return (
    <section className="bg-white border-y border-border py-20">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <Eyebrow>Trusted By</Eyebrow>
          <p className="font-jost text-[13px] text-stone">
            A selection of the brands and organisations Hanane has worked with.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden">
          {/* Fade vignettes */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
            style={{ background: "linear-gradient(to left, #fff, transparent)" }}
          />

          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {row.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-playfair text-[22px] text-ink/70 italic shrink-0"
              >
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <p className="mt-10 text-center font-jost text-[12px] text-stone italic">
          … and many more.
        </p>
      </div>
    </section>
  );
}
