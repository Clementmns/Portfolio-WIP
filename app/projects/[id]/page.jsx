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

   const [isPortrait, setIsPortrait] = useState(
      window.matchMedia("(orientation: portrait)").matches
   );

   // Récupérer l'id du projet
   let params = useParams();
   useEffect(() => {
      // Récupérer l'ID passé dans l'URL
      const { id } = params;
   }, [params]);
   const id = params.id;
   const nextId = parseInt(id) + 1;

   // Parallax effect
   gsap.registerPlugin(ScrollTrigger);

   const parallaxRef = useRef();
   useEffect(() => {
      window.scrollTo(0, 0);
      if (selectedProject) {
         const startParallax =
            parallaxRef.current.querySelectorAll(".startParallax");

         let ctx = gsap.context(() => {
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: startParallax,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
               },
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

   // PROJETS
   const projects = [
      {
         id: 0,
         fr: {
            title: "Portfolio 2024",
            role: [
               "UX / UI Designer",
               "Développeur",
               "Copywriter",
               "Directeur Artistique",
            ],
            desc: "Mon portfolio va au-delà du simple showcase de compétences en développement. Conçu avec des technologies modernes telles que React.Js, Next.Js, GSAP, SCSS et Tailwind CSS, il représente une exploration de l'expérience utilisateur. Inspiré par les sites primés sur awwwards.com, j'ai cherché à repousser les limites du portfolio. Chaque élément a été pensé pour offrir une expérience immersive et mémorable. La structure solide, basée sur React.Js et Next.Js, permet une navigation fluide entre les sections, présentant clairement mes compétences et projets. Les animations dynamiques via GSAP ajoutent vie et dynamisme à chaque interaction, captivant l'attention de l'utilisateur. SCSS et Tailwind CSS ont fusionné pour créer un style visuel distinctif, apportant modernité et unicité à l'ensemble. Mon objectif était de présenter mes compétences de manière engageante et différente. Pour en savoir plus sur la création de ce portfolio, je vous invite à consulter mon profil LinkedIn.",
         },
         en: {
            title: "Portfolio 2024",
            role: [
               "Artistic Director",
               "Developer",
               "UX / UI Designer",
               "Copywriter",
            ],
            desc: "My portfolio extends beyond showcasing development skills. Crafted with modern technologies like React.Js, Next.Js, GSAP, SCSS, and Tailwind CSS, it represents an exploration of user experience. Inspired by award-winning sites on awwwards.com, I aimed to redefine the portfolio. Each element is designed to offer an immersive and memorable experience. Built on React.Js and Next.Js, its robust structure ensures seamless navigation between sections, presenting my skills and projects clearly. Dynamic GSAP animations breathe life into interactions. SCSS and Tailwind CSS merge to create a distinctive visual style, adding modernity and uniqueness. My goal was to present skills in an engaging and distinctive manner. For more insights into creating this portfolio, visit my LinkedIn profile.",
         },
         year: "2023-2024",
         stacks: ["Next.JS", "React.JS", "GSAP", "SCSS"],
         imgHero: "/projectsImages/0/hero.png",
         img1: "/projectsImages/0/1.png",
         img2: "/projectsImages/0/2.png",
         img3: "/projectsImages/0/3.png",
         link: "https://clementomnes.dev",
         linkPreview: "clementomnes.dev",
      },
      {
         id: 1,
         fr: {
            title: "Dashboard",
            role: ["Développeur", "Analiste", "Concepteur"],
            desc: "Le Dashboard représente une interface intuitive permettant de visualiser et d'analyser des données de manière dynamique. Mon objectif principal était de créer un outil accessible et fonctionnel, offrant une expérience utilisateur fluide tout en intégrant des fonctionnalités clés pour une analyse approfondie des données. Parmi les compétences que j'ai mises en œuvre pour ce projet, j'ai notamment utilisé une méthode de transmission des données entre PHP et JavaScript, en exploitant la technique d'AJAX. Cette approche m'a permis de synchroniser efficacement les données côté serveur avec les interactions en temps réel de l'utilisateur, offrant ainsi une expérience interactive et réactive. La conception du Dashboard a impliqué la création de graphiques dynamiques croisant des données pertinentes pour faciliter la compréhension et l'interprétation des informations. J'ai également veillé à ce que l'esthétique visuelle soit soignée, en travaillant sur l'aspect graphique pour garantir à la fois la clarté des informations et l'attrait visuel de l'interface.",
         },
         en: {
            title: "Dashboard",
            role: ["Developer", "Analyst", "Conceptor"],
            desc: "The Dashboard represents an intuitive interface for visualizing and dynamically analyzing data. My main objective was to create an accessible and functional tool that provides a smooth user experience while integrating key features for in-depth data analysis. Among the skills I implemented for this project, I specifically utilized a method for transmitting data between PHP and JavaScript, leveraging the AJAX technique. This approach allowed me to efficiently synchronize server-side data with real-time user interactions, providing an interactive and responsive experience. The Dashboard's design involved creating dynamic graphs that intersect relevant data to facilitate understanding and interpretation of information. I also ensured that the visual aesthetics were polished by working on the graphical aspect to ensure both information clarity and visual appeal of the interface.",
         },
         year: "2023",
         stacks: ["PHP", "MYSQL", "TailwindCSS", "Chart.JS"],
         imgHero: "/projectsImages/1/hero.png",
         img1: "/projectsImages/1/1.png",
         img2: "/projectsImages/1/2.png",
         img3: "/projectsImages/1/3.png",
         link: "https://google.com",
         linkPreview: "dashboard.dev",
      },
      {
         id: 2,
         fr: {
            title: "AppTrackr",
            role: ["Développeur", "Architecte Base de Données"],
            desc: "AppTrackr est une plateforme web dédiée à une gestion dynamique des tickets. Elle permet aux testeurs de créer des tickets et aux administrateurs d'assigner ces tickets aux développeurs avec des priorités spécifiques. Les développeurs peuvent modifier l'état des tickets, offrant ainsi une collaboration transparente et fluide entre les parties impliquées. L'interface intuitive présente clairement les informations sur l'état et la priorité de chaque ticket, offrant ainsi une expérience conviviale pour une gestion optimale des tâches.",
         },
         en: {
            title: "AppTrackr",
            role: ["Developer", "Database Conceptor"],
            desc: "AppTrackr is a web platform dedicated to dynamic ticket management. It allows testers to create tickets, which administrators then assign to developers with specific priorities. Developers can modify ticket statuses, enabling transparent and seamless collaboration among involved parties. The user-friendly interface clearly presents information on each ticket's status and priority, ensuring an intuitive experience for optimal task management.",
         },
         year: "2023",
         stacks: ["PHP", "MYSQL"],
         imgHero: "/projectsImages/2/hero.png",
         img1: "/projectsImages/2/1.png",
         img2: "/projectsImages/2/2.png",
         img3: "/projectsImages/2/3.png",
         link: "https://google.com",
         linkPreview: "apptrackr.dev",
      },
   ];

   const selectedProject = projects.find(
      (project) => project.id.toString() === id
   );
   const nextProject = projects.find((project) => project.id === nextId);

   // Vérifier si un projet correspondant à l'ID a été trouvé
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
            ease: [0.05, 0, 0.05, 1],
         },
      },
   };
   const animationImageInner = {
      initial: { scale: 1.9 },

      enter: {
         scale: 1,
         transition: {
            duration: 1,
            ease: [0.05, 0, 0.05, 1],
         },
      },
   };

   return (
      <>
         <Page>
            <div
               className=" startParallax flex items-center flex-col"
               ref={parallaxRef}
            >
               <div className=" w-11/12">
                  <div className="flex flex-col justify-around items-center mt-[15vh]">
                     <div
                        className="layer z-[6]"
                        data-speed={isPortrait ? "0" : "0.2"}
                     >
                        <h1 className="text-primary-light dark:text-primary-dark text-[11.79vw] font-hero">
                           {selectedProject[lang]?.title}
                        </h1>
                     </div>
                     <div
                        className="w-full h-full layer"
                        data-speed={isPortrait ? "0" : "1"}
                     >
                        <img
                           className="w-full h-[90vh] object-cover portrait:h-[40vh] portrait:mb-10"
                           src={selectedProject.imgHero}
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="flex justify-center w-full">
                     <div className="lg:text-3xl md:text-2xl sm:text-xl text-lg w-10/12 portrait:w-full dark:text-background-light text-background-dark">
                        <div className="flex justify-around portrait:flex-col portrait:items-center gap-10">
                           <div className="flex flex-col gap-20 portrait:flex-row portrait:gap-5 portrait:text-center">
                              <div>
                                 <h3 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">
                                    Year
                                 </h3>
                                 <p>{selectedProject.year}</p>
                              </div>
                              <div>
                                 <h3 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">
                                    Role
                                 </h3>
                                 <ul>
                                    {selectedProject[lang]?.role.map(
                                       (role, index) => (
                                          <li key={index}>{role}</li>
                                       )
                                    )}
                                 </ul>
                              </div>
                              <div>
                                 <h3 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">
                                    Technologies
                                 </h3>
                                 <ul>
                                    {selectedProject.stacks.map(
                                       (stack, index) => (
                                          <li key={index}>{stack}</li>
                                       )
                                    )}
                                 </ul>
                              </div>
                           </div>
                           <div className="flex flex-col gap-20 w-2/3 portrait:w-full">
                              <div>
                                 <h3 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs">
                                    Presentation
                                 </h3>
                                 <p>{selectedProject[lang]?.desc}</p>
                              </div>
                              <div>
                                 <h3 className="lg:text-xl text-primary-light dark:text-primary-dark md:text-lg sm:text-sm text-xs grow-[3]">
                                    Site
                                 </h3>
                                 <ul>
                                    <a
                                       href={selectedProject.link}
                                       className="hover:underline"
                                    >
                                       {selectedProject.linkPreview}
                                    </a>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col gap-20 mb-24 portrait:mb-10 mt-32 portrait:mt-12 portrait:gap-5">
                           <motion.div
                              className="overflow-hidden"
                              variants={animationImage}
                              initial="initial"
                              animate={isInView1 ? "enter" : ""}
                              ref={image1}
                           >
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

                           <motion.div
                              className="overflow-hidden"
                              variants={animationImage}
                              initial="initial"
                              animate={isInView2 ? "enter" : ""}
                              ref={image2}
                           >
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
                           <motion.div
                              className="overflow-hidden"
                              variants={animationImage}
                              initial="initial"
                              animate={isInView3 ? "enter" : ""}
                              ref={image3}
                           >
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
                        {id > 0 && (
                           <Link
                              href={`/projects/${id - 1}`}
                              className="flex justify-center items-center gap-[2vw]"
                           >
                              <div>
                                 <RiArrowLeftSLine className="w-[3vw] h-[3vw] portrait:w-[5vw] portrait:h-[5vw]" />
                              </div>
                              <div>
                                 <HoverEffect
                                    text={
                                       lang == "fr"
                                          ? "Projet précédent"
                                          : "Previous project"
                                    }
                                    width={"48vw"}
                                 />
                              </div>
                           </Link>
                        )}
                        {nextProject && (
                           <Link
                              href={`/projects/${nextId}`}
                              className="flex justify-center items-center gap-[2vw] "
                           >
                              <div>
                                 <HoverEffect
                                    text={
                                       lang == "fr"
                                          ? "Projet suivant"
                                          : "Next project"
                                    }
                                    width={"48vw"}
                                 />
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
