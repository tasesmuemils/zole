"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import NavItemsWrapper from "./NavItemsWrapper";
import MenuToggler from "./MenuToggler";

// const GlobalStyle = styled.createGlobalStyle`
//   *, *:before, *:after {
//     box-sizing: border-box;
//   }

//   body {
//     margin: 0;
//     height: 100vh;
//     font-family: sans-serif;
//   }
// `

// const Container = styled.div`
// 	display: flex;
// 	color: #fff;
// 	height: 100vh;
// 	min-width: 0;
// `;

// const SideNav = styled(motion.nav)`
// 	display: flex;
// 	position: relative;
// 	min-width: 0;
// 	flex-basis: 400px;
// 	flex-direction: column;
// 	background-color: #14213d;
// 	padding: 2rem;
// 	transform: translateX(-100%);
// `;

// const Content = styled.div`
// 	display: flex;
// 	color: #000;
// 	text-align: center;
// 	flex-direction: column;
// 	flex: 1;
// 	min-width: 0;
// 	padding: 10px;
// `;

// const ToggleButton = styled.button`
// 	color: #000;
// 	font-size: 0.7rem;
// 	position: absolute;
// 	top: 10px;
// 	left: 10px;
// `;

// const Links = styled.ul`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	margin: 0;
// 	padding: 0;

// 	li {
// 		list-style-type: none;
// 	}

// 	a {
// 		color: #fff;
// 		text-decoration: none;
// 	}
// `;

export default function NewNavigation() {
	const [isOpen, setIsOpen] = useState(true);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};

	return (
		<div className="absolute z-50 top-0 left-0 flex h-screen min-w-0">
			<motion.nav
				className="flex relative min-w-0 basis-96 flex-col p-2 bg-slate-500 -translate-x-full"
				animate={isOpen ? "open" : "closed"}
				variants={variants}
			>
				<NavItemsWrapper />
			</motion.nav>
			<div className="flex text-center">
				<button className="fixed z-50 top-10 left-10" onClick={() => setIsOpen((prevState) => !prevState)}>
					{isOpen ? "Close" : "Open"}
				</button>
				<MenuToggler toggle={() => setIsOpen()} />
			</div>
		</div>
	);
}
