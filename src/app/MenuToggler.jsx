"use client";
import { motion } from "framer-motion";

const Path = ({ openPath, closedPath, ...rest }) => {
  return (
    <motion.path
      className="stroke-slate-500 dark:stroke-white"
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

export default function MenuToggler({ toggle }) {
  return (
    <button
      aria-label="menu"
      className="flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 z-50 border-0 outline-none focus:outline-none absolute top-[17px] w-[50px] h-[50px] rounded-r-lg"
      onClick={toggle}
    >
      <svg width="23" height="18" viewBox="0 0 23 23">
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="M 0 -2 L -2 -2" />
        <Path
          closedPath="M 2 16.346 L 20 16.346"
          openPath="M 3 2.5 L 17 16.346"
        />
      </svg>
    </button>
  );
}
