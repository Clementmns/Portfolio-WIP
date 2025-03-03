"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HoverEffect({ text, color, width, link }) {
   const [isDesktop, setIsDesktop] = useState(true);

   useEffect(() => {
      const checkDevice = () => {
         setIsDesktop(window.innerWidth >= 768);
      };
      checkDevice();
      window.addEventListener("resize", checkDevice);
      return () => {
         window.removeEventListener("resize", checkDevice);
      };
   }, []);

   return (
      <div className={`w-full max-w-${width} text-center opacity-100`}>
         {link ? (
            <a href={link}>
               <motion.div
                  className="relative cursor-pointer flex flex-col overflow-hidden h-20 portrait:h-auto z-0"
                  whileHover={isDesktop ? "hover" : ""}
               >
                  <div>{splitText(text, color, isDesktop)}</div>
                  {isDesktop && <div className="mt-1">{splitText(text, color, isDesktop)}</div>}
               </motion.div>
            </a>
         ) : (
            <motion.div
               className="relative cursor-pointer flex flex-col overflow-hidden h-20 portrait:h-auto z-0"
               whileHover={isDesktop ? "hover" : ""}
            >
               <div>{splitText(text, color, isDesktop)}</div>
               {isDesktop && <div className="mt-1">{splitText(text, color, isDesktop)}</div>}
            </motion.div>
         )}
      </div>
   );
}

function splitText(text, color, isDesktop) {
   return text.split("").map((char, index) => (
      <motion.span
         key={index}
         className={`inline-block ${isDesktop ? "text-7xl" : "text-3xl"} h-full leading-2 font-hero ${
            color == "inverse"
               ? "dark:text-background-dark text-background-light "
               : "dark:text-background-light text-background-dark"
         }`}
         variants={{
            hover: {
               y: -80,
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