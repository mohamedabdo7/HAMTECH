import { FC, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import FAQSection from "../components/FAQSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home: FC = () => {
  // Define refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-blue-100">
      {/* Pass scrollToSection and refs to Header */}
      <Header
        scrollToSection={scrollToSection}
        sections={{ aboutRef, servicesRef, faqRef, contactRef }}
      />
      {/* Add refs to respective sections */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <OurServices />
      </div>
      <div ref={faqRef}>
        <FAQSection />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Home;
