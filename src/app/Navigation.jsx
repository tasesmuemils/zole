"use client";
import MenuToggler from "./MenuToggler";
import NavItemsWrapper from "./NavItemsWrapper";
import { motion, useCycle } from "framer-motion";

const sidebarVariants = {
  open: {
    // y: 0,
    // clipPath: `circle(1000px at 40px 40px)`,
    // transition: {
    //   duration: 0.4,
    //   delay: 0.1,
    // },
  },
  closed: {
    // y: -400,
    // clipPath: `circle(20px at 40px 40px)`,
    // transition: {
    //   duration: 0.4,
    //   delay: 0.1,
    // },
  },
};

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 bottom-0 h-1/2 z-10"
    >
      <MenuToggler toggle={() => toggleOpen()} />
      <NavItemsWrapper close={() => toggleOpen()} />
    </motion.nav>
  );
}
