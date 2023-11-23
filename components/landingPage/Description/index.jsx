import React, { useLayoutEffect, useRef } from "react";
import getLandingContent from "@/assets/content/getLandingContent";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import Link from "next/link";
import HoverEffect from "@/components/buttonHover";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);

function LandingDescription() {
   const language = useLangChangeObserver();
   const desc = getLandingContent("heroBanner.desc.p");
   const descCTA = getLandingContent("heroBanner.desc.cta");
   const descRef = useRef();

   useLayoutEffect(() => {
      if (!descRef.current) return;

      const descElements = descRef.current.querySelectorAll(".word-wrapper");

      gsap.from(descElements, {
         opacity: 0,
         duration: 1,
         scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play play reverse reverse",
         },
         stagger: 0.5,
      });
   }, []);

   return (
      <div className="h-[70vh] flex justify-center items-center w-full mt-[20vh]">
         <div className="flex justify-center items-center flex-col h-full w-8/12 text-center">
            <div
               className="dark:text-background-light text-background-dark lg:text-6xl md:text-5xl sm:text-3xl text-2xl"
               ref={descRef}
            >
               {desc.split(" ").map((word, index) => (
                  <span
                     key={index}
                     className={
                        word == "interfaces" ||
                        word == "développeur" ||
                        word == "creative"
                           ? "word-wrapper font-hero dark:text-primary-dark text-primary-light relative"
                           : "word-wrapper"
                     }
                  >
                     {word}{" "}
                  </span>
               ))}
               <div className="flex justify-center">
                  <Link
                     href={"/about"}
                     className="relative top-20 flex justify-center w-[30vw]"
                  >
                     <HoverEffect text={descCTA} width={"30vw"} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LandingDescription;
