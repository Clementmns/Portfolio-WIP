import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "./loader";
import "./global.scss";
import Lenis from "@studio-freight/lenis";
import Script from "next/script";

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
      }, 2000);

      const lenis = new Lenis({
         duration: 1.1,
         easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
         direction: "vertical",
         gestureDirection: "vertical",
         smooth: true,
         smoothTouch: false,
         touchMultiplier: 2,
      });

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
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

const App = ({ Component, pageProps }) => {
   const router = useRouter();
   const { isLoading, isLoadingPage } = useLoadThemeAndLanguage();

   return (
      <>
         <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-6M8P005GRZ"
         ></Script>
         <Script id="google-analytics" strategy="afterInteractive">
            {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-6M8P005GRZ');
            `}
         </Script>
         <AnimatePresence mode="wait">
            <motion.div className="bg-background-light dark:bg-background-dark">
               <AnimatePresence wait>
                  {isLoading && <Loader key="loader" />}
               </AnimatePresence>
               {!isLoadingPage && (
                  <AnimatePresence waitBeforeExit>
                     <motion.div
                        className="slide-in"
                        key="slide-in"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                     ></motion.div>
                     <Component {...pageProps} />
                     // TODO: Changer transition entre les pages avec CURVE
                     <motion.div
                        className="slide-out"
                        key="slide-out"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                     ></motion.div>
                  </AnimatePresence>
               )}
            </motion.div>
         </AnimatePresence>
      </>
   );
};

export default App;
