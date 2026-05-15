import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] font-jost font-medium uppercase tracking-[0.18em] text-stone mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

export default Eyebrow;
