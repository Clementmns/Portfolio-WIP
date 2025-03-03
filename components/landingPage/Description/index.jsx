"use client";
import React, { useEffect, useRef } from "react";
import getLandingContent from "@/assets/content/getLandingContent";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import Link from "next/link";
import HoverEffect from "@/components/buttonHover";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";

gsap.registerPlugin(ScrollTrigger);

function LandingDescription() {
   gsap.registerPlugin(ScrollTrigger);

   const language = useLangChangeObserver();
   const desc = getLandingContent("heroBanner.desc.p");
   const descCTA = getLandingContent("heroBanner.desc.cta");

   useEffect(() => {
      let ctx = gsap.context(() => {
         gsap.from(".word-wrapper-desc", {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               trigger: ".startMaskWord",
               start: "top 80%",
               end: "bottom 60%",
               toggleActions: "play play reverse reverse",
               scrub: true,
            },
            stagger: 0.5,
         });
      });

      return () => ctx.revert();
   }, []);

   return (
      <div className="h-[70vh] flex justify-center items-center w-full mt-0 portrait:mt-[20vw]">
         <div className="flex justify-center items-center flex-col h-full w-8/12 text-center">
            <div className="startMaskWord dark:text-background-light text-background-dark lg:text-6xl md:text-5xl sm:text-3xl text-2xl ">
               <h2>
                  {desc.split(" ").map((word, index) =>
                     word === "interfaces" ||
                     word === "développeur" ||
                     word === "creative" ? (
                        <strong
                           key={index}
                           className="word-wrapper-desc opacity-1 font-hero dark:text-primary-dark text-primary-light relative"
                        >
                           {word}{" "}
                        </strong>
                     ) : (
                        <span
                           key={index}
                           className="word-wrapper-desc opacity-1"
                        >
                           {word}{" "}
                        </span>
                     )
                  )}
               </h2>
               <div className="flex justify-center">
                  <Link
                     href={"/about"}
                     className="relative top-20 flex justify-center w-[30vw]"
                  >
                     <HoverEffect
                        text={descCTA}
                        width={"30vw"}
                        class2={"qsd"}
                     />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LandingDescription;
