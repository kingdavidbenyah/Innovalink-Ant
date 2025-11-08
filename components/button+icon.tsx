import React from "react";

interface ButtonPlusIconProps {
  text: string;
onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ButtonPlusIcon({
  text,
  icon,
  onClick,
  style,
  className,
  type = "button",
  disabled=false
}: ButtonPlusIconProps) {
  return (
    <button
      type={type}
      className={`${className} rounded-[40px] cursor-pointer text-sm px-5 py-3 flex items-center `}
      style={style}
      onClick={onClick}
    >
      <span>{text}</span>
      {/* Render the icon if provided */}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}
