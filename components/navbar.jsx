"use client";
import React from "react";
import Image from "next/image";
import SunButton from "./sunButton";
import Button from "./button";
import { useTheme } from "@/utils/ThemeContext";

export default function Navbar() {
  const { theme } = useTheme(); // Access the theme from the context

  return (
    <>
      <nav className="fixed bg-transparent px-4 w-full top-0">
        <div className="flex w-full max-w-7xl place-self-center justify-between">
          <img
            className="w-24 h-24"
            src={
              theme === "dark"
                ? "/INOVALINK_LOGO_ON_WHITE.png"
                : "/INOVALINK_LOGO_ON_BLACK.png"
            }
            alt="Logo"
            width="1920"
            height="1080"
          />
          <div className="flex gap-5 items-center">
            <SunButton />
            <Button text="Contact" className=" bg-primary-5 text-foundation-white dark:text-foundation-black dark:bg-neutral-0" />
          </div>
        </div>
      </nav>
    </>
  );
}
