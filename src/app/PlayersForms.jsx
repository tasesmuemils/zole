"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PlayersForm(props) {
	const [error, setError] = useState(false);
	// Navigate to page after submit
	const router = useRouter();

	const handleSubmit = (e) => {
		setError(false);
		e.preventDefault();
		if (
			e.target[0].value.length == 0 ||
			e.target[1].value.length == 0 ||
			e.target[2].value.length == 0 ||
			(e.target[3].tagName != "BUTTON" && e.target[3].value.length == 0)
		) {
			setError(true);
			return;
		}
		// Captures all input values
		const playersList = [
			{ player: e.target[0].value, score: [] },
			{ player: e.target[1].value, score: [] },
			{ player: e.target[2].value, score: [] },
		];
		e.target[3].tagName != "BUTTON" && playersList.push({ player: e.target[3].value, score: [] });

		// Sets values to local storage
		localStorage.removeItem("players");
		localStorage.setItem("players", JSON.stringify(playersList));
		router.push("/gameData");
	};

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.1 }}
			className="bg-white transition-all duration-500 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen p-24"
			//  flex flex-col justify-center items-center min-h-screen
		>
			<form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
				<h2 className="text-lg font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
					Ievadi spēlētāju vārdus
				</h2>
				<div className="flex flex-col m-4">
					<CustomInput />
					<CustomInput />
					<CustomInput />
					{props.number == 4 ? <CustomInput /> : null}
				</div>

				<div className="flex flex-col py-2">
					<button
						className="grow rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 transition-all duration-500 dark:ring-inset transition-all duration-500 dark:bg-slate-500"
						type="submit"
					>
						Sākt spēli
					</button>
					{error && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-xs font-semibold  text-red-500"
						>
							Vārdu ievadi visiem spēlētājiem
						</motion.p>
					)}
				</div>
			</form>
		</motion.main>
	);
}

const CustomInput = () => {
	return (
		<input
			className="caret-cyan-500 border-b-2 border-cyan-500 m-2 py-1 px-2 text-center bg-white transition-colors duration-500 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring focus:ring-cyan-500 focus:rounded-md"
			type="text"
		/>
	);
};
