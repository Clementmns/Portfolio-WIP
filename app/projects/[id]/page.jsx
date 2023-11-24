"use client";
import React, { useEffect, useRef } from "react";
import Page from "@/components/page";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
// import { SmoothScrollProvider } from "@/components/scroll";
import Link from "next/link";
import HoverEffect from "@/components/buttonHover";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
   const language = useLangChangeObserver();
   const lang = localStorage.getItem("lang");

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
            title: "AppTrackr",
            role: ["Développeur créatif", "Analiste", "Concepteur"],
            desc: "FR",
         },
         en: {
            title: "AppTrackr",
            role: ["Creative Dev", "Analyst", "Conceptor"],
            desc: "EN",
         },
         year: "2023",
         stacks: ["PHP", "MYSQL"],
         imgHero: "/projectsThumbnails/05.jpg",
         img1: "/projectsThumbnails/05.jpg",
         img2: "/projectsThumbnails/download.jpeg",
         img3: "/projectsThumbnails/images.png",
      },
      {
         id: 1,
         fr: {
            title: "Portfolio 2024",
            role: ["Développeur créatif", "Analiste", "Concepteur"],
            desc: "FR",
         },
         en: {
            title: "Portfolio 2024",
            role: ["Creative Dev", "Analyst", "Conceptor"],
            desc: "EN",
         },
         year: "2023",
         stacks: ["PHP", "MYSQL"],
         imgHero: "/projectsThumbnails/05.jpg",
         img1: "/projectsThumbnails/05.jpg",
         img2: "/projectsThumbnails/download.jpeg",
         img3: "/projectsThumbnails/images.png",
      },
      {
         id: 2,
         fr: {
            title: "AppTrackr",
            role: ["Développeur créatif", "Analiste", "Concepteur"],
            desc: "FR",
         },
         en: {
            title: "AppTrackr",
            role: ["Creative Dev", "Analyst", "Conceptor"],
            desc: "EN",
         },
         year: "2023",
         stacks: ["PHP", "MYSQL"],
         imgHero: "/projectsThumbnails/05.jpg",
         img1: "/projectsThumbnails/05.jpg",
         img2: "/projectsThumbnails/download.jpeg",
         img3: "/projectsThumbnails/images.png",
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
                     <div className="layer z-[6]" data-speed="0.2">
                        <h1 className="text-primary-light dark:text-primary-dark text-[11.79vw] font-hero">
                           {selectedProject[lang]?.title}
                        </h1>
                     </div>
                     <div className="w-full h-full layer" data-speed="1">
                        <img
                           className="w-full h-[90vh] object-cover"
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
                           </div>
                        </div>
                        <div className="flex flex-col gap-20 mb-24 mt-32 portrait:mt-12">
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
                                 className="w-full h-[80vh] object-cover"
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
                                 className="w-full h-[80vh] object-cover"
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
                                 className="w-full h-[80vh] object-cover"
                                 src={selectedProject.img3}
                                 alt=""
                                 data-speed="1"
                              />
                           </motion.div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className=" flex flex-col sm:flex-col lg:flex-row justify-center portrait:gap-20 gap-20 w-full mb-8 text-background-dark dark:text-background-light h-[50vh] items-center">
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
                                    width={"40vw"}
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
                                    width={"40vw"}
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
