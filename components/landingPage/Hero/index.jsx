"use client";
import React, { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";

function LandingHeroBanner() {
   gsap.registerPlugin(ScrollTrigger);

   const parallaxRef = useRef();
   useEffect(() => {
      const startParallax =
         parallaxRef.current.querySelectorAll(".startParallax");

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
   }, []);

   return (
      <div
         className="startParallax flex flex-col justify-between items-center h-auto"
         ref={parallaxRef}
      >
         <div className="layer relative top-[15vh] z-[6]" data-speed="0.2">
            <h1 className="hidden">Clément Omnès - Développeur Front-End</h1>
            <h2 className="dark:text-background-light text-background-dark text-center lg:text-hero leading-none md:text-9xl sm:text-8xl text-6xl">
               <span className="font-hero text-primary-light dark:text-primary-dark leading-none ">
                  work
               </span>
               <br />
               on details
            </h2>
         </div>
         <div
            className="layer w-[50vw] h-[100vh] mt-28 portrait:w-[95vw] portrait:h-[80vh]"
            data-speed="1"
         >
            <img
               src="/me.webp"
               alt=""
               className="w-full h-full object-cover rounded-lg"
            />
         </div>
      </div>
   );
}

export default LandingHeroBanner;
