import type {
  Stat,
  Service,
  EventCategory,
  Testimonial,
  PressOutlet,
  NavLink,
} from "./types";

export const siteConfig = {
  name: "Hanane Spiers",
  roles: ["Emcee", "TV Presenter", "Model", "Coach"] as const,
  tagline: "International Emcee · TV Presenter · Model · Coach",
  location: "London · Dubai · Global",
  email: "hello@hanane.pro",
  phone: {
    dubai: "+971 50 688 7883",
    uk: "+44 7944 473433",
  },
  instagram: "@livinghanane",
  instagramUrl: "https://instagram.com/livinghanane",
  linkedin: "Hanane Spiers",
  linkedinUrl: "https://linkedin.com/in/hanane-spiers",
  showreelUrl: "https://www.youtube.com/embed/sV3APjyO3YU",
  award: {
    title: "Best Emcee 2024",
    body: "Iconic Cosmopolitan Business Awards · Dubai",
  },
};

export const stats: Stat[] = [
  { value: "15", suffix: "+", label: "Years on Stage" },
  { value: "500", suffix: "+", label: "Events Hosted" },
  { value: "20", suffix: "+", label: "Countries" },
  { value: "3", suffix: "", label: "Languages" },
];

export const services: Service[] = [
  {
    id: "emcee",
    title: "Emcee & Host",
    description:
      "From award ceremonies and government summits to corporate conferences and product launches — Hanane commands every stage with grace, precision, and the ability to read any room. Bilingual in English and Arabic.",
    highlights: [
      "Award ceremonies",
      "Corporate conferences",
      "Government summits",
      "Product launches",
      "Gala dinners",
    ],
    image: "/images/events/awards.svg",
  },
  {
    id: "model",
    title: "Model",
    description:
      "A global face for leading brands across fashion, beauty, technology, and retail. Hanane's versatility and presence have graced billboards, campaigns, catwalks, and editorial shoots worldwide.",
    highlights: [
      "Brand campaigns",
      "Commercial shoots",
      "Runway",
      "Print editorial",
      "Digital content",
    ],
    image: "/images/events/modelling.svg",
  },
  {
    id: "coach",
    title: "Coach & Facilitator",
    description:
      "Hanane's coaching brings the same clarity and magnetism she delivers on stage into boardrooms and teams. She works with executives, presenters, and corporate groups on presence, communication, and team building.",
    highlights: [
      "Executive presence coaching",
      "Presentation skills",
      "Team building workshops",
      "Communication training",
    ],
    image: "/images/events/conference.svg",
  },
];

export const eventCategories: EventCategory[] = [
  {
    title: "Award Ceremonies",
    description:
      "High-profile galas and industry awards across the Middle East, Europe, and beyond.",
    image: "/images/events/awards.svg",
  },
  {
    title: "Corporate Conferences",
    description:
      "Moderating panels and hosting multi-day summits for global brands and government bodies.",
    image: "/images/events/conference.svg",
  },
  {
    title: "TV & Media",
    description:
      "On-screen presenting for international broadcast and digital media.",
    image: "/images/events/tv.svg",
  },
  {
    title: "Brand Launches",
    description:
      "Bringing energy and precision to product launches and brand activations worldwide.",
    image: "/images/events/brand.svg",
  },
  {
    title: "Gala Dinners",
    description:
      "Setting the tone for high-end events requiring poise, timing, and warmth.",
    image: "/images/events/gala.svg",
  },
  {
    title: "Modelling",
    description:
      "Campaign and runway work for global brands across fashion, retail, and technology.",
    image: "/images/events/modelling.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "From steering two thoughtfully curated sessions to guiding the audience seamlessly throughout the event as our emcee, you ensured every transition felt natural and every conversation remained engaging and purposeful. Delegates particularly appreciated the clarity, poise, and steady energy you brought to the stage.",
    author: "Perna Verma",
    title: "Conference Producer",
  },
  {
    quote:
      "Your opening remarks on Day 2 perfectly captured the key takeaways from Day 1 and built anticipation for the exciting sessions ahead. As a moderator, your ability to steer discussions with clarity and charisma ensured that each speaker's voice was heard and every theme explored in depth.",
    author: "Nikita G",
    title: "Conference Producer",
  },
  {
    quote:
      "We cannot thank you enough for your gracious and extraordinary moderation during the 3 days of the GOV HR and GOV Youth Empowerment Summit. Your input and patience were invaluable throughout the Summit, and also for sharing your brilliant expertise with all of us to learn and grow.",
    author: "Megha Channegowda",
    title: "Event Producer, GOV HR & GOV Youth Empowerment Summit",
  },
];

export const clients: string[] = [
  "Samsung",
  "Etisalat",
  "HP",
  "HSBC",
  "BP",
  "BMW",
  "Mini",
  "Mashreq",
  "GITEX",
  "Sky",
  "Grazia",
  "OK!",
  "L'Oréal",
  "MaxFactor",
  "Canon",
  "Panasonic",
  "Carrefour",
  "Kurt Geiger",
  "Wrigley's",
  "World Travel Awards",
  "Emirates",
  "Hilton",
  "NetApp",
  "NBAD",
  "Wafi Group",
  "ETA Group",
  "VLCC",
  "MEBAA Show",
];

export const pressOutlets: PressOutlet[] = [
  { name: "E! Entertainment", logo: "/logos/e-entertainment.svg" },
  { name: "Style Network ME", logo: "/logos/style-network.svg" },
  { name: "City 7 TV", logo: "/logos/city7.svg" },
  { name: "Sky 806", logo: "/logos/sky.svg" },
  { name: "Virgin 838", logo: "/logos/virgin.svg" },
  { name: "ND TV", logo: "/logos/ndtv.svg" },
  { name: "Arabella TV", logo: "/logos/arabella.svg" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Showreel", href: "#showreel" },
  { label: "Testimonials", href: "#testimonials" },
];
