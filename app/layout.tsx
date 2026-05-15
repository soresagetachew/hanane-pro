import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanane.pro"),
  title: "Hanane Spiers — International Emcee, TV Presenter & Model",
  description:
    "Award-winning emcee, TV presenter, model and coach based in London and Dubai. Available for award ceremonies, corporate conferences, government summits, and brand events worldwide. Best Emcee 2024.",
  keywords: [
    "emcee Dubai",
    "TV presenter London",
    "international emcee",
    "corporate host",
    "award ceremony host",
    "conference moderator",
    "Hanane Spiers",
    "Best Emcee 2024",
  ],
  openGraph: {
    title: "Hanane Spiers — International Emcee & TV Presenter",
    description:
      "Award-winning emcee, TV presenter, model and coach. London · Dubai · Global.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    url: "https://hanane.pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanane Spiers",
    description: "Award-winning emcee, TV presenter, model and coach.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hanane.pro" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="bg-white text-charcoal font-jost antialiased">
        {children}
      </body>
    </html>
  );
}
