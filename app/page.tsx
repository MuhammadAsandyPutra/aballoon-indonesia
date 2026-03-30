import { AboutSection } from "./components/home/AboutSection";
import { CtaSection } from "./components/home/CtaSection";
import { FooterSection } from "./components/home/FooterSection";
import { HeroSection } from "./components/home/HeroSection";
import { Marquee } from "./components/home/Marquee";
import { Navigation } from "./components/home/Navigation";
import { ProductsSection } from "./components/home/ProductsSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { TestimonialSection } from "./components/home/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialSection />
      <CtaSection />
      <FooterSection />
    </>
  );
}
