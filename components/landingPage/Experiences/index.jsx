"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LandingExperiences() {
	const experiences = [
		{
			id: 0,
			title: "OpQuast - 875/1000",
			company: "MMI",
			period: "2025",
			description: "Certified OpQuast Professional with a score of 875/1000. Learned about web quality and accessibility.",
			skills: ["OpQuast", "Web Accessibility", "SEO"]
		},
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
			<div className="flex gap-10 items-end justify-center">
				<div className="w-11/12 justify-start">
					<p className="text-background-dark dark:text-background-light lg:text-9xl md:text-7xl sm:text-5xl text-3xl">
						Exper
						<span className="font-hero text-primary-light dark:text-primary-dark">i</span>ences.
					</p>
				</div>
			</div>
			<div className="max-w-5xl mx-auto mt-32">
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
											className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400"
										>
											{exp.period}
										</motion.div>
									</div>
								</div>

								{/* Right side - Content */}
								<motion.div className="md:col-span-9" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
									<div className="relative pl-5 border-l-2 border-gray-200 dark:border-gray-800 group-hover:border-primary-light dark:group-hover:border-primary-dark transition-colors duration-300">
										<div>
											<h3 className="text-2xl md:text-3xl lg:text-4xl font-hero text-primary-light dark:text-primary-dark mb-1">{exp.title}</h3>
											<p className="text-lg md:text-xl lg:text-2xl dark:text-background-light text-background-dark mb-3">{exp.company}</p>
											<p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

											<div className="flex flex-wrap gap-2 mt-4">
												{exp.skills.map((skill, idx) => (
													<motion.span
														key={idx}
														initial={{ opacity: 0 }}
														whileInView={{ opacity: 1 }}
														transition={{ delay: 0.2 + idx * 0.1 }}
														viewport={{ once: false }}
														className="px-3 py-1 text-sm md:text-base rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
													>
														{skill}
													</motion.span>
												))}
											</div>
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
