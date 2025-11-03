import React from "react";



export default function button({ text, onClick, className }) {
  return (
    <button className={`${className} rounded-[40px] text-sm  px-5 py-3`} onClick={onClick}>
      {text}
    </button>
  );
}
