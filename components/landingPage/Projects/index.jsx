"use client";
import React, { useEffect, useRef, useState } from "react";
import Stacks from "./Stacks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function LandingProjects() {
   const projectRef = useRef();
   const [modal, setModal] = useState({ active: false, index: 0 });
   const { active, index } = modal;
   const cursor = useRef(null);

   const [isPortrait, setIsPortrait] = useState(
      window.matchMedia("(orientation: portrait)").matches
   );

   useEffect(() => {
      const checkOrientation = () => {
         setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
      };

      // Ajoute un écouteur pour détecter les changements d'orientation
      window.addEventListener("resize", checkOrientation);

      // Nettoie l'écouteur lors du démontage du composant
      return () => {
         window.removeEventListener("resize", checkOrientation);
      };
   }, []);

   useEffect(() => {
      if (!isPortrait) {
         const triggerAnimation =
            projectRef.current.querySelectorAll(".landing-trigger");
         const pinAnimation =
            projectRef.current.querySelectorAll(".landing-pin");

         let ctx = gsap.context(() => {
            gsap.set(".photo:not(:last-child)", {
               clipPath: "inset(0 0 0 0)",
            });

            const animation = gsap.to(".photo:not(:last-child)", {
               clipPath: "inset(0 0 100% 0)",
               stagger: 0.5,
               ease: "power1.inOut",
            });

            ScrollTrigger.create({
               trigger: triggerAnimation,
               start: "top top",
               end: "bottom bottom",
               pin: pinAnimation,
               animation: animation,
               scrub: true,
               ease: "power.inOut",
            });
         });

         return () => ctx.revert();
      }
   }, [isPortrait]);

   let xMoveCursor = useRef(null);
   let yMoveCursor = useRef(null);

   const moveItems = (x, y) => {
      xMoveCursor.current(x);
      yMoveCursor.current(y);
   };

   // ANIMATION POUR AGRANDIR LE CLIC
   const scaleAnimation = {
      initial: { scale: 0, x: "-50%", y: "-50%" },
      enter: {
         scale: 1,
         x: "-50%",
         y: "-50%",
         transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
         scale: 0,
         x: "-50%",
         y: "-50%",
         transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
      },
   };

   // Afficher CLIC
   const manageModal = (active, index, x, y) => {
      moveItems(x, y);
      setModal({ active, index });
   };

   // FAIRE BOUGER LE CLIC
   useEffect(() => {
      //Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
         duration: 0.5,
         ease: "power3",
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
         duration: 0.5,
         ease: "power3",
      });
   }, [isPortrait]);

   // TODO: Remplir avec de vrais projets
   const projects = [
      {
         id: 0,
         title: "AppTrackr",
         stacks: ["PHP", "MYSQL"],
         img: "/projectsThumbnails/download.jpeg",
      },
      {
         id: 1,
         title: "Portfolio 2024",
         stacks: ["Next.JS", "React.JS", "GSAP", "SCSS"],
         img: "/projectsThumbnails/images.png",
      },
      {
         id: 2,
         title: "AppTrackr",
         stacks: ["PHP", "MYSQL"],
         img: "/projectsThumbnails/05.jpg",
      },
   ];

   return (
      <div className="mt-[60vh] mb-52">
         <div className="flex gap-10 items-end justify-center">
            <div className="w-11/12 justify-start">
               <h4 className="text-background-dark dark:text-background-light lg:text-9xl md:text-7xl sm:text-5xl text-3xl">
                  Wor
                  <span className="font-hero text-primary-light dark:text-primary-dark">
                     k
                  </span>
                  .
               </h4>
            </div>
         </div>
         {isPortrait ? (
            // Affichage en mode portrait
            <div className="w-full gap-5 h-auto p-12 mt-10">
               <div className="w-full flex flex-col gap-52">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="text-3xl flex flex-col justify-center w-full items-center"
                     >
                        <Link
                           href={`/projects/${project.id}`}
                           className="w-[80vw] h-[100vw] flex justify-center m-auto"
                        >
                           <img
                              src={project.img}
                              alt=""
                              className="w-full h-full object-cover rounded-lg cursor-pointer"
                           />
                        </Link>
                        <div className="flex flex-wrap gap-2 justify-center mt-10">
                           {project.stacks.map((stack, stackIndex) => (
                              <Stacks key={stackIndex}>{stack}</Stacks>
                           ))}
                        </div>
                        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-background-dark dark:text-background-light text-center mt-4">
                           {project.title}
                        </h3>
                        <Link
                           href={`/projects/${project.id}`}
                           className="w-48 mt-16 bg-primary-light dark:bg-primary-dark h-12 rounded-full text-background-light dark:!text-background-dark text-xl flex justify-center items-center"
                        >
                           <p className="text-center">view more</p>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         ) : (
            // Affichage normal
            <div
               ref={projectRef}
               className="w-full"
               onMouseMove={(e) => {
                  moveItems(e.clientX, e.clientY);
               }}
            >
               <div className="w-full flex justify-center">
                  <div className="landing-trigger flex justify-between w-3/4">
                     <div className="w-1/2">
                        {/* Détails de chaque projet */}
                        {projects.map((project, index) => (
                           <div
                              key={index}
                              className="text-white text-3xl h-screen flex flex-col justify-center w-4/5 "
                           >
                              <div className="flex flex-wrap gap-2">
                                 {project.stacks.map((stack, stackIndex) => (
                                    <Stacks key={stackIndex}>{stack}</Stacks>
                                 ))}
                              </div>
                              <h3 className="mt-4 text-5xl text-background-dark dark:text-background-light">
                                 {project.title}
                              </h3>
                           </div>
                        ))}
                     </div>

                     <div className="landing-pin w-1/2 flex flex-col h-screen justify-center">
                        <div className="w-4/5 h-[40vw] relative flex justify-center">
                           {projects.map((project, index) => (
                              <div
                                 className="photo absolute w-full h-full"
                                 data-speed="1"
                                 style={{ zIndex: 10 - index }}
                                 onMouseEnter={(e) => {
                                    manageModal(
                                       true,
                                       index,
                                       e.clientX,
                                       e.clientY
                                    );
                                 }}
                                 onMouseLeave={(e) => {
                                    manageModal(
                                       false,
                                       index,
                                       e.clientX,
                                       e.clientY
                                    );
                                 }}
                                 key={index}
                              >
                                 <Link href={`/projects/${project.id}`}>
                                    <img
                                       src={project.img}
                                       alt=""
                                       className="object-cover w-full h-full rounded-lg cursor-pointer"
                                    />
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>

                     <motion.div
                        ref={cursor}
                        className="w-20 h-20 rounded-full bg-primary-light dark:bg-primary-dark fixed z-3 flex items-center justify-center pointer-events-none"
                        variants={scaleAnimation}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                     >
                        <p className="text-background-light dark:text-background-dark">
                           click
                        </p>
                     </motion.div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default LandingProjects;
