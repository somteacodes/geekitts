import React, { FC } from "react";

type ButtonProps = {
  onClick: () => void;
  background: string;
  color: string;
  disabled?: boolean;
  testid?: string;
  hover?: string;
  hoverText?: string;
  extraClasses?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  background,
  color,
  onClick,
  disabled,
  testid,
  hover,
  hoverText,
  extraClasses,
}) => (
  <div>
    <button
      data-testid={testid || "button"}
      className={
        disabled
          ? "text-center px-4 py-2 bg-gray-400 font-bold rounded-lg"
          : `px-4 py-2  text-sm font-semibold text-white  transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300  hover:${hoverText}  hover:${hover} focus:bg-cyan-700 
            ${background} ${color} ${extraClasses}`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
);
