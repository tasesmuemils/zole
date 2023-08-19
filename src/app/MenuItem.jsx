import { motion } from "framer-motion";
import Switcher from "./Switcher";
import { ImSpades } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";

const menuItemVariants = {
  // open: {
  //   y: 0,
  //   // opacity: 1,
  //   transition: {
  //     // duration: 0.4,
  //     // ease: [0.6, 0.05, -0.01, 0.9],
  //   },
  // },
  // closed: {
  //   y: -300,
  //   // opacity: 0,
  //   transition: {
  //     // duration: 0.4,
  //     // ease: [0.6, 0.05, -0.01, 0.9],
  //   },
  // },
};

export default function MenuItem({ close }) {
  const [openModal, setOpenModal] = useState(false);

  const handleNavClose = () => {
    setOpenModal(true);
  };

  return (
    <motion.div variants={menuItemVariants}>
      <div>
        <Switcher />
      </div>
      <div className="py-2">
        <div>
          <button
            onClick={handleNavClose}
            className="flex justify-center items-center rounded-lg text-sm leading-6 font-semibold px-3 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-100 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
          >
            <ImSpades />
            <span className="py-1 px-2">Jauna spēle</span>
          </button>
          {openModal && <PopupModal close={close} open={setOpenModal} />}
        </div>
      </div>
    </motion.div>
  );
}

const PopupModal = ({ open, close }) => {
  const handlePageChange = () => {
    open(false);
    close(true);
  };

  console.log(close);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      id="popup-modal"
      className="flex justify-center items-center bg-slate-500 bg-opacity-80 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Vai tiešām vēlies sākt jaunu spēli?
            </h3>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Visi ievadītie punkti tiks dzēsti
            </h3>
            <Link href="/" onClick={handlePageChange}>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Jā
              </button>
            </Link>
            <button
              onClick={() => open(false)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Tomēr nē
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
