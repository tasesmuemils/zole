"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Controls({ scores, players, getScore }) {
  const [winner, setWinner] = useState(null);
  const [gameType, setGameType] = useState(null);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  const handleGameTypeClick = (e) => {
    setGameType(e.target.textContent);
  };

  const handleWinner = (e) => {
    setWinner(e.target.textContent);
  };

  const handleScenario = (value) => {
    const arr = players.map((player) => {
      if (player.player == winner) {
        player.score.length > 0
          ? player.score.push(
              player.score[player.score.length - 1] + value["Lielajam"]
            )
          : player.score.push(value["Lielajam"]);
      } else {
        player.score.length > 0
          ? player.score.push(
              player.score[player.score.length - 1] + value["1.mazajam"]
            )
          : player.score.push(value["1.mazajam"]);
      }
      return player;
    });

    getScore(arr);
    setGameType(null);
    setWinner(null);
  };

  // console.log(height);

  return (
    <div
      ref={ref}
      className="z-0 bg-slate-50 text-gray-500 dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 w-full px-10 py-5 fixed bottom-0 left-0 flex justify-center"
    >
      <div className="flex justify-center">
        {!gameType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ControlButtonsText text="Spēles veids" />
            <div className="flex basis-1 flex-wrap justify-center">
              {Object.keys(scores).map((gameType, index) => (
                <ControlsButton
                  key={gameType + index + 1}
                  text={gameType}
                  index={index}
                  onClickFunction={handleGameTypeClick}
                />
              ))}
            </div>
          </motion.div>
        )}
        {gameType && gameType != "Galdiņš" && !winner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ControlButtonsText text={`Kurš bija "Lielais"?`} />
            <div className="flex basis-1 flex-wrap justify-center">
              {" "}
              {players.map((player, index) => {
                return (
                  <ControlsButton
                    key={player.player + index + 1}
                    text={player.player}
                    index={index}
                    onClickFunction={handleWinner}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
        {gameType && gameType == "Galdiņš" && !winner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ControlButtonsText text={`Kurš spēlētājs zaudēja?`} />
            <div className="flex basis-1 flex-wrap justify-center">
              {" "}
              {players.map((player, index) => {
                return (
                  <ControlsButton
                    key={player.player + index + 2}
                    text={player.player}
                    index={index}
                    onClickFunction={handleWinner}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
        {winner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ControlButtonsText text={`Kurš scenārijs tika izspēlēts??`} />
            <div className="flex basis-1 flex-wrap justify-center">
              {Object.keys(scores[gameType]).map((scenario, index) => (
                <ControlsButton
                  key={scenario + index + 1}
                  text={scenario}
                  index={index}
                  onClickFunction={() =>
                    handleScenario(scores[gameType][scenario][players.length])
                  }
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const ControlsButton = ({ text, index, onClickFunction }) => {
  return (
    <button
      className="rounded-lg text-sm leading-6 font-semibold px-3 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
      onClick={onClickFunction}
      key={text + index}
    >
      {text}
    </button>
  );
};

const ControlButtonsText = ({ text }) => {
  return (
    <h2 className="text-center pb-2 font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
      {text}
    </h2>
  );
};
