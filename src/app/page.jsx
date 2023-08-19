"use client";
import { useState } from "react";
import PlayersCount from "./PlayersCount";

import PlayersForm from "./PlayersForms";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

export default function Home() {
  const [playersView, setPlayersView] = useState(null);

  const setPlayersCount = (value) => {
    setPlayersView(value);
  };

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  if (!playersView) {
    return (
      <animated.main
        style={spring}
        className="bg-white transition-all duration-500 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen"
      >
        <div className="text-center">
          <h1 className="text-slate-500 dark:text-white transition-all duration-500 text-2xl font-bold">
            "Zoles punkti"
          </h1>
          <p className="text-slate-500 dark:text-white transition-all duration-500 text-base">
            Neskrien pēc lapas un pildspalvas, skaiti "Zoles" punktus šeit
          </p>
        </div>
        <div className="py-10">
          <h2 className="text-lg font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
            Izvēlies spēlētāju skaitu
          </h2>
          <div className="flex flex-row justify-center">
            <PlayersCount number="3" setPlayersCount={setPlayersCount} />
            <PlayersCount number="4" setPlayersCount={setPlayersCount} />
          </div>
        </div>
      </animated.main>
    );
  }

  return <PlayersForm number={playersView} />;
}
