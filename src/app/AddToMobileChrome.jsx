import React from "react";

import { FaTimes } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdAddToHomeScreen } from "react-icons/md";
import { ImArrowUp } from "react-icons/im";

export default function AddToMobileChrome(props) {
  const { closePrompt, doNotShowAgain } = props;

  return (
    <div className="fixed top-0 left-0 right-0 h-[95%] z-50 pt-12 px-4 text-white">
      <div className="py-10 relative bg-slate-800 px-4 pb-6 pt-10 h-full rounded-xl flex flex-col justify-around items-center text-center">
        <ImArrowUp className="text-4xl absolute top-[10px] right-[10px] text-indigo-700 z-10 animate-bounce" />
        <div className="relative bg-primary p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
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
            <HiDotsVertical className="text-4xl" />
            <p>ikonas</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
            <p>Un paejot uz leju spied</p>
            <div className="bg-zinc-50 flex justify-between items-center w-full px-4 py-2 rounded-lg text-zinc-900">
              <MdAddToHomeScreen className="text-2xl" />
              <p>Add to Home Screen</p>
            </div>
          </div>
          <button className="border-2 p-1" onClick={doNotShowAgain}>
            Nerādi man šo logu
          </button>
        </div>
      </div>
    </div>
  );
}
