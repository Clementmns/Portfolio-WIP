"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import getProjectContent from "@/assets/content/getProjectContent";

export default function SeleniteShowcase() {
	const language = useLangChangeObserver();

	const getTranslation = (key) => {
		return getProjectContent(`selenite.${key}`);
	};

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 }
		}
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5 }
		}
	};

	return (
		<section ref={sectionRef} className="py-24 md:py-32 lg:py-40 px-4 sm:px-6">
			<div className="flex gap-10 items-end justify-center">
				<div className="w-11/12 justify-start">
					<p className="text-background-dark dark:text-background-light lg:text-9xl md:text-7xl sm:text-5xl text-3xl">
						Last Pr
						<span className="font-hero text-primary-light dark:text-primary-dark">o</span>ject.
					</p>
				</div>
			</div>

			<motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto mt-32">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left side content */}
					<motion.div variants={itemVariants} className="order-2 md:order-1">
						<h3 className="text-2xl md:text-3xl lg:text-4xl font-hero text-primary-light dark:text-primary-dark mb-4">{getTranslation("heading") || "Adventure in Crystal Caves"}</h3>

						<p className="text-lg md:text-xl lg:text-2xl dark:text-background-light text-background-dark mb-4">{getTranslation("subheading") || "C# Unity Game Development"}</p>

						<p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">
							{getTranslation("description") ||
								"Selenite is an immersive 3D adventure game developed in Unity using C#. Players explore crystal-filled caves, solve puzzles, and discover ancient secrets hidden within shimmering selenite formations."}
						</p>

						<div className="flex flex-wrap gap-3 mb-6">
							<span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm">Unity</span>
							<span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm">C#</span>
							<span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm">3D Modeling</span>
							<span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm">Game Design</span>
						</div>

						<div className="relative">
							<Link href="/projects/selenite" passHref>
								<motion.div
									whileHover={{ x: 4 }}
									transition={{ duration: 0.2 }}
									className="group inline-flex items-center border-b-2 border-primary-light dark:border-primary-dark pb-1 text-base md:text-lg text-primary-light dark:text-primary-dark"
								>
									<span className="group-hover:underline">{getTranslation("buttonText") || "View project details"}</span>
									<svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</motion.div>
							</Link>
						</div>
					</motion.div>

					{/* Right side game screenshots grid */}
					<motion.div variants={imageVariants} className="relative order-1 md:order-2 aspect-video md:aspect-square overflow-hidden rounded-lg shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary-dark/40 z-1"></div>
						<div className="grid grid-cols-2 grid-rows-2 h-full w-full">
							<div className="bg-gray-200 dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
								<div className="h-full w-full bg-primary-light/20 dark:bg-primary-dark/20 rounded relative">
									<Image src="/projectsImages/0/hero.webp" alt="Selenite cave exploration gameplay" layout="fill" objectFit="cover" className="rounded" />
								</div>
							</div>
							<div className="bg-gray-300 dark:bg-gray-700 p-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
								<div className="h-full w-full bg-primary-light/30 dark:bg-primary-dark/30 rounded relative">
									<Image src="/projectsImages/0/3.webp" alt="Selenite main character" layout="fill" objectFit="cover" className="rounded" />
								</div>
							</div>
							<div className="bg-gray-300 dark:bg-gray-700 p-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
								<div className="h-full w-full bg-primary-light/30 dark:bg-primary-dark/30 rounded relative">
									<Image src="/projectsImages/0/1.webp" alt="Selenite crystal formations" layout="fill" objectFit="cover" className="rounded" />
								</div>
							</div>
							<div className="bg-gray-200 dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
								<div className="h-full w-full bg-primary-light/20 dark:bg-primary-dark/20 rounded relative">
									<Image src="/projectsImages/0/2.webp" alt="Selenite puzzle solving" layout="fill" objectFit="cover" className="rounded" />
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Featured game mechanics section */}
				<motion.div variants={containerVariants} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div variants={itemVariants} className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-xl">
						<div className="w-12 h-12 mb-4 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
							<svg className="w-6 h-6 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								></path>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</div>
						<h4 className="text-xl font-semibold mb-2 text-background-dark dark:text-background-light">{getTranslation("feature1.title") || "Dynamic Lighting"}</h4>
						<p className="text-gray-600 dark:text-gray-300">
							{getTranslation("feature1.description") ||
								"Crystal-based lighting system that reacts to player movement and puzzle solving, creating an immersive cave exploration experience."}
						</p>
					</motion.div>

					<motion.div variants={itemVariants} className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-xl">
						<div className="w-12 h-12 mb-4 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
							<svg className="w-6 h-6 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								></path>
							</svg>
						</div>
						<h4 className="text-xl font-semibold mb-2 text-background-dark dark:text-background-light">{getTranslation("feature2.title") || "Crystal Physics"}</h4>
						<p className="text-gray-600 dark:text-gray-300">
							{getTranslation("feature2.description") ||
								"Realistic crystal physics system built with Unity's physics engine, allowing players to interact with and manipulate selenite formations."}
						</p>
					</motion.div>

					<motion.div variants={itemVariants} className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-xl">
						<div className="w-12 h-12 mb-4 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
							<svg className="w-6 h-6 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								></path>
							</svg>
						</div>
						<h4 className="text-xl font-semibold mb-2 text-background-dark dark:text-background-light">{getTranslation("feature3.title") || "Procedural Caves"}</h4>
						<p className="text-gray-600 dark:text-gray-300">
							{getTranslation("feature3.description") || "Procedurally generated cave systems ensure each playthrough offers new exploration opportunities and challenges."}
						</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
