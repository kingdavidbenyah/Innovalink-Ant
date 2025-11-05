import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: any;
}

export default function Button({
  text,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${className} cursor-pointer rounded-[40px] text-sm font-semibold  px-4 sm:px-5 py-2.5 sm:py-3`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
