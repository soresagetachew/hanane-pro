"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export default function AwardBanner() {
  return (
    <section className="bg-off-white border-y border-border py-5">
      <FadeIn className="max-w-site mx-auto px-6 md:px-12">
        <div className="flex items-center gap-6">
          <span className="hidden sm:block border-t border-warm-gold/30 flex-1" />
          <p className="font-jost text-[12px] font-medium uppercase tracking-[0.14em] text-warm-gold text-center">
            <span aria-hidden className="mr-2">★</span>
            Best Emcee 2024 &nbsp;·&nbsp; Iconic Cosmopolitan Business Awards, Dubai
          </p>
          <span className="hidden sm:block border-t border-warm-gold/30 flex-1" />
        </div>
      </FadeIn>
    </section>
  );
}
