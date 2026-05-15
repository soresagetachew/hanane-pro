"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

const EVENT_TYPES = [
  "Award Ceremony",
  "Corporate Conference",
  "Government Summit",
  "Brand Launch",
  "TV/Media",
  "Coaching Enquiry",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full bg-transparent border-0 border-b border-border py-3 font-jost text-[14px] text-ink placeholder:text-stone/60 focus:outline-none focus:border-warm-gold transition-colors";

const labelBase =
  "block font-jost text-[11px] uppercase tracking-[0.12em] text-stone mb-2";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Request failed");
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 md:gap-16">
          {/* LEFT */}
          <FadeIn className="md:sticky md:top-24 self-start">
            <Eyebrow>Book Hanane</Eyebrow>
            <h2 className="font-playfair italic text-ink text-[32px] md:text-[38px] leading-[1.2]">
              Let&apos;s make your event unforgettable.
            </h2>
            <p className="font-jost text-[14px] font-light text-charcoal mt-6 leading-[1.8]">
              Available for events globally. Reach out to discuss your brief and
              we&apos;ll be in touch within 24 hours.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-warm-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-jost text-[13px] text-charcoal hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-warm-gold shrink-0" />
                <span className="font-jost text-[13px] text-charcoal">
                  Dubai &nbsp;{siteConfig.phone.dubai}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-warm-gold shrink-0" />
                <span className="font-jost text-[13px] text-charcoal">
                  UK &nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.phone.uk}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-warm-gold shrink-0" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-jost text-[13px] text-charcoal hover:text-ink transition-colors"
                >
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-5">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-stone hover:text-warm-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-stone hover:text-warm-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.1}>
            {status === "success" ? (
              <div className="max-w-lg text-center py-10">
                <p className="font-jost text-[24px] text-warm-gold">✓</p>
                <p className="font-playfair italic text-[22px] text-ink mt-3">
                  Thank you. Hanane will be in touch shortly.
                </p>
                <p className="font-jost text-[13px] text-stone mt-3">
                  In the meantime, follow along on{" "}
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-warm-gold border-b border-warm-gold"
                  >
                    {siteConfig.instagram}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-lg">
                <div>
                  <label htmlFor="name" className={labelBase}>
                    Full Name *
                  </label>
                  <input id="name" name="name" type="text" required className={inputBase} />
                </div>

                <div>
                  <label htmlFor="email" className={labelBase}>
                    Email Address *
                  </label>
                  <input id="email" name="email" type="email" required className={inputBase} />
                </div>

                <div>
                  <label htmlFor="organisation" className={labelBase}>
                    Organisation
                  </label>
                  <input id="organisation" name="organisation" type="text" className={inputBase} />
                </div>

                <div>
                  <label htmlFor="eventType" className={labelBase}>
                    Event Type *
                  </label>
                  <select id="eventType" name="eventType" required className={`${inputBase} appearance-none bg-[length:10px] bg-[right_center] bg-no-repeat`}>
                    <option value="">Select…</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className={labelBase}>
                    Event Date
                  </label>
                  <input id="eventDate" name="eventDate" type="date" className={inputBase} />
                </div>

                <div>
                  <label htmlFor="location" className={labelBase}>
                    Country / City
                  </label>
                  <input id="location" name="location" type="text" className={inputBase} />
                </div>

                <div>
                  <label htmlFor="message" className={labelBase}>
                    Message / Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                  className="w-full py-4 mt-2"
                >
                  {status === "submitting" ? "Sending…" : "Send Enquiry"}
                </Button>

                {status === "error" && (
                  <p className="text-red-500 font-jost text-[13px]">
                    Something went wrong. Please email{" "}
                    <a href={`mailto:${siteConfig.email}`} className="underline">
                      {siteConfig.email}
                    </a>{" "}
                    directly.
                    {error ? <span className="block text-stone text-[11px] mt-1">({error})</span> : null}
                  </p>
                )}
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
