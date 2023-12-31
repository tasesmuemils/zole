"use client";

import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export default function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(theme === "light" ? true : false);

  // const colorTheme = theme === "dark" ? "light" : "dark";

  const toggleDarkMode = (checked) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setDarkSide(checked);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <>
      <div className="m-2">
        <DarkModeSwitch
          sunColor="#ffffff"
          moonColor="rgb(6 182 212)"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={24}
        />
      </div>
    </>
  );
}
