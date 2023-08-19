"use client";

import { useEffect, useState } from "react";
import Controls from "./Controls";
import { scoreTable } from "./scoreTable";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const springFade = () => {
  return useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 },
  });
};

export default function GameData() {
  const spring = springFade();
  const [playersList, setPlayersList] = useState(null);
  const [score, setScore] = useState(null);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    if (shouldUpdate) setShouldUpdate(false);

    if (!score) {
      setPlayersList(JSON.parse(localStorage.getItem("players")));
    } else {
      localStorage.removeItem("players");
      localStorage.setItem("players", JSON.stringify(score));
      setPlayersList(JSON.parse(localStorage.getItem("players")));
    }
  }, [shouldUpdate, score]);

  if (!playersList) {
    return (
      <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
        <p>Ielādējas dati</p>
      </main>
    );
  }

  // Capture score form controls
  const getScore = (value) => {
    setScore(value);
  };

  return (
    <animated.main
      className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative min-h-screen flex-col items-center justify-between p-24"
      style={spring}
    >
      <div>
        <table className="w-full text-sm text-center mb-20 shadow-xl text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {playersList.map((player, index) => (
                <th
                  className="px-6 py-3 sticky top-0 bg-gray-50 dark:bg-gray-700 text-slate-500 dark:text-white transition-all duration-500 text-sm leading-6 truncate"
                  key={`${player.player + index}`}
                >
                  {player.player}
                </th>
              ))}
            </tr>
          </thead>
          {playersList[0].score.length > 0 && (
            <ScoreRows
              rowsCount={playersList[0].score.length}
              playersList={playersList}
            />
          )}
        </table>
        <Controls
          getScore={getScore}
          scores={scoreTable}
          players={playersList}
        />
      </div>
    </animated.main>
  );
}

const ScoreRows = ({ rowsCount, playersList }) => {
  const arr = [];
  for (let i = 0; i < rowsCount; i++) {
    arr.push(
      <motion.tr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: `${i == rowsCount - 1 ? 0.2 : 0.2}`,
        }}
        className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 `}
        key={`tableRow${i}`}
      >
        <Customtd i={i} score={playersList[0].score[i]} rowsCount={rowsCount} />
        <Customtd i={i} score={playersList[1].score[i]} rowsCount={rowsCount} />
        <Customtd i={i} score={playersList[2].score[i]} rowsCount={rowsCount} />
        {playersList.length != 3 && (
          <Customtd
            i={i}
            score={playersList[3].score[i]}
            rowsCount={rowsCount}
          />
        )}
      </motion.tr>
    );
  }

  return <tbody>{arr}</tbody>;
};

const Customtd = ({ i, score, rowsCount }) => {
  return (
    <td
      className={`px-6 py-4 ${
        i == rowsCount - 1 &&
        " font-extrabold transition-all duration-500 demo-dark:text-slate-100"
      }`}
    >
      <span
        className={`${
          i == rowsCount - 1 &&
          "text-cyan-500 px-2 py-1 border-b-2 border-cyan-500"
        }`}
      >
        {score}
      </span>
    </td>
  );
};
