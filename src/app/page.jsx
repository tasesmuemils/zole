"use client";
import { useState, useEffect } from "react";
import PlayersCount from "./PlayersCount";
import { useRouter } from "next/navigation";
import PlayersForm from "./PlayersForms";
import { useSpring, animated } from "@react-spring/web";
import Spinner from "./Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [playersView, setPlayersView] = useState(null);
  const [oldGame, setOldGame] = useState(null);

  const setPlayersCount = (value) => {
    setPlayersView(value);
  };

  const handleClick = () => {
    setIsLoading(true);
    router.push("/gameData");
  };

  useEffect(() => {
    setOldGame(JSON.parse(localStorage.getItem("players")));
  }, []);

  // Navigate to page after submit
  const router = useRouter();

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  if (!playersView) {
    return (
      <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
            {oldGame != null && (
              <animated.button
                style={spring}
                onClick={handleClick}
                className="absolute bottom-5 left-5 rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
              >
                Atsākt iepriekšējo spēli
              </animated.button>
            )}
          </>
        )}
      </main>
    );
  }

  return <PlayersForm back={setPlayersCount} number={playersView} />;
}
