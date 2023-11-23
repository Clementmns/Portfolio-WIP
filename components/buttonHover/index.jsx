"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HoverEffect({ text, color, width, link }) {
   return (
      <div className={`w-[${width}] text-center opacity-100`}>
         {link ? (
            <a href={link}>
               <motion.div
                  className="relative cursor-pointer flex flex-col overflow-hidden h-[5rem] portrait:h-[2.5rem] z-0"
                  whileHover="hover"
               >
                  <div>{splitText(text, color)}</div>
                  <div className="mt-1">{splitText(text, color)}</div>
               </motion.div>
            </a>
         ) : (
            <motion.div
               className="relative cursor-pointer flex flex-col overflow-hidden h-[5rem] portrait:h-[2.5rem] z-0"
               whileHover="hover"
            >
               <div>{splitText(text, color)}</div>
               <div className="mt-1">{splitText(text, color)}</div>
            </motion.div>
         )}
      </div>
   );
}

function splitText(text, color) {
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

   return text.split("").map((char, index) => (
      <motion.span
         key={index}
         className={`wordwrapper-footer inline-block text-7xl portrait:text-3xl h-full leading-2 font-hero ${
            color == "inverse"
               ? "dark:text-background-dark text-background-light "
               : "dark:text-background-light text-background-dark"
         }`}
         variants={{
            hover: {
               y: !isPortrait ? [0, -80] : [0, -40],
               opacity: 1,
               transition: {
                  delay: index * 0.03,
                  duration: 0.3,
               },
            },
         }}
      >
         {char === " " ? "\u00A0" : char}
      </motion.span>
   ));
}
