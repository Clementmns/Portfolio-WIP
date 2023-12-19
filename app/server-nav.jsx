"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "./loader";

export const useLoadThemeAndLanguage = () => {
   // loadThemeAndLanguage.js
   const [isLoading, setIsLoading] = useState(true);
   const [isLoadingPage, setIsLoadingPage] = useState(true);

   useEffect(() => {
      // Simuler un chargement de contenu avec un délai de 2000ms (2 secondes)
      const simulateContentLoading = async () => {
         await new Promise((resolve) => setTimeout(resolve, 0));
         setIsLoadingPage(false);
      };

      // Lancer le chargement simulé du contenu après le délai initial (également 2 secondes)
      setTimeout(() => {
         setIsLoading(false);
         simulateContentLoading();
      }, 10);
   }, []);

   useEffect(() => {
      // Ecouteur d'évènement thème du navigateur
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         localStorage.setItem("theme", "dark");
         document.documentElement.classList.add("dark");
      }
   }, []);

   useEffect(() => {
      // Ecouteur d'évènement langue du navigateur
      const browserLanguage = navigator.language;
      if (browserLanguage === "fr") {
         localStorage.setItem("lang", "fr");
         document.documentElement.lang = "fr";
      } else {
         localStorage.setItem("lang", "en");
         document.documentElement.lang = "en";
      }
   }, []);

   return { isLoading, isLoadingPage };
};
console.log(
   "%c Dev by Clément Omnès — https://clementomnes.dev/",
   "background: #2D232E; color: #FF521C;"
);

function ServerNav({ children }) {
   const { isLoading, isLoadingPage } = useLoadThemeAndLanguage();

   return (
      <>
         <AnimatePresence wait className="bg-background-light dark:">
            <motion.div className="bg-background-light dark:bg-background-dark">
               <AnimatePresence wait key={"unique-key-for-parent"}>
                  {isLoading && <Loader key="loader" />}
               </AnimatePresence>
               {!isLoadingPage && (
                  <AnimatePresence
                     waitBeforeExit
                     key={"unique-key-for-another-parent"}
                  >
                     {children}
                  </AnimatePresence>
               )}
            </motion.div>
         </AnimatePresence>
      </>
   );
}

export default ServerNav;
