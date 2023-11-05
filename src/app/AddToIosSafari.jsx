import React from "react";

import { TbShare2 } from "react-icons/tb";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";

export default function AddToIosSafari(props) {
  const { closePrompt, doNotShowAgain } = props;

  return (
    <div className="flex fixed bottom-0 left-0 h-[60%] z-50 pb-12 px-4 text-white ">
      <div className="relative bg-slate-800 px-4 pb-6 pt-10 h-full rounded-xl flex flex-col justify-around items-center text-center">
        <button
          aria-label="close-pwa-intro"
          className="absolute top-0 right-0 p-3"
          onClick={closePrompt}
        >
          <FaTimes className="text-2xl" />
        </button>
        <p className="text-lg">
          Vari instalēt "Zoles punkti" aplikāciju uz savas ierīces!
        </p>
        <div className="flex gap-2 items-center text-lg">
          <p>Spied uz</p>
          <TbShare2 className="text-4xl" />
          <p>ikonas</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
          <p>Un paejot uz leju spied</p>
          <div className="bg-zinc-800 flex justify-between items-center w-full px-4 py-2 rounded-lg">
            <p>Add to Home Screen</p>
            <AiOutlinePlusSquare className="text-2xl" />
          </div>
        </div>
        <button className="border-2 p-1" onClick={doNotShowAgain}>
          Nerādi man šo logu
        </button>
        <ImArrowDown className="text-4xl absolute -bottom-[50px] text-cyan-500 -z-10 animate-bounce" />
      </div>
    </div>
  );
}
