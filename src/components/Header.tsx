import React, { FC, RefObject } from "react";
import { logo } from "../assets/icons"; // Ensure this path matches your actual logo import
interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: {
    aboutRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    faqRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}
const Header: FC<HeaderProps> = ({ scrollToSection, sections }) => {
  const [isMobile, setIsMobile] = React.useState(false); // Flag for mobile mode
  const [isOpen, setIsOpen] = React.useState(false); // State to toggle mobile menu
  // Function to check if the screen size is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    setIsOpen(false);
  };
  const handleScroll = (section: RefObject<HTMLDivElement>) => {
    scrollToSection(section);
    if (isMobile) {
      setIsOpen(false);
    }
  };
  React.useEffect(() => {
    // Set initial state
    checkMobile();
    // Add event listener to update state on resize
    window.addEventListener("resize", checkMobile);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <header
      className={`w-full py-4 px-8 flex justify-center items-center bg-white shadow-md shadow-gray-200 fixed top-0 z-50 ${
        isMobile ? "!justify-between" : ""
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="HAM Technologies Logo" className="h-10 w-auto" />
      </div>
      {/* Navigation */}
      <nav className="ml-12 flex space-x-12">
        {isMobile ? (
          <>
            <button
              className="md:hidden flex flex-col items-center space-y-1 focus:outline-none bg-white hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block h-1 w-6 bg-gray-300"></span>
              <span className="block h-1 w-6 bg-gray-300"></span>
              <span className="block h-1 w-6 bg-gray-300"></span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleScroll(sections.aboutRef)}
              className="relative bg-transparent text-[#231F20] font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full hover:text-blue-600 hover:bg-transparent"
            >
              About Us
            </button>
            <button
              onClick={() => handleScroll(sections.servicesRef)}
              className="relative bg-transparent text-[#231F20] font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full hover:text-blue-600 hover:bg-transparent"
            >
              Services
            </button>
            <button
              onClick={() => handleScroll(sections.faqRef)}
              className="relative bg-transparent text-[#231F20] font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full hover:text-blue-600 hover:bg-transparent"
            >
              FAQ
            </button>
            <button
              onClick={() => handleScroll(sections.contactRef)}
              className="relative bg-transparent text-[#231F20] font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full hover:text-blue-600 hover:bg-transparent"
            >
              Contact Us
            </button>
          </>
        )}
      </nav>
      {isMobile && (
        <div
          className={`${
            isOpen ? "absolute" : "hidden"
          } w-full bg-white text-black py-3 px-4 top-[4.2rem] left-0`}
        >
          <button
            onClick={() => handleScroll(sections.aboutRef)}
            className="block py-2 text-[#231F20] bg-white hover:text-white-300 w-full text-left hover:bg-gray-200"
          >
            About Us
          </button>
          <button
            onClick={() => handleScroll(sections.servicesRef)}
            className="block py-2 text-[#231F20] bg-white hover:text-white-300 w-full text-left hover:bg-gray-200"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll(sections.faqRef)}
            className="block py-2 text-[#231F20] bg-white hover:text-white-300 w-full text-left hover:bg-gray-200"
          >
            FAQ
          </button>
          <button
            onClick={() => handleScroll(sections.contactRef)}
            className="block py-2 text-[#231F20] bg-white hover:text-white-300 w-full text-left hover:bg-gray-200"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
