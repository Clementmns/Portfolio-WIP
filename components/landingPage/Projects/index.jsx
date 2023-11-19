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

   let xMoveCursor = useRef(null);
   let yMoveCursor = useRef(null);

   useEffect(() => {
      const triggerAnimation =
         projectRef.current.querySelectorAll(".landing-trigger");

      const pinAnimation = projectRef.current.querySelectorAll(".landing-pin");
      let ctx = gsap.context(() => {
         gsap.set(".photo:not(:first-child)", { scale: 0 });
         const animation = gsap.to(".photo:not(:first-child)", {
            scale: 1,
            duration: 1,
            stagger: 1,
         });
         ScrollTrigger.create({
            trigger: triggerAnimation,
            start: "top top",
            end: "bottom bottom",
            pin: pinAnimation,
            animation: animation,
            scrub: true,
         });
      });
      return () => ctx.revert();
   }, []);

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
   }, []);

   const moveItems = (x, y) => {
      xMoveCursor.current(x);
      yMoveCursor.current(y);
   };

   const scaleAnimation = {
      initial: { scale: 0, x: "-50%", y: "-50%" },
      enter: {
         scale: 1,
         x: "-50%",
         y: "-50%",
         transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
         scale: 0,
         x: "-50%",
         y: "-50%",
         transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
      },
   };

   const manageModal = (active, index, x, y) => {
      moveItems(x, y);
      setModal({ active, index });
   };

   // TODO: Comprendre comment faire une page projet perso
   const projects = [
      {
         title: "AppTrackr",
         stacks: ["PHP", "MYSQL"],
         img: "/projectsThumbnails/download.jpeg",
         href: "/projects/apptrackr",
      },
      {
         title: "Portfolio 2024",
         stacks: ["Next.JS", "React.JS", "GSAP", "SCSS"],
         img: "/projectsThumbnails/download.jpeg",
         href: "/projects/portfolio-2024",
      },
   ];

   return (
      <div
         ref={projectRef}
         className="w-full"
         onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
         }}
      >
         <main className="flex w-full justify-center">
            <div className="landing-trigger flex">
               <div className="w-1/2 ml-auto">
                  {/* Détails de chaque projet */}
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="text-white text-3xl h-screen flex flex-col justify-center w-[40vw] ml-auto"
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
                  <div className="w-[30vw] h-[45vw] relative">
                     {projects.map((project, index) => (
                        <div
                           className="photo absolute w-full h-full "
                           onMouseEnter={(e) => {
                              manageModal(true, index, e.clientX, e.clientY);
                           }}
                           onMouseLeave={(e) => {
                              manageModal(false, index, e.clientX, e.clientY);
                           }}
                           key={index}
                        >
                           <Link href={project.href}>
                              <img
                                 src={project.img}
                                 alt=""
                                 className="object-cover w-full h-full rounded-md"
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
               ></motion.div>
            </div>
         </main>
      </div>
   );
}

export default LandingProjects;
