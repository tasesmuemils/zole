"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ImInfo } from "react-icons/im";

export default function Controls({ scores, players, getScore, open, pules }) {
  const [winner, setWinner] = useState(null);
  const [gameType, setGameType] = useState(null);
  const [lielais, setLielais] = useState(null);
  const [openTranslationModal, setOpenTranslationModal] = useState(false);

  const handleGameTypeClick = (e) => {
    setGameType(e.target.textContent);
  };

  const handleLielais = (e) => {
    setLielais(e.target.textContent);
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
    open(false);
  };

  // Dont show scenario page for gametype "Galdiņš"
  if (gameType == "Galdiņš" && winner) {
    handleScenario(scores[gameType]["Spēlētājs, kurš zaudē"][players.length]);
  }

  return (
    <div className="z-10 bg-slate-50 text-gray-500 dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 w-full h-full px-10 py-5 fixed bottom-0 left-0 flex justify-center items-center">
      <div className="grid justify-center">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => open(false)}
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        {!gameType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ControlButtonsText text="Spēles veids" />
            <div
              className={`grid grid-cols-${
                pules == "true" ? `1` : `2`
              } justify-center`}
            >
              {pules == "true"
                ? Object.keys(scores)
                    .slice(0, -1)
                    .map((gameType, index) => (
                      <ControlsButton
                        key={gameType + index + 1}
                        text={gameType}
                        index={index}
                        onClickFunction={handleGameTypeClick}
                      />
                    ))
                : Object.keys(scores).map((gameType, index) => (
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
        {gameType &&
          (gameType == "Lielais" || gameType == "Zole") &&
          winner &&
          !lielais && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ControlButtonsText text="Lielais..." />
              <div className="grid grid-cols-2 justify-center">
                <button
                  className="rounded-lg text-base leading-6 font-semibold px-6 py-6 m-3 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
                  onClick={handleLielais}
                >
                  Uzvarēja
                </button>
                <button
                  className="rounded-lg text-base leading-6 font-semibold px-6 py-6 m-3 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
                  onClick={handleLielais}
                >
                  Zaudēja
                </button>
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
        {gameType == "Mazā zole" && winner && (
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
        {lielais && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <ControlButtonsText text={`Kurš scenārijs tika izspēlēts?`} />
            <div className="flex basis-1 flex-wrap justify-center">
              {lielais == "Uzvarēja"
                ? Object.keys(scores[gameType])
                    .slice(0, 3)
                    .map((scenario, index) => (
                      <ControlsButton
                        key={scenario + index + 1}
                        text={scenario}
                        index={index}
                        onClickFunction={() =>
                          handleScenario(
                            scores[gameType][scenario][players.length]
                          )
                        }
                      />
                    ))
                : Object.keys(scores[gameType])
                    .slice(3, 6)
                    .map((scenario, index) => (
                      <ControlsButton
                        key={scenario + index + 1}
                        text={scenario}
                        index={index}
                        onClickFunction={() =>
                          handleScenario(
                            scores[gameType][scenario][players.length]
                          )
                        }
                      />
                    ))}
            </div>
            <button
              className="absolute right-0 -bottom-10 text-xl "
              onClick={setOpenTranslationModal}
            >
              <ImInfo />
            </button>
          </motion.div>
        )}
      </div>
      {openTranslationModal && (
        <TranslationModal
          open={setOpenTranslationModal}
          scenarios={Object.keys(scores[gameType])}
        />
      )}
    </div>
  );
}

const ControlsButton = ({ text, index, onClickFunction }) => {
  return (
    <button
      className="rounded-lg text-base leading-6 font-semibold px-6 py-6 m-3 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
      onClick={onClickFunction}
      key={text + index}
    >
      {scenarioTextChange(text)}
    </button>
  );
};

const ControlButtonsText = ({ text }) => {
  return (
    <h2 className="text-center pb-2 font-bold text-xl text-slate-500 transition-all duration-500 dark:text-slate-200">
      {text}
    </h2>
  );
};

const scenarioTextChange = (text) => {
  let value = "";
  switch (text) {
    case "Uzvar ar 61-90 acīm":
      value = "Uzvar";
      break;
    case "Uzvar ar 91 vai vairāk acīm":
      value = "Uzvar jaņos";
      break;
    case "Uzvar iegūstot visus stiķus":
      value = "Uzvar bezstiķī";
      break;
    case "Zaudē ar 31-60 acīm":
      value = "Zaude";
      break;
    case "Zaudē ar 30 un mazāk acīm":
      value = "Zaudē jaņos";
      break;
    case "Zaudē neiegūstot nevienu stiķi":
      value = "Zaudē bezstiķī";
      break;
    default:
      value = text;
      break;
  }

  return value;
};

const TranslationModal = ({ open, scenarios }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      id="popup-modal"
      className="flex justify-center items-center bg-slate-700 bg-opacity-80 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="py-3 relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => open(false)}
          >
            <svg
              className="w-3 h-3"
              // aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="pt-10 pb-5 px-6 text-center">
            {scenarios.map((text, index) => (
              <div className="text-left pb-3">
                <p>
                  {scenarioTextChange(text)} = {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
