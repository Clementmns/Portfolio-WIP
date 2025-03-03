"use client";
import styles from "./style.module.scss";

import { useLayoutEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useLayoutEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	const handleClick = (e) => {
		e.preventDefault();
		window.location.href = "mailto:clement.mns.pro@gmail.com";
	};

	return (
		<nav>
			<div className="">
				<div className={styles.header}>
					<motion.div
						whileHover={{ scale: 1.15 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						onClick={() => {
							setIsActive(!isActive);
						}}
						className="w-12 h-12 landscape:w-14 landscape:h-14 rounded-full bg-background-dark dark:bg-background-light cursor-pointer flex items-center content-center hover:scale-110 transition-transform duration-300 !z-50"
					>
						<div
							className={`${styles.burger} + before:bg-background-light before:dark:bg-background-dark after:bg-background-light after:dark:bg-background-dark z-50 ${
								isActive ? styles.burgerActive : ""
							}`}
						></div>
					</motion.div>
				</div>
			</div>
			<AnimatePresence waitBeforeExit key={"4"}>
				{isActive && <Nav />}
			</AnimatePresence>
		</nav>
	);
}
