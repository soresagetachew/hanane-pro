import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-border py-10">
      <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-playfair text-[15px] tracking-[0.12em] text-ink">
            HANANE SPIERS
          </p>
          <p className="font-jost text-[10px] uppercase tracking-[0.12em] text-stone mt-1">
            Emcee · TV Presenter · Model · Coach
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-jost text-[11px] uppercase tracking-[0.1em] text-stone hover:text-warm-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:text-right">
          <p className="font-jost text-[11px] text-stone">2026 Hanane Spiers</p>
          {/* <p className="font-jost text-[11px] text-stone mt-1">hanane.pro</p> */}
          <p className="font-jost text-[10px] uppercase tracking-[0.12em] text-stone/80 mt-3">
            Developed by{" "}
            <a
              href="https://www.instagram.com/soraprogrammer"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink hover:text-warm-gold transition-colors"
            >
              @Zion Software Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
