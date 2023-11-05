"use client";
import { useState, useEffect } from "react";
import PlayersCount from "./PlayersCount";
import { useRouter } from "next/navigation";
import PlayersForm from "./PlayersForms";
import { useSpring, animated } from "@react-spring/web";
import Spinner from "./Spinner";
import AddToHomeScreen from "./AddToHomeScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [playersView, setPlayersView] = useState(null);
  const [oldGame, setOldGame] = useState(null);
  let [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

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
              <h2 className="text-lg text-center font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
                Izvēlies spēlētāju skaitu
              </h2>
              <div className="flex flex-row justify-center">
                <PlayersCount number="3" setPlayersCount={setPlayersCount} />
                <PlayersCount number="4" setPlayersCount={setPlayersCount} />
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <h2 className="px-10 text-center text-base font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
                  Pagaidām pieejams spēles veids "Galdiņš"
                </h2>
                {/* <label className="relative inline-flex items-center cursor-pointer">
                  <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Galdiņš
                  </span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked={checked}
                    onChange={handleChange}
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-cyan-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Ar pulēm
                  </span>
                </label> */}
              </div>
              <AddToHomeScreen />
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

  return (
    <PlayersForm pules={checked} back={setPlayersCount} number={playersView} />
  );
}
