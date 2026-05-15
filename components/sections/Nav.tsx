"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkColor = scrolled ? "text-ink" : "text-ink";

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
        borderBottomColor: scrolled ? "#E8E6E1" : "rgba(232,230,225,0)",
      }}
      transition={{ duration: 0.25 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-site h-16 px-6 md:px-12 flex items-center justify-between">
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`font-playfair text-[16px] font-normal tracking-[0.12em] ${linkColor} hover:opacity-75 transition-opacity`}
        >
          HANANE SPIERS
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] font-jost font-medium uppercase tracking-[0.08em] ${linkColor} hover:text-warm-gold transition-colors duration-200`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-white transition-all duration-300 px-6 py-2.5 text-[11px] font-jost font-semibold uppercase tracking-[0.16em]"
          >
            Book an Enquiry
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-ink"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-border">
              <span className="font-playfair text-[16px] tracking-[0.12em] text-ink">
                HANANE SPIERS
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-playfair italic text-[32px] text-ink hover:text-warm-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="p-8 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-ink text-white px-8 py-4 text-[11px] font-jost font-semibold uppercase tracking-[0.16em]"
              >
                Book an Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
