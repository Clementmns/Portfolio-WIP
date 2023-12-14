"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import row1 from "./data/row1.json";
import row2 from "./data/row2.json";
import row3 from "./data/row3.json";
import { RiArrowDropDownLine } from "react-icons/ri";
import useLangChangeObserver from "@/assets/scripts/langChangeObserver";

function MoreAbout(props) {
   const language = useLangChangeObserver();
   let value = props.value;
   if (value === "webdev") {
      value = JSON.parse(JSON.stringify(row1));
   }
   if (value === "design") {
      value = JSON.parse(JSON.stringify(row2));
   }
   if (value === "skills") {
      value = JSON.parse(JSON.stringify(row3));
   }

   const [showInfo, setShowInfo] = useState(false);

   let rows = value[language].values;

   const toggleInfo = () => {
      setShowInfo(!showInfo);
   };

   return (
      <div className="w-full dark:text-text-dark text-text-light mt-20 mb-20">
         <motion.div
            className="flex items-center justify-between hover:scale-105 hover:cursor-pointer transition-all"
            onClick={toggleInfo}
         >
            <h3 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
               {value[language].title}
            </h3>
            <RiArrowDropDownLine className="h-24 w-24" />
         </motion.div>
         <motion.div
            className="flex justify-between w-full overflow-hidden max-h-10 portrait:flex-col portrait:items-center"
            animate={{ maxHeight: showInfo ? "45rem" : "2.5rem" }}
            transition={{ duration: 0.3 }}
         >
            {Object.keys(rows).map((key) => (
               <div
                  key={key}
                  className="portrait:mt-5 portrait:mb-5  mb-14 w-1/4 portrait:w-full"
               >
                  <h4 className="font-hero uppercase lg:text-4xl md:text-4xl sm:text-4xl text-4xl dark:text-primary-dark text-primary-light mt-10 text-center w-full">
                     {key}
                  </h4>
                  {rows[key].map((val, index) => (
                     <p
                        key={index}
                        className="text-center lg:text-3xl md:text-2xl text-xl"
                     >
                        {val}
                     </p>
                  ))}
               </div>
            ))}
         </motion.div>
      </div>
   );
}

export default MoreAbout;
