"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LandingExperiences() {
	// Experience data
	const experiences = [
		{
			id: 1,
			title: "Java / React Developer - Apprenticeship",
			company: "R3mScore",
			period: "2024 - 2025",
			description: "Assisted in developing applications using Java and React. Integrated Chat GPT for complex tasks.",
			skills: ["Java", "React", "Spring Boot", "Chat GPT Integration", "SQL"]
		},
		{
			id: 2,
			title: "React Developer - Internship",
			company: "R3mScore",
			period: "2024 - 2024",
			description: "Assisted in developing applications using React. Learn how to integrate APIs and develop components.",
			skills: ["React", "Material-UI", "API Integration"]
		}
	];

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

	return (
		<section ref={sectionRef} className="py-24 md:py-32 lg:py-40 px-4 sm:px-6">
			<div className="max-w-5xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} transition={{ duration: 0.6 }} className="mb-16 md:mb-24">
					<h2 className="text-3xl md:text-4xl lg:text-5xl dark:text-background-light text-background-dark">Experience</h2>
					<motion.div
						className="h-px w-16 bg-primary-light dark:bg-primary-dark mt-4 mb-6"
						initial={{ width: 0 }}
						animate={isInView ? { width: "4rem" } : { width: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					/>
				</motion.div>

				<motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-12 md:space-y-20">
					{experiences.map((exp) => (
						<motion.div key={exp.id} variants={itemVariants} className="group">
							<div className="grid md:grid-cols-12 gap-6">
								{/* Left side - Period */}
								<div className="md:col-span-3">
									<div className="sticky top-32">
										<motion.div
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											transition={{ duration: 0.4 }}
											viewport={{ once: false }}
											className="text-sm font-medium text-gray-600 dark:text-gray-400"
										>
											{exp.period}
										</motion.div>
									</div>
								</div>

								{/* Right side - Content */}
								<motion.div className="md:col-span-9" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
									<div className="relative pl-5 border-l border-gray-200 dark:border-gray-800 group-hover:border-primary-light dark:group-hover:border-primary-dark transition-colors duration-300">
										<div>
											<h3 className="text-xl md:text-2xl font-hero text-primary-light dark:text-primary-dark mb-1">{exp.title}</h3>
											<p className="text-base md:text-lg dark:text-background-light text-background-dark mb-3">{exp.company}</p>
											<p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">{exp.description}</p>

											<div className="flex flex-wrap gap-2 mt-4">
												{exp.skills.map((skill, idx) => (
													<motion.span
														key={idx}
														initial={{ opacity: 0 }}
														whileInView={{ opacity: 1 }}
														transition={{ delay: 0.2 + idx * 0.1 }}
														viewport={{ once: false }}
														className="px-3 py-1 text-xs rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
													>
														{skill}
													</motion.span>
												))}
											</div>

											<motion.div className="mt-6 overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: false }}>
												<motion.button
													initial={{ y: 20, opacity: 0.5 }}
													whileHover={{ y: 0, opacity: 1 }}
													className="group flex items-center text-primary-light dark:text-primary-dark text-sm"
												>
													<span className="mr-2 group-hover:underline">View details</span>
													<svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
													</svg>
												</motion.button>
											</motion.div>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
