import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

export default function NavItemsWrapper({ close }) {
  const navigationVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.1,
        // delay: 0.1,
      },
    },
    closed: {
      y: -400,
      transition: {
        duration: 0.1,
        // delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={navigationVariants}
      className="absolute top-0 h-full bg-slate-100 transition-all duration-500 dark:bg-cyan-500 px-5 py-0 pt-24 w-[260px] "
    >
      <MenuItem close={close} />
    </motion.div>
  );
}
