import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; // Button text
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Allow event handling
  style?: React.CSSProperties; // Inline styles
  className?: string; // Custom classes
  isDisabled?: boolean; // Disabled state
  isLoading?: boolean; // Loading state
  loadingText?: string; // Text to display while loading
}

const CustomButton: FC<ButtonProps> = ({
  text,
  onClick,
  style,
  className = "",
  isDisabled = false,
  isLoading = false,
  loadingText = "Loading...",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`w-48 px-6 py-3 font-medium text-lg rounded-lg shadow-md transition duration-300 ${
        isDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={isDisabled || isLoading}
      {...rest} // Spread any additional button props
    >
      {isLoading ? loadingText : text}
    </button>
  );
};

export default CustomButton;

// import { FC } from "react";

// interface ButtonProps {
//   text: string;
//   onClick?: () => void;
//   style?: React.CSSProperties;
//   className?: string;
// }

// const CustomButton: FC<ButtonProps> = ({ text, onClick, style, className }) => {
//   return (
//     <button
//       onClick={onClick}
//       style={style}
//       className={`w-48 px-6 py-3 font-medium text-lg rounded-lg shadow-md transition duration-300 ${className}`}
//     >
//       {text}
//     </button>
//   );
// };

// export default CustomButton;
