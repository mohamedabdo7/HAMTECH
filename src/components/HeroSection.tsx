import React from "react";
import { hero } from "../assets/images"; // Assuming your SVG is in the assets folder

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative mx-auto text-center z-10 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`, // Reference the external SVG
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        marginTop: "70px",
      }}
    >
      <h1
        className="text-5xl font-extrabold text-gray-800 mt-20"
        style={{ fontWeight: "900" }}
      >
        Welcome To{" "}
        <span className="text-blue-600 underline decoration-wavy">
          HMATECH Smart
        </span>
      </h1>
      <h2
        className="text-5xl font-extrabold text-gray-800 mt-2"
        style={{ fontWeight: "900" }}
      >
        for information technology
      </h2>
      <p
        className="text-gray-600 text-lg max-w-2xl mx-auto font-sans"
        style={{
          fontFamily: "Arial, sans-serif",
          marginTop: "4rem",
        }}
      >
        Are you facing difficulties with your website? Do you have a website but
        lack traffic? No need to worry.
      </p>
    </div>
  );
};

export default HeroSection;
