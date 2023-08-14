import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

export default function NavItemsWrapper({ close }) {
	const navigationVariants = {
		open: {
			y: 0,
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			y: -300,
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};
	return (
		<motion.div variants={navigationVariants} className="px-5 py-0 absolute top-[100px] w-[260px]">
			<MenuItem close={close} />
		</motion.div>
	);
}
