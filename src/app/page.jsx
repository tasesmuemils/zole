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
      <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen">
        <animated.div style={spring} className="text-center">
          <div className="px-2 sm:px-0">
            <h1 className="text-slate-500 dark:text-white transition-all duration-500 text-2xl font-bold">
              "Zoles punkti"
            </h1>
            <p className="text-slate-500 dark:text-white transition-all duration-500 text-base">
              Neskrien pēc lapas un pildspalvas, skaiti "Zoles" punktus šeit
            </p>
          </div>
        </animated.div>
        <animated.div style={spring} className="py-10">
          <h2 className="text-lg font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
            Izvēlies spēlētāju skaitu
          </h2>
          <div className="flex flex-row justify-center">
            <PlayersCount number="3" setPlayersCount={setPlayersCount} />
            <PlayersCount number="4" setPlayersCount={setPlayersCount} />
          </div>
        </animated.div>
      </main>
    );
  }

  return <PlayersForm number={playersView} />;
}
