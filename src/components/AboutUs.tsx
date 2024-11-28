import { FC, useEffect } from "react";
import {
  contactus1,
  contactus2,
  contactus3,
  ourMissionIcon,
  ourVisionIcon,
  whowe,
  whoweIcon,
} from "../assets/images";
import ContactUsCard from "./UI/AboutUsCard";
import CustomButton from "./UI/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with desired duration and one-time animation
  }, []);

  // Array of card data
  const cardData = [
    {
      icon: whoweIcon,
      title: "Who We Are",
      description:
        "We are a dynamic tech company dedicated to crafting innovative solutions in software development, IoT integration, and digital transformation. Our team of experts is driven by a passion for excellence, delivering tailored services that empower businesses to thrive and adapt in today’s fast-paced digital world.",
    },
    {
      icon: ourVisionIcon,
      title: "Our Vision",
      description:
        "To be a global leader in technology innovation, driving digital transformation and creating smarter, more sustainable solutions for businesses and communities worldwide.",
    },
    {
      icon: ourMissionIcon,
      title: "Our Mission",
      description:
        "To deliver exceptional, scalable, and secure technology solutions that solve real-world problems. We aim to empower businesses through innovation, foster long-term partnerships, and drive positive change with impactful, user-centric designs and cutting-edge technology.",
    },
  ];

  return (
    <section className="py-16 px-0" style={{ paddingBottom: "0" }}>
      <div className=" mx-auto">
        {/* First Section */}
        <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Images Section */}
          <div className="grid grid-cols-3 gap-4 relative">
            <img
              src={contactus1}
              alt="Workstation"
              className="w-full h-auto rounded-lg shadow-md"
              data-aos="fade-up"
            />
            <img
              src={contactus2}
              alt="Code"
              className="w-full h-auto rounded-lg shadow-md relative -top-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src={contactus3}
              alt="Server"
              className="w-full h-auto rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-up" data-aos-delay="600" className="">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "var(--color-deep-blue)" }}
            >
              WHO WE ARE
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a dynamic tech company dedicated to crafting innovative
              solutions in software development, IoT integration, and digital
              transformation. Our team of experts is driven by a passion for
              excellence, delivering tailored services that empower businesses
              to thrive and adapt in today’s fast-paced digital world.
            </p>
            <CustomButton
              text="Contact Us"
              style={{
                backgroundColor: "var(--color-custom-blue)",
                color: "white",
              }}
              className="hover:bg-blue-700"
            />
          </div>
        </div>

        {/* Second Section: Dynamic Cards */}
        <div
          className="container  grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          style={{ marginTop: "40px" }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <ContactUsCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>

        {/* Third Section: Innovating Today */}
        <div
          className="p-8 text-center flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="800"
          style={{
            backgroundImage: `url(${whowe})`, // Reference the external SVG
            backgroundSize: "cover", // Ensures the image covers the container
            backgroundPosition: "center", // Ensures the image is centered
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-custom-blue)" }}
          >
            Innovating Today for a Smarter Tomorrow
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--color-black)" }}
          >
            We are dedicated to creating innovative solutions that address
            today's challenges while shaping a smarter, more connected future.
            Our commitment to excellence drives us to deliver cutting-edge
            technologies that empower businesses and enhance everyday life.
          </p>
          <CustomButton
            text="Contact Us"
            style={{
              backgroundColor: "var(--color-custom-blue)",
              color: "white",
            }}
            className="hover:bg-blue-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
