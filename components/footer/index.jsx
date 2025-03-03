"use client";
import React from "react";
import { RiArrowLeftDownLine } from "react-icons/ri";
import HoverEffect from "../buttonHover";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<>
			<div className="bg-primary-light dark:bg-primary-dark flex justify-between flex-col items-center gap-24">
				<div className="flex justify-between w-11/12 mt-10">
					<h5 className=" footerTitle text-background-light dark:text-background-dark lg:text-7xl md:text-6xl sm:text-5xl text-2xl">Better together.</h5>
					<RiArrowLeftDownLine className="text-background-light dark:text-background-dark lg:text-7xl md:text-6xl sm:text-5xl text-2xl" />
				</div>
				<div className="flex flex-col justify-center items-center gap-14">
					<HoverEffect text="clement.mns.pro@gmail.com" color={"inverse"} width={"60vw"} link="mailto:clement.mns.pro@gmail.com" />
					<motion.a
						whileHover={{ scale: 1.15 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						href="https://bento.me/clement-omnes"
						className="h-8 rounded-full bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark p-6 text-xl flex justify-center items-center w-32"
					>
						bento.me
					</motion.a>
				</div>
				<div className="flex !justify-start text-xs text-background-light dark:text-background-dark mb-4">
					<p>Clément Omnès © - Made with passion - 2024</p>
				</div>
			</div>
		</>
	);
}
