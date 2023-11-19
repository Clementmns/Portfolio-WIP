// loadThemeAndLanguage.js
import { useEffect, useState } from "react";

export const useLoadThemeAndLanguage = () => {
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
      }, 2000);
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
