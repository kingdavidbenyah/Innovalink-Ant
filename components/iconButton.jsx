import React from "react";

export default function IconButton({ text, icon, onClick, className }) {
  return (
    <button
      className={`${className} rounded-[40px] text-sm px-5 py-3 flex items-center `}
      onClick={onClick}
    >
      <span>{text}</span>
      {/* Render the icon if provided */}
      {icon && <span className="icon">{icon}</span>}{" "}
    </button>
  );
}
