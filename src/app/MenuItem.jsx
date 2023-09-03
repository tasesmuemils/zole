// "use client";

import { motion } from "framer-motion";
import Switcher from "./Switcher";
import Link from "next/link";

export default function MenuItem({ close }) {
  const handleClick = () => {
    close(true);
  };

  return (
    <motion.div>
      <div>
        <Switcher />
        <div className="flex flex-col">
          <Link href="/punktutabula">
            {" "}
            <button className="grow rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500  hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500">
              Punktu tabula
            </button>
          </Link>
          <Link href="/paraplikaciju" onClick={handleClick}>
            <button className="grow rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500">
              Par aplikāciju
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
