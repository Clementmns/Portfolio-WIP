"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "./loader";

export const useLoadThemeAndLanguage = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [isLoadingPage, setIsLoadingPage] = useState(true);

   useEffect(() => {
      // Simuler un chargement de contenu avec un délai de 2000ms (2 secondes)
      const simulateContentLoading = async () => {
         await new Promise((resolve) => setTimeout(resolve, 0));
         setIsLoadingPage(false);
      };

      // Lancer le chargement simulé du contenu après le délai initial
      setTimeout(() => {
         setIsLoading(false);
         simulateContentLoading();
      }, 0);
   }, []);

   useEffect(() => {
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
          <AnimatePresence>
             {isLoading && <Loader key="loader" />}
          </AnimatePresence>
          {!isLoadingPage && (
              <AnimatePresence>
                 {React.Children.map(children, (child, index) =>
                     React.cloneElement(child, { key: `child-${index}` })
                 )}
              </AnimatePresence>
          )}
       </>
   );
}

export default ServerNav;
