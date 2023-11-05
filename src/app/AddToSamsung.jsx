import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";

export default function AddToSamsung(props) {
  const { closePrompt, doNotShowAgain } = props;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90%] z-50 pb-12 px-4 text-white">
      <div className="relative bg-slate-800 p-4 py-6 h-full rounded-xl flex flex-col justify-around items-center text-center">
        <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
          <FaTimes className="text-2xl" />
        </button>
        <p className="text-lg">
          Vari instalēt "Zoles punkti" aplikāciju uz savas ierīces!
        </p>
        <div className="flex gap-2 items-center text-lg">
          <p>Spied uz</p>
          <FaBars className="text-4xl" />
          <p>ikonas</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
          <p>Un paejot uz leju spied</p>
          <div className="bg-white text-zinc-800 flex flex-col gap-2 items-center p-4 rounded-lg">
            <TfiPlus className="text-2xl" />
            <p>Add page to</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
          <p>Tad spied</p>
          <div className="bg-white text-zinc-800 flex flex-col gap-2 items-center py-2 px-4 rounded-lg">
            <p>Home screen</p>
          </div>
        </div>
        <button className="border-2 p-1" onClick={doNotShowAgain}>
          Nerādi man šo logu
        </button>
        <ImArrowDown className="text-4xl absolute -bottom-[50px] right-[-3px] text-indigo-700 z-10 animate-bounce" />
      </div>
    </div>
  );
}
