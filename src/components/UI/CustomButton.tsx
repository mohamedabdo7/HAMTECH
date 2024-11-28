import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const CustomButton: FC<ButtonProps> = ({ text, onClick, style, className }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`w-48 px-6 py-3 font-medium text-lg rounded-lg shadow-md transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
