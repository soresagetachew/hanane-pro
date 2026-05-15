import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import AwardBanner from "@/components/sections/AwardBanner";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import EventsGrid from "@/components/sections/EventsGrid";
import About from "@/components/sections/About";
import Showreel from "@/components/sections/Showreel";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AwardBanner />
      <Stats />
      <Services />
      <EventsGrid />
      <About />
      <Showreel />
      <Testimonials />
      <Clients />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
