// Footer.tsx
import React from "react";
import { footerLogo } from "../assets/images";

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  faqRef,
  contactRef,
}) => {
  return (
    <footer
      className=" text-white py-10"
      style={{ backgroundColor: "var(--color-custom-blue)" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <img src={footerLogo} alt="HAM Tech Logo" className="w-24" />
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
          </p>
          <div className="flex space-x-4 justify-start items-start">
            <a
              href="#"
              className="hover:text-blue-200 text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 text-white"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-blue-200 text-sm"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="hover:text-blue-200 text-sm"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(faqRef)}
                className="hover:text-blue-200 text-sm"
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-blue-200 text-sm"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4 text-white">Contacts Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2">
              <i className="fas fa-envelope mt-1 text-blue-200"></i>
              <span className="text-sm">contact@company.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-phone mt-1 text-blue-200"></i>
              <span className="text-sm">(414) 687 - 5892</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-map-marker-alt mt-1 text-blue-200"></i>
              <span className="text-sm">
                794 McAllister St
                <br />
                San Francisco, 94102
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-white-500 mx-16" />

      {/* Footer Bottom */}
      <div className="container  mx-auto flex justify-between text-sm">
        <span>Copyright © HAM Tech</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
