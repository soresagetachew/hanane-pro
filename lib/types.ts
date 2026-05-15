export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface EventCategory {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface PressOutlet {
  name: string;
  logo: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}
