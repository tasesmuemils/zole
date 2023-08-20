"use client";

import { useEffect, useState, useRef } from "react";
import Controls from "./Controls";
import { scoreTable } from "./scoreTable";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { ImBin, ImSpades, ImClubs } from "react-icons/im";
import Link from "next/link";
import Spinner from "../Spinner";

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
  const [openDeleteModal, setDeleteModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Capture Delete last result Modals result
  const setDeleteLastResult = (value) => {
    setScore(value);
    setDeleteModal(true);
  };

  // Handle "Delete" modal
  const handdleDeleteModal = () => {
    setDeleteModal(true);
  };

  // Close open "New Game" modal
  const handleNewGameModal = () => {
    setOpenModal(true);
  };

  const scrollRef = useRef();

  useEffect(() => {
    console.log("TEST");
    if (shouldUpdate) setShouldUpdate(false);

    if (!score) {
      setPlayersList(JSON.parse(localStorage.getItem("players")));
    } else {
      localStorage.removeItem("players");
      localStorage.setItem("players", JSON.stringify(score));
      setPlayersList(JSON.parse(localStorage.getItem("players")));
    }

    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [shouldUpdate, score]);

  if (!playersList) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-slate-800 ">
        <Spinner />
      </div>
    );
  }

  // Capture score form controls
  const getScore = (value) => {
    setScore(value);
  };

  return (
    <>
      <button
        onClick={handleNewGameModal}
        className="z-[1] flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none fixed top-[80px] w-[50px] h-[50px] rounded-r-lg"
      >
        <ImSpades className="text-slate-500 dark:text-slate-100" />
      </button>
      <button
        onClick={handdleDeleteModal}
        className="z-[1] flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none fixed top-[143px] w-[50px] h-[50px] rounded-r-lg"
      >
        <ImBin className="text-slate-500 dark:text-slate-100" />
      </button>
      {playersList && playersList[0].score.length > 0 && (
        <div className="z-[1] flex justify-center items-center flex-col bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none fixed top-[206px] w-[50px] h-[50px] rounded-r-lg">
          <ImClubs className="text-slate-500 dark:text-slate-100 w-1/5" />
          <p className="text-slate-500 dark:text-slate-100">
            {playersList[0].score.length}
          </p>
        </div>
      )}
      <main
        className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative min-h-screen flex-col items-center justify-between p-24"
        ref={scrollRef}
      >
        {/* {console.log(playersList)} */}
        <div>
          <animated.table
            style={spring}
            className="w-full text-sm text-center mb-20 shadow-xl text-gray-500 dark:text-gray-400"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {playersList.map((player, index) => (
                  <th
                    className="px-3 sm:px-6 py-3 sticky top-0 bg-gray-50 dark:bg-gray-700 text-slate-500 dark:text-white transition-all duration-500 text-sm leading-6 truncate"
                    key={`${player.player + index}`}
                  >
                    {getInitials(player.player)}
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
          </animated.table>
          <Controls
            getScore={getScore}
            scores={scoreTable}
            players={playersList}
          />
        </div>
      </main>
      {openModal && <PopupModal open={setOpenModal} />}
      {openDeleteModal && (
        <DeleteModal open={setDeleteModal} lastResult={setDeleteLastResult} />
      )}
    </>
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
      className={`px-3 sm:px-6 py-4  ${
        i == rowsCount - 1 &&
        " font-extrabold transition-all duration-500 demo-dark:text-slate-100"
      } `}
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

const getInitials = (fullName) => {
  const allNames = fullName.trim().split(" ");
  const initials = allNames.reduce((acc, curr, index) => {
    if (index === 0 || index === allNames.length - 1) {
      acc = `${acc}${curr.charAt(0).toUpperCase()}`;
    }
    return acc;
  }, "");
  return initials;
};

const DeleteModal = ({ open, lastResult }) => {
  const deleteLastResult = () => {
    const players = JSON.parse(localStorage.getItem("players"));

    const pDeletedLastScore = players.map((player) => {
      player.score.splice(-1);
      return player;
    });

    lastResult(pDeletedLastScore);

    open(false);
  };

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
            <h2 className="text-center pb-2 font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
              Vai tiešām dzēst pēdējo rezultātu?
            </h2>
            <div className="pt-2">
              <button
                onClick={deleteLastResult}
                type="button"
                className="rounded-lg text-sm leading-6 font-semibold px-4 py-1 m-3 ring-2 ring-inset ring-red-600 text-slate-100 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-red-600 bg-red-600"
              >
                Jā
              </button>
              <button
                onClick={() => open(false)}
                type="button"
                className="rounded-lg text-sm leading-6 font-semibold px-4 py-1 m-3 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
              >
                Tomēr nē
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PopupModal = ({ open }) => {
  const handlePageChange = () => {
    open(false);
    close(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      id="popup-modal"
      className="flex justify-center items-center bg-slate-700 bg-opacity-80 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
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
            <h2 className="text-center pb-2 font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
              Vai tiešām vēlies sākt jaunu spēli?
            </h2>
            <h2 className="text-center pb-2 font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
              Visi ievadītie punkti tiks dzēsti
            </h2>
            <div className="pt-2">
              <Link href="/" onClick={handlePageChange}>
                <button
                  type="button"
                  className="rounded-lg text-sm leading-6 font-semibold px-4 py-1 m-3 ring-2 ring-inset ring-red-600 text-slate-100 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-red-600 bg-red-600"
                >
                  Jā
                </button>
              </Link>
              <button
                onClick={() => open(false)}
                type="button"
                className="rounded-lg text-sm leading-6 font-semibold px-4 py-1 m-3 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:inset transition-all duration-500 dark:bg-slate-500"
              >
                Tomēr nē
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
