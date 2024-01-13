"use client";
import Page from "@/components/page";
import React from "react";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import getPlaybookContent from "@/assets/content/getPlaybookContent";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

function Playbook() {
   gsap.registerPlugin(ScrollTrigger);
   const language = useLangChangeObserver();
   const sub = getPlaybookContent("desc");
   const [isPortrait, setIsPortrait] = useState(
      window.matchMedia("(orientation: portrait)").matches
   );

   const initialImageLinks = [
      "/playbookThumbnails/typo.mov",
      "/playbookThumbnails/svg.mov",
      "/playbookThumbnails/affiche.png",
      "/playbookThumbnails/gambett.mov",
      "/playbookThumbnails/site.mov",
      "/playbookThumbnails/ciklab.mov",
   ];

   const parallaxRefPlaybook = useRef();
   useEffect(() => {
      const startParallax = parallaxRefPlaybook.current.querySelectorAll(
         ".startParallaxPlaybook"
      );

      let ctx = gsap.context(() => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: startParallax,
               start: "top top",
               end: "bottom top",
               scrub: true,
            },
         });

         gsap.utils.toArray(".layer").forEach((layer) => {
            const speed = layer.dataset.speed;
            const movement = -(layer.offsetHeight * speed);
            tl.to(layer, { y: movement, ease: "none" }, 0);
         });
      });

      return () => ctx.revert();
   }, [isPortrait]);

   return (
      <>
         <Page>
            <div>
               <div className="text-background-dark dark:text-background-light flex items-center justify-center h-[50vh]">
                  <div className=" w-8/12">
                     <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-right portrait:text-center font-hero text-primary-light dark:text-primary-dark">
                        Playbook
                     </h1>
                     <p className="lg:text-xl md:text-lg sm:text-base text-md text-right mt-5 portrait:text-center">
                        {sub}
                     </p>
                  </div>
               </div>
               <div
                  ref={parallaxRefPlaybook}
                  className="justify-center flex startParallaxPlaybook mb-96"
               >
                  <div className="w-10/12 sm:portrait:w-6/12 flex flex-col gap-[30rem] portrait:block portrait:gap-0">
                     <div className="row1 flex justify-between items-end portrait:block">
                        <div>
                           <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="mt-20 lg:h-[60vh] lg:w-[60vh] md:h-[50vh] md:w-[40vh] portrait:h-[40vh] portrait:w-full"
                           >
                              <source src={initialImageLinks[0]} />
                           </video>
                        </div>
                        <div
                           className="layer"
                           data-speed={`${isPortrait ? "0" : "0.8"}`}
                        >
                           <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="mt-20 lg:h-[40vh] lg:w-[40vh] md:h-[30vh] md:w-[30vh] portrait:h-[40vh] portrait:w-full object-cover"
                              src={initialImageLinks[1]}
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="row2 flex justify-center items-end portrait:block">
                        <div>
                           <img
                              className="mt-20 lg:h-[90vh] lg:w-[60vh] md:h-[50vh] md:w-[50vh] portrait:h-[40vh] portrait:w-full object-cover"
                              src={initialImageLinks[2]}
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="row3 flex justify-between items-center portrait:block">
                        <div
                           data-speed={`${isPortrait ? "0" : "0.8"}`}
                           className="layer"
                        >
                           <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="mt-20 lg:h-[35vh] lg:w-[35vh] md:h-[25vh] md:w-[25vh] portrait:h-[40vh] portrait:w-full object-cover"
                              src={initialImageLinks[3]}
                              alt=""
                           />
                        </div>
                        <div
                           data-speed={`${isPortrait ? "0" : "1.3"}`}
                           className="layer"
                        >
                           <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="mt-20 lg:h-[35vh] lg:w-[35vh] md:h-[25vh] md:w-[25vh] portrait:h-[40vh] portrait:w-full object-cover"
                              src={initialImageLinks[4]}
                              alt=""
                           />
                        </div>
                        <div>
                           <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="mt-20 lg:h-[35vh] lg:w-[50vh] md:h-[25vh] md:w-[30vh] portrait:h-[40vh] portrait:w-full object-cover"
                              src={initialImageLinks[5]}
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Page>
      </>
   );
}

export default Playbook;
