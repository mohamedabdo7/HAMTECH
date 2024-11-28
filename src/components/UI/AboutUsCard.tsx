import { FC } from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const AboutUsCard: FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <h3
        className="text-xl font-bold mb-4"
        style={{ color: "var(--color-custom-blue)" }}
      >
        {title}
      </h3>
      <p className="leading-relaxed" style={{ color: "var(--color-black)" }}>
        {description}
      </p>
    </div>
  );
};

export default AboutUsCard;
