"use client";
import Page from "@/components/page";
import React from "react";
import getPlaybookContent from "@/assets/content/getPlaybookContent";
import LandingProjects from "@/components/landingPage/Projects";

function Playbook() {
   const sub = getPlaybookContent("desc");

   return (
      <>
         <Page>
            <div>
               <div className="text-background-dark dark:text-background-light flex items-end justify-center h-[20vh]">
                  <div className=" w-8/12">
                     <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-right portrait:text-center font-hero text-primary-light dark:text-primary-dark">
                        Projects
                     </h1>
                     <p className="lg:text-xl md:text-lg sm:text-base text-md text-right mt-5 portrait:text-center">
                        {sub}
                     </p>
                  </div>
               </div>
               <LandingProjects/>
            </div>
         </Page>
      </>
   );
}

export default Playbook;
