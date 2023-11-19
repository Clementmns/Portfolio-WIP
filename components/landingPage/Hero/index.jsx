import React from "react";
import getLandingContent from "@/assets/content/getLandingContent";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";

function LandingHeroBanner() {
   const language = useLangChangeObserver();

   return (
      <div className="h-screen flex flex-col justify-between">
         <div className="relative top-[15vh]">
            <h1 className="dark:text-background-light text-background-dark text-center lg:text-hero leading-none md:text-9xl sm:text-8xl text-6xl">
               <span className="font-hero text-primary-light dark:text-primary-dark leading-none ">
                  work
               </span>
               <br />
               on details
            </h1>
         </div>
         <div>
            <p className="dark:text-background-light text-background-dark text-center">
               {getLandingContent("heroBanner.scroll")}
            </p>
         </div>
      </div>
   );
}

export default LandingHeroBanner;
