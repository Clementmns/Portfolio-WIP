"use client";
import React, { useEffect, useState, useRef } from "react";
import Page from "@/components/page";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import Link from "next/link";
import HoverEffect from "@/components/buttonHover";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
	const language = useLangChangeObserver();
	const lang = localStorage.getItem("lang");

	const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

	let params = useParams();
	useEffect(() => {
		const { id } = params;
	}, [params]);
	const id = params.id;

	gsap.registerPlugin(ScrollTrigger);

	const parallaxRef = useRef();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (selectedProject) {
			const startParallax = parallaxRef.current.querySelectorAll(".startParallax");

			let ctx = gsap.context(() => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: startParallax,
						start: "top top",
						end: "bottom top",
						scrub: true
					}
				});

				gsap.utils.toArray(".layer").forEach((layer) => {
					const speed = layer.dataset.speed;
					const movement = -(layer.offsetHeight * speed);
					tl.to(layer, { y: movement, ease: "none" }, 0);
				});
			});

			return () => ctx.revert();
		}
	}, []);

	const projects = [
		{
			id: "selenite",
			fr: {
				title: "Selenite",
				role: ["Lead Développeur Unity", "Chef de projet", "Responsable de livraison"],
				desc: "Selenite: Lost Contact est un jeu vidéo de simulation et d’exploration, développé par la Team Selenite (aussi appelée Selenite Studio) dans le cadre de la Situation d’Apprentissage et d’Évaluation (SAE) du semestre 5 du BUT MMI. Ce projet éducatif plonge les joueurs dans une bataille de vaisseaux sur la Lune. En effet, la colonie lunaire laisse la maison mère sans nouvelles depuis quelque temps. Alex Carter, pilote de renom, est choisi pour une mission de reconnaissance sur la Lune, mais il y découvre une menace inattendue. Il devra donc combattre les ennemis et détruire des avant-postes pour vaincre cette menace. Pour plus d’informations, consultez la fiche produit et le rapport de production."
			},
			en: {
				title: "Selenite",
				role: ["Lead Unity Developer", "Project Manager", "Delivery Manager"],
				desc: "Selenite: Lost Contact is a simulation and exploration video game developed by Team Selenite (also known as Selenite Studio) as part of the Learning and Assessment Situation (SAE) for the 5th semester of the BUT MMI program. This educational project immerses players in a spaceship battle on the Moon. The lunar colony has gone silent, leaving the mother planet without any news for some time. Alex Carter, a renowned pilot, is chosen for a reconnaissance mission on the Moon, but he soon discovers an unexpected threat. He must fight enemies and destroy outposts to overcome this danger. For more information, check out the product sheet and the production report."
			},
			year: "2024-2025",
			stacks: ["Unity", "C#"],
			imgHero: "/projectsImages/0/hero.webp",
			img1: "/projectsImages/0/1.webp",
			img2: "/projectsImages/0/2.webp",
			img3: "/projectsImages/0/3.webp",
			link: "https://selenite.live/",
			linkPreview: "selenite.live",
			github: "https://github.com/selenite-live",
			githubPreview: "selenite-live.git"
		},
		{
			id: "alm-vote",
			fr: {
				title: "ALM Votes",
				role: ["Développeur Front", "Développeur Back", "Architecte Base de Données", "Responsable de livraison"],
				desc: "Dans le cadre d’un projet pour un club de basket, j’ai développé une application permettant aux supporters de voter en temps réel pour le meilleur joueur du match. L’objectif était d’offrir une expérience interactive et d’engager davantage la communauté autour des performances des joueurs. L’application permet aux utilisateurs de voter en direct, avec une visualisation en temps réel des résultats. Un dashboard administrateur a été mis en place pour gérer les joueurs et les matchs, avec des fonctionnalités de création, modification et suppression, ainsi qu’une section analytics permettant d’analyser les tendances et performances des joueurs. Pour assurer des performances optimales, j’ai utilisé Next.js pour le développement front-end, Tailwind CSS pour le style, Drizzle ORM pour la gestion des requêtes SQL et MySQL comme base de données. J’ai conçu et développé cette application de A à Z, en intégrant toutes les fonctionnalités et en optimisant l’expérience utilisateur et l’administration des votes."
			},
			en: {
				title: "ALM Vote Manager",
				role: ["Front-End Developer", "Back-End Developer", "Database Conceptor", "Delivery Manager"],
				desc: "As part of a project for a basketball club, I developed an application that allows supporters to vote in real time for the best player of the match. The goal was to create an interactive experience and increase community engagement around player performances. The application enables users to cast their votes live, with real-time visualization of the results. An admin dashboard was implemented to manage players and matches, featuring creation, modification, and deletion functionalities, along with an analytics section to track trends and player performance. To ensure optimal performance, I used Next.js for front-end development, Tailwind CSS for styling, Drizzle ORM for database queries, and MySQL as the database. I designed and built this application from start to finish, integrating all functionalities and optimizing both the user experience and vote administration."
			},
			year: "2023-2024",
			stacks: ["Next.JS", "React.JS", "MySQL", "Tailwind.CSS"],
			imgHero: "/projectsImages/1/hero.webp",
			img1: "/projectsImages/1/1.webp",
			img2: "/projectsImages/1/2.webp",
			img3: "/projectsImages/1/3.webp",
			link: "https://alm-app.vercel.app/",
			linkPreview: "alm.app",
		},
		{
			id: "portfolio-2024",
			fr: {
				title: "Portfolio 2024",
				role: ["UX / UI Designer", "Développeur", "Copywriter", "Directeur Artistique"],
				desc: "Mon portfolio va au-delà du simple showcase de compétences en développement. Conçu avec des technologies modernes telles que React.Js, Next.Js, GSAP, SCSS et Tailwind CSS, il représente une exploration de l'expérience utilisateur. Inspiré par les sites primés sur awwwards.com, j'ai cherché à repousser les limites du portfolio. Chaque élément a été pensé pour offrir une expérience immersive et mémorable. La structure solide, basée sur React.Js et Next.Js, permet une navigation fluide entre les sections, présentant clairement mes compétences et projets. Les animations dynamiques via GSAP ajoutent vie et dynamisme à chaque interaction, captivant l'attention de l'utilisateur. SCSS et Tailwind CSS ont fusionné pour créer un style visuel distinctif, apportant modernité et unicité à l'ensemble. Mon objectif était de présenter mes compétences de manière engageante et différente. Pour en savoir plus sur la création de ce portfolio, je vous invite à consulter mon profil LinkedIn."
			},
			en: {
				title: "Portfolio 2024",
				role: ["Artistic Director", "Developer", "UX / UI Designer", "Copywriter"],
				desc: "My portfolio extends beyond showcasing development skills. Crafted with modern technologies like React.Js, Next.Js, GSAP, SCSS, and Tailwind CSS, it represents an exploration of user experience. Inspired by award-winning sites on awwwards.com, I aimed to redefine the portfolio. Each element is designed to offer an immersive and memorable experience. Built on React.Js and Next.Js, its robust structure ensures seamless navigation between sections, presenting my skills and projects clearly. Dynamic GSAP animations breathe life into interactions. SCSS and Tailwind CSS merge to create a distinctive visual style, adding modernity and uniqueness. My goal was to present skills in an engaging and distinctive manner. For more insights into creating this portfolio, visit my LinkedIn profile."
			},
			year: "2023-2024",
			stacks: ["Next.JS", "React.JS", "GSAP", "SCSS"],
			imgHero: "/projectsImages/2/hero.webp",
			img1: "/projectsImages/2/1.webp",
			img2: "/projectsImages/2/2.webp",
			img3: "/projectsImages/2/3.webp",
			link: "https://clementomnes.dev",
			linkPreview: "clementomnes.dev",
			github: "https://github.com/clementmns/portfolio-2024",
			githubPreview: "portfolio-2024.git"
		},
		{
			id: "greenshift",
			fr: {
				title: "GreenShift",
				role: ["Développeur Front", "Développeur Back", "Architecte Base de Données", "Responsable de livraison"],
				desc: "Notre équipe composée de Liam MAKÉ, Titouan LAHCHIOUACH et moi-même, Clément OMNÈS, a développé une application web axée sur l'écologie. Nous avons utilisé CodeIgniter pour la structure backend, MySQL pour la base de données et Tailwind.CSS pour l'interface utilisateur. L'application permet aux utilisateurs de créer un compte et de se fixer des objectifs écologiques hebdomadaires. Chaque objectif accompli génère des points, échangeables contre des badges symbolisant des actions positives pour l'environnement. Nous avons intégré des fonctionnalités sociales telles qu'un classement mondial et amical, ainsi que la possibilité de suivre d'autres utilisateurs et de découvrir leurs badges préférés. Nous avons mis l'accent sur une expérience utilisateur fluide et une esthétique simple mais attrayante. Les graphismes ont été choisis pour communiquer notre message écologique de manière claire. En résumé, notre projet vise à encourager des actions écologiques grâce à une plateforme interactive et conviviale."
			},
			en: {
				title: "Greenshift",
				role: ["Front-End Developer", "Back-End Developer", "Database Conceptor", "Delivery Manager"],
				desc: "Our team, consisting of Liam MAKÉ, Titouan LAHCHIOUACH, and myself, Clément OMNÈS, developed a web application with a focus on ecology. We utilized CodeIgniter for the backend structure, MySQL for the database, and Tailwind.CSS for the user interface. The application allows users to create an account and set weekly ecological goals. Each completed goal earns points, which can be exchanged for badges representing positive environmental actions. We integrated social features such as global and friendly rankings, along with the ability to follow other users and discover their favorite badges. We emphasized a smooth user experience and a simple yet appealing aesthetic. Graphics were selected to communicate our ecological message clearly. In summary, our project aims to encourage ecological actions through an interactive and user-friendly platform."
			},
			year: "2024",
			stacks: ["PHP", "MYSQL", "CodeIgniter", "Tailwind.CSS", "JQuery"],
			imgHero: "/projectsImages/3/hero.webp",
			img1: "/projectsImages/3/1.webp",
			img2: "/projectsImages/3/2.webp",
			img3: "/projectsImages/3/3.webp",
			github: "https://github.com/clementmns/greenshift",
			githubPreview: "greenshift.git",
		},
		{
			id: "dashboard",
			fr: {
				title: "Dashboard",
				role: ["Développeur", "Analiste", "Concepteur"],
				desc: "Le Dashboard représente une interface intuitive permettant de visualiser et d'analyser des données de manière dynamique. Mon objectif principal était de créer un outil accessible et fonctionnel, offrant une expérience utilisateur fluide tout en intégrant des fonctionnalités clés pour une analyse approfondie des données. Parmi les compétences que j'ai mises en œuvre pour ce projet, j'ai notamment utilisé une méthode de transmission des données entre PHP et JavaScript, en exploitant la technique d'AJAX. Cette approche m'a permis de synchroniser efficacement les données côté serveur avec les interactions en temps réel de l'utilisateur, offrant ainsi une expérience interactive et réactive. La conception du Dashboard a impliqué la création de graphiques dynamiques croisant des données pertinentes pour faciliter la compréhension et l'interprétation des informations. J'ai également veillé à ce que l'esthétique visuelle soit soignée, en travaillant sur l'aspect graphique pour garantir à la fois la clarté des informations et l'attrait visuel de l'interface."
			},
			en: {
				title: "Dashboard",
				role: ["Developer", "Analyst", "Conceptor"],
				desc: "The Dashboard represents an intuitive interface for visualizing and dynamically analyzing data. My main objective was to create an accessible and functional tool that provides a smooth user experience while integrating key features for in-depth data analysis. Among the skills I implemented for this project, I specifically utilized a method for transmitting data between PHP and JavaScript, leveraging the AJAX technique. This approach allowed me to efficiently synchronize server-side data with real-time user interactions, providing an interactive and responsive experience. The Dashboard's design involved creating dynamic graphs that intersect relevant data to facilitate understanding and interpretation of information. I also ensured that the visual aesthetics were polished by working on the graphical aspect to ensure both information clarity and visual appeal of the interface."
			},
			year: "2023",
			stacks: ["PHP", "MYSQL", "TailwindCSS", "Chart.JS"],
			imgHero: "/projectsImages/4/hero.webp",
			img1: "/projectsImages/4/1.webp",
			img2: "/projectsImages/4/2.webp",
			img3: "/projectsImages/4/3.webp",
			github: "https://github.com/clementmns/Dashboard",
			githubPreview: "dashboard.git"
		},
		{
			id: "apptrackr",
			fr: {
				title: "AppTrackr",
				role: ["Développeur", "Architecte Base de Données"],
				desc: "AppTrackr est une plateforme web dédiée à une gestion dynamique des tickets. Elle permet aux testeurs de créer des tickets et aux administrateurs d'assigner ces tickets aux développeurs avec des priorités spécifiques. Les développeurs peuvent modifier l'état des tickets, offrant ainsi une collaboration transparente et fluide entre les parties impliquées. L'interface intuitive présente clairement les informations sur l'état et la priorité de chaque ticket, offrant ainsi une expérience conviviale pour une gestion optimale des tâches."
			},
			en: {
				title: "AppTrackr",
				role: ["Developer", "Database Conceptor"],
				desc: "AppTrackr is a web platform dedicated to dynamic ticket management. It allows testers to create tickets, which administrators then assign to developers with specific priorities. Developers can modify ticket statuses, enabling transparent and seamless collaboration among involved parties. The user-friendly interface clearly presents information on each ticket's status and priority, ensuring an intuitive experience for optimal task management."
			},
			year: "2023",
			stacks: ["PHP", "MYSQL"],
			imgHero: "/projectsImages/5/hero.webp",
			img1: "/projectsImages/5/1.webp",
			img2: "/projectsImages/5/2.webp",
			img3: "/projectsImages/5/3.webp"
		}
	];

   const getAdjacentProjects = (currentId) => {
      const currentIndex = projects.findIndex((project) => project.id === currentId);
      if (currentIndex === -1) return { prevId: null, nextId: null };
      const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
      const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
      return {
         prevId: projects[prevIndex].id,
         nextId: projects[nextIndex].id
      };
   };

   const { prevId, nextId } = getAdjacentProjects(id);
   const selectedProject = projects.find((project) => project.id === id);
   const nextProject = projects.find((project) => project.id === nextId);
   const prevProject = projects.find((project) => project.id === prevId);

	if (!selectedProject) {
		return <p>Aucun projet trouvé pour cet ID.</p>;
	}

	const image1 = useRef(null);
	const image2 = useRef(null);
	const image3 = useRef(null);

	const isInView1 = useInView(image1);
	const isInView2 = useInView(image2);
	const isInView3 = useInView(image3);

	const animationImage = {
		initial: { scale: 0.7 },

		enter: {
			scale: 1,
			transition: {
				duration: 1,
				ease: [0.05, 0, 0.05, 1]
			}
		}
	};
	const animationImageInner = {
		initial: { scale: 1.9 },

		enter: {
			scale: 1,
			transition: {
				duration: 1,
				ease: [0.05, 0, 0.05, 1]
			}
		}
	};

	return (
		<>
			<Page>
				<div className=" startParallax flex items-center flex-col" ref={parallaxRef}>
					<div className=" w-11/12">
						<div className="flex flex-col justify-around items-center mt-[15vh]">
							<div className="layer z-[6]" data-speed={isPortrait ? "0" : "0.2"}>
								<h1 className="text-primary-light dark:text-primary-dark text-[11.79vw] font-hero">{selectedProject[lang]?.title}</h1>
							</div>
							<div className="w-full h-full layer" data-speed={isPortrait ? "0" : "1"}>
								<img className="w-full h-[90vh] object-cover portrait:h-[40vh] portrait:mb-10" src={selectedProject.imgHero} alt="" />
							</div>
						</div>
						<div className="flex justify-center w-full">
							<div className="lg:text-3xl md:text-2xl sm:text-xl text-lg w-10/12 portrait:w-full dark:text-background-light text-background-dark">
								<div className="flex justify-around portrait:flex-col portrait:items-center gap-10">
									<div className="flex flex-col gap-20 portrait:flex-row portrait:gap-5 portrait:text-center">
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">Year</h2>
											<p>{selectedProject.year}</p>
										</div>
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">Role</h2>
											<ul>
												{selectedProject[lang]?.role.map((role, index) => (
													<li key={index}>{role}</li>
												))}
											</ul>
										</div>
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">Technologies</h2>
											<ul>
												{selectedProject.stacks.map((stack, index) => (
													<li key={index}>{stack}</li>
												))}
											</ul>
										</div>
									</div>
									<div className="flex flex-col gap-20 w-2/3 portrait:w-full">
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">Presentation</h2>
											<p>{selectedProject[lang]?.desc}</p>
										</div>
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs grow-[3]">{selectedProject.link ? "Site" : ""}</h2>
											<div>
												<a href={selectedProject.link} className="hover:underline">
													{selectedProject.linkPreview}
												</a>
											</div>
										</div>
										<div>
											<h2 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs grow-[3]">{selectedProject.github ? "GitHub" : ""}</h2>
											<div>
												<a href={selectedProject.github} className="hover:underline">
													{selectedProject.githubPreview}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-20 mb-24 portrait:mb-10 mt-32 portrait:mt-12 portrait:gap-5">
									<motion.div className="overflow-hidden" variants={animationImage} initial="initial" animate={isInView1 ? "enter" : ""} ref={image1}>
										<motion.img
											variants={animationImageInner}
											initial="initial"
											animate={isInView1 ? "enter" : ""}
											className="w-full h-[80vh] object-cover portrait:h-[40vh] portrait:mb-10"
											src={selectedProject.img1}
											alt=""
											data-speed="1"
										/>
									</motion.div>

									<motion.div className="overflow-hidden" variants={animationImage} initial="initial" animate={isInView2 ? "enter" : ""} ref={image2}>
										<motion.img
											variants={animationImageInner}
											initial="initial"
											animate={isInView2 ? "enter" : ""}
											className="w-full h-[80vh] object-cover portrait:h-[40vh] portrait:mb-10"
											src={selectedProject.img2}
											alt=""
											data-speed="1"
										/>
									</motion.div>
									<motion.div className="overflow-hidden" variants={animationImage} initial="initial" animate={isInView3 ? "enter" : ""} ref={image3}>
										<motion.img
											variants={animationImageInner}
											initial="initial"
											animate={isInView3 ? "enter" : ""}
											className="w-full h-[80vh] object-cover portrait:h-[40vh] portrait:mb-10"
											src={selectedProject.img3}
											alt=""
											data-speed="1"
										/>
									</motion.div>
								</div>
							</div>
						</div>
						<div>
							<div className=" flex flex-col sm:flex-col lg:flex-row justify-center portrait:gap-10 gap-20 w-full mb-8 text-background-dark dark:text-background-light h-[50vh] items-center">
								{prevProject && (
									<Link href={`/projects/${prevId}`} className="flex justify-center items-center gap-[2vw]">
										<div>
											<RiArrowLeftSLine className="w-[3vw] h-[3vw] portrait:w-[5vw] portrait:h-[5vw]" />
										</div>
										<div>
											<HoverEffect text={lang == "fr" ? "Projet précédent" : "Previous project"} width={"48vw"} />
										</div>
									</Link>
								)}
								{nextProject && (
									<Link href={`/projects/${nextId}`} className="flex justify-center items-center gap-[2vw] ">
										<div>
											<HoverEffect text={lang == "fr" ? "Projet suivant" : "Next project"} width={"48vw"} />
										</div>
										<div>
											<RiArrowRightSLine className="w-[3vw] h-[3vw] portrait:w-[5vw] portrait:h-[5vw]" />
										</div>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</Page>
		</>
	);
}
