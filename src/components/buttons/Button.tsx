import React from "react";
import { IButtonProps } from "./Button.interface";

const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white text-md border border-lime rounded-md py-2 px-4 hover:bg-blue-800 hover:text-lime-200 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
