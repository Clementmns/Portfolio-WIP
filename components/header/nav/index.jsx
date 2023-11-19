"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Links from "./Links";
import Curve from "./Curve";
import ToggleScheme from "./ToggleScheme";
import getSharedContent from "@/assets/content/getSharedContent";
import LangSelection from "./LangSelection";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";

export default function Index() {
   const navItems = [
      {
         title: getSharedContent("header.links.home.title"),
         href: "/",
      },
      {
         title: getSharedContent("header.links.playbook.title"),
         href: "/playbook",
      },
      {
         title: getSharedContent("header.links.about.title"),
         href: "/about",
      },
   ];

   const pathname = usePathname();
   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

   // Script pour écouter le changement de langue pour mettre à jour le composant
   const language = useLangChangeObserver();

   return (
      <motion.div
         variants={menuSlide}
         initial="initial"
         animate="enter"
         exit="exit"
         className="h-screen bg-primary-light dark:bg-primary-dark fixed right-0 top-0 dark:text-text-dark text-text-light w-screen z-10"
      >
         <div className="h-full p-24 flex flex-col justify-center align-center">
            <div
               onMouseLeave={() => {
                  setSelectedIndicator(pathname);
               }}
               className="flex flex-col justify-center sm:text-8xl text-4xl lg:text-9xl items-center"
            >
               {navItems.map((data, index) => {
                  return (
                     <Links
                        key={index}
                        data={{ ...data, index }}
                        isActive={selectedIndicator === data.href}
                        setSelectedIndicator={setSelectedIndicator}
                        className="no-underline text-text-light dark:text-text-dark font-300"
                     ></Links>
                  );
               })}
            </div>
         </div>
         <Curve />
         <ToggleScheme />
         <LangSelection />
      </motion.div>
   );
}
