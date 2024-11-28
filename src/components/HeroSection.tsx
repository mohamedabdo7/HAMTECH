import React from "react";
import { hero } from "../assets/images"; // Assuming your SVG is in the assets folder

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative mx-auto text-center  z-10 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`, // Reference the external SVG
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-5xl font-extrabold text-gray-800">
        Welcome To{" "}
        <span className="text-blue-600 underline decoration-wavy">HAM</span>
      </h1>
      <h2 className="text-5xl font-extrabold text-gray-800 mt-2">
        Technologies
      </h2>
      <p
        className="text-gray-600 text-lg max-w-2xl mx-auto mt-6 font-sans"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Are you facing difficulties with your website? Do you have a website but
        lack traffic? No need to worry.
      </p>
    </div>
  );
};

export default HeroSection;
