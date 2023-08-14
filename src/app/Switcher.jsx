"use client";

import React, { useState } from "react";
// import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  // const [colorTheme, setTheme] = useDarkSide();
  // const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  // const toggleDarkMode = (checked) => {
  // 	setTheme(colorTheme);
  // 	setDarkSide(checked);
  // };

  return (
    <>
      <div className="m-2">
        <DarkModeSwitch
          sunColor="#64748b"
          // checked={darkSide}
          // onChange={toggleDarkMode}
          size={24}
        />
      </div>
    </>
  );
}
