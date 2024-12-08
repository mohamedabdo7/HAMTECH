import { FC, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import FAQSection from "../components/FAQSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import api from "../services/api";

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

  const [websiteData, setWebsiteData] = useState<any>(null); // State for website data
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [contactUsData, setContactUsData] = useState<any>(null); // State for website data

  // Fetch website data
  const fetchWebsiteData = async () => {
    try {
      const response = await api.get("/website/v1/");
      setWebsiteData(response.data.data); // Save the website data
    } catch (err) {
      console.error("Error fetching website data:", err);
      setError("Failed to load website data.");
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };
  const fetchContactUsData = async () => {
    try {
      const response = await api.get("/contact_us/v1/website/contact_details");
      setContactUsData(response.data.data); // Save the website data
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching website data:", err);
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };
  useEffect(() => {
    fetchWebsiteData();
    fetchContactUsData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div className="bg-blue-100">
      {/* Pass scrollToSection and refs to Header */}
      <Header
        scrollToSection={scrollToSection}
        sections={{ aboutRef, servicesRef, faqRef, contactRef }}
      />
      {/* Add refs to respective sections */}
      <div ref={heroRef}>
        <HeroSection heroData={websiteData?.hero} />
      </div>
      <div ref={aboutRef}>
        {/* <AboutUs scrollToSection={scrollToSection} contactRef={contactRef} /> */}
        <AboutUs
          aboutUsData={websiteData?.aboutUs}
          closingBannerData={websiteData?.closingBanner}
          scrollToSection={scrollToSection}
          contactRef={contactRef}
        />
      </div>
      <div ref={servicesRef}>
        <OurServices servicesData={websiteData?.ourServices} />
      </div>
      <div ref={faqRef}>
        <FAQSection faqData={websiteData?.faqs} />
      </div>
      <div ref={contactRef}>
        <ContactUs contactUsData={contactUsData} />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        faqRef={faqRef}
        contactRef={contactRef}
        contactData={contactUsData}
      />
    </div>
  );
};

export default Home;

// import { FC, useRef } from "react";
// import Header from "../components/Header";
// import HeroSection from "../components/HeroSection";
// import AboutUs from "../components/AboutUs";
// import OurServices from "../components/OurServices";
// import FAQSection from "../components/FAQSection";
// import ContactUs from "../components/ContactUs";
// import Footer from "../components/Footer";

// const Home: FC = () => {
//   // Define refs for each section
//   const heroRef = useRef<HTMLDivElement>(null);
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const faqRef = useRef<HTMLDivElement>(null);
//   const contactRef = useRef<HTMLDivElement>(null);

//   // Scroll to section function
//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     ref?.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="bg-blue-100">
//       {/* Pass scrollToSection and refs to Header */}
//       <Header
//         scrollToSection={scrollToSection}
//         sections={{ aboutRef, servicesRef, faqRef, contactRef }}
//       />
//       {/* Add refs to respective sections */}
//       <div ref={heroRef}>
//         <HeroSection />
//       </div>
//       <div ref={aboutRef}>
//         <AboutUs scrollToSection={scrollToSection} contactRef={contactRef} />
//       </div>
//       <div ref={servicesRef}>
//         <OurServices />
//       </div>
//       <div ref={faqRef}>
//         <FAQSection />
//       </div>
//       <div ref={contactRef}>
//         <ContactUs />
//       </div>
//       <Footer
//         scrollToSection={scrollToSection}
//         aboutRef={aboutRef}
//         servicesRef={servicesRef}
//         faqRef={faqRef}
//         contactRef={contactRef}
//       />
//     </div>
//   );
// };

// export default Home;
