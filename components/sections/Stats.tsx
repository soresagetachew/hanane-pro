"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, mv, rounded]);

  return <span ref={ref}>{val}</span>;
}

export default function Stats() {
  return (
    <section className="bg-white border-y border-border py-14">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-6 py-8 md:py-2"
            >
              <div className="font-playfair text-[44px] md:text-[52px] font-light text-ink leading-none">
                <Counter to={parseInt(s.value, 10)} />
                <span className="text-warm-gold">{s.suffix}</span>
              </div>
              <div className="mt-3 font-jost text-[10px] uppercase tracking-[0.14em] text-stone">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
