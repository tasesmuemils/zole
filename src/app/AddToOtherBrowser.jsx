import React from "react";
import Link from "next/link";

import { FaTimes } from "react-icons/fa";

export default function AddToOtherBrowser(props) {
  const { closePrompt, doNotShowAgain } = props;
  const searchUrl = `https://www.google.com/search?q=add+to+home+screen+for+common-mobile-browsers`;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90%] z-50 pb-12 px-4 text-white flex flex-col items-center justify-around">
      <div className="relative bg-slate-800 p-4 py-6 h-full rounded-xl flex flex-col justify-around items-center text-center">
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
        <div className="flex flex-col gap-4 items-center text-lg">
          <p>
            Diemžēl, mēs nevaram noteikt kādu pārlūku jūs izmantojat. Meklējiet
            kā var instalēt PWA aplikāciju no jūsu interneta pārlūka
          </p>
          <Link className="text-blue-300" href={searchUrl} target="_blank">
            Pamēģini šo
          </Link>
        </div>
        <button className="border-2 p-1" onClick={doNotShowAgain}>
          Nerādi man šo logu
        </button>
      </div>
    </div>
  );
}
