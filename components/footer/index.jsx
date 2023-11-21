import React from "react";
import { RiArrowLeftDownLine } from "react-icons/ri";
import HoverEffect from "../buttonHover";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { motion } from "framer-motion";

function Footer() {
   const descRef = useRef();

   useEffect(() => {
      const descElements = descRef.current.querySelectorAll(".word-wrapper");
      const footerTitle = descRef.current.querySelectorAll(".footerTitle");

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%", // Vous pouvez ajuster cette valeur pour définir à quel point l'élément doit être visible pour déclencher l'animation
         },
      });

      tl.from(descElements, {
         opacity: 0,
         y: 30,
         duration: 0.2,
         stagger: 0.02,
         ease: "elastic",
      });
      tl.from(footerTitle, {
         opacity: 0,
         y: 50,
         duration: 0.5,
         ease: "power",
         stagger: 0.05,
      });
   }, []);

   return (
      <div
         ref={descRef}
         className="bg-primary-light dark:bg-primary-dark flex justify-between flex-col items-center gap-24"
      >
         <div className="flex justify-between w-11/12 mt-10">
            <h5 className=" footerTitle text-background-light dark:text-background-dark lg:text-7xl md:text-6xl sm:text-5xl text-2xl">
               Better together.
            </h5>
            <RiArrowLeftDownLine className="text-background-light dark:text-background-dark lg:text-7xl md:text-6xl sm:text-5xl text-2xl" />
         </div>
         <div className="flex flex-col justify-center items-center gap-14">
            <HoverEffect
               text="clement.mns.pro@gmail.com"
               color={"inverse"}
               width={"60vw"}
               link="mailto:clement.mns.pro@gmail.com"
            />
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
   );
}

export default Footer;
