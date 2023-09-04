"use client";
import { useState, useEffect } from "react";
import Table from "./Table";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";
import { useSpring, animated } from "@react-spring/web";

export default function PunktuTabula() {
  const [isLoading, setIsLoading] = useState(false);
  const [oldGame, setOldGame] = useState(null);
  let [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    // e.target.checked == true ? setChecked(4) : setChecked(3);
    setChecked(e.target.checked);
  };

  // Navigate to page after submit
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    router.push("/gameData");
  };

  const handleToStartClick = () => {
    setIsLoading(true);
    router.push("/");
  };

  useEffect(() => {
    setOldGame(JSON.parse(localStorage.getItem("players")));
  }, []);

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  return (
    <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative flex-col items-center px-5 py-24">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div>
            <h1 className="text-xl mb-6 font-semibold">Punktu tabula</h1>
          </div>
          <div>
            <p className="text-base mb-3">Cik spēlētājiem?</p>
          </div>
          <div className="flex flex-row">
            <label className="relative inline-flex items-center cursor-pointer">
              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                3
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
                4
              </span>
            </label>
          </div>
          <Table gameType="Lielais" playerCount={checked} />
          <Table gameType="Zole" playerCount={checked} />
          <Table gameType="Mazā zole" playerCount={checked} />
          <Table gameType="Galdiņš" playerCount={checked} />
          {oldGame != null ? (
            <div className="p-3 flex flex-row justify-center fixed bottom-0 left-0 bg-slate-100 dark:bg-cyan-500 w-full">
              <button
                style={spring}
                onClick={handleClick}
                className="rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
              >
                Atsākt iepriekšējo spēli
              </button>
            </div>
          ) : (
            <div className="p-3 flex flex-row justify-center fixed bottom-0 left-0 bg-slate-100 dark:bg-cyan-500 w-full">
              <button
                style={spring}
                onClick={handleToStartClick}
                className="rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
              >
                Uz sākumu
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
