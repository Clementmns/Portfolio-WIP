"use client";
import Page from "@/components/page";
import React from "react";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";
import getAboutContent from "@/assets/content/getAboutContent";
import MoreAbout from "@/components/aboutPage/more/more-about";

function AboutPage() {
   const language = useLangChangeObserver();
   const cv = getAboutContent("hero.cv.text");
   const cvLink = getAboutContent("hero.cv.download");
   const desc1 = getAboutContent("hero.desc.1");
   const desc2 = getAboutContent("hero.desc.2");
   const desc3 = getAboutContent("hero.desc.3");
   const desc4 = getAboutContent("hero.desc.4");
   const desc5 = getAboutContent("hero.desc.5");

   const detectImportantWords = (description) => {
      const importantWordsRegex = /\*\$([^,\s]+)/g;
      return description.split(importantWordsRegex).map((part, index) => {
         if (index % 2 === 1) {
            // Les mots importants correspondent aux index impairs
            return (
               <span
                  key={index}
                  className="font-hero text-primary-light dark:text-primary-dark"
               >
                  {part}
               </span>
            );
         }
         return part;
      });
   };

   return (
      <>
         <Page>
            <div className="flex flex-col items-center dark:text-text-dark text-text-light">
               <div className="flex items-center flex-col">
                  <div className="flex justify-between h-screen items-center w-10/12 portrait:flex-col portrait:item-center portrait:justify-center">
                     <div>
                        <div>
                           <a href={cvLink} download={cvLink}>
                              <p className="hover:scale-110 transition-all p-5 portrait:hidden">
                                 {cv}
                              </p>
                           </a>
                        </div>
                        <div>
                           <h1 className="portrait:relative absolute lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-hero text-primary-light dark:text-primary-dark">
                              Clément Omnès
                           </h1>
                        </div>
                     </div>
                     <div className="w-[40vw] h-[55vw] portrait:w-[90vw] portrait:h-[100vw] md:portrait:w-[70vw] md:portrait:h-[70vw] flex justify-end">
                        <img
                           src="/about.jpg"
                           alt=""
                           className="w-full h-full object-cover rounded-lg"
                        />
                     </div>
                     <div className="hidden portrait:block">
                        <a href="" download={cvLink}>
                           <p className="hover:scale-110 transition-all p-5 hidden portrait:block">
                              {cv}
                           </p>
                        </a>
                     </div>
                  </div>
                  <div className="w-8/12 portrait:w-10/12 lg:text-3xl md:text-2xl text-xl mb-36 mt-[15rem] portrait:mt-10">
                     <p>{detectImportantWords(desc1)}</p>
                     <br></br>
                     <br></br>
                     <p>{detectImportantWords(desc2)}</p>
                     <br></br>
                     <br></br>
                     <p>{detectImportantWords(desc3)}</p>
                     <br></br>
                     <br></br>
                     <p>{detectImportantWords(desc4)}</p>
                     <br></br>
                     <br></br>
                     <p>{detectImportantWords(desc5)}</p>
                  </div>
               </div>
               <div className="flex gap-10 items-end justify-center w-full mb-20 mt-40">
                  <div className="w-11/12 justify-start">
                     <h4 className="text-background-dark dark:text-background-light lg:text-9xl md:text-7xl sm:text-5xl text-3xl">
                        S
                        <span className="font-hero text-primary-light dark:text-primary-dark">
                           k
                        </span>
                        ills.
                     </h4>
                  </div>
               </div>
               <div className="w-8/12 portrait:w-10/12 flex justify-center mb-40">
                  <div className="w-full">
                     <MoreAbout value="webdev" />
                     <MoreAbout value="design" />
                     <MoreAbout value="skills" />
                  </div>
               </div>
            </div>
         </Page>
      </>
   );
}

export default AboutPage;
