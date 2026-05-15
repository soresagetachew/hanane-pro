import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "gold";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-jost font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-charcoal disabled:opacity-50 disabled:cursor-not-allowed",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-white",
  gold:
    "border border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white",
};

export function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = /^https?:/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
