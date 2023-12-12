"use client";
import styles from "./style.module.scss";

import { useLayoutEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
   const [isActive, setIsActive] = useState(false);
   const pathname = usePathname();

   useLayoutEffect(() => {
      if (isActive) setIsActive(false);
   }, [pathname]);

   const handleClick = (e) => {
      e.preventDefault();
      window.location.href = "mailto:clement.mns.pro@gmail.com";
   };

   return (
      <nav>
         <div className="flex justify-end">
            <div className={styles.header}>
               <div className="flex justify-center gap-5 portrait:justify-between portrait:flex-row-reverse portrait:w-full">
                  <motion.div
                     whileHover={{ scale: 1.15 }}
                     onHoverStart={(e) => {}}
                     onHoverEnd={(e) => {}}
                     onClick={() => {
                        setIsActive(!isActive);
                     }}
                     className="w-12 h-12 rounded-full bg-background-dark dark:bg-background-light cursor-pointer flex items-center content-center hover:scale-110 transition-transform duration-300 !z-50"
                  >
                     <div
                        className={`${
                           styles.burger
                        } + before:bg-background-light before:dark:bg-background-dark after:bg-background-light after:dark:bg-background-dark z-50 ${
                           isActive ? styles.burgerActive : ""
                        }`}
                     ></div>
                  </motion.div>
                  <motion.div
                     whileHover={{ scale: 1.15 }}
                     onHoverStart={(e) => {}}
                     onHoverEnd={(e) => {}}
                     className="items-center flex duration-300"
                  >
                     <button
                        onClick={handleClick}
                        className={`bg-primary-light dark:bg-primary-dark w-40 h-12 rounded-full text-background-light dark:!text-background-dark text-xl duration-300 delay-500 ${
                           isActive
                              ? "!bg-background-light dark:!bg-background-dark dark:!text-background-light !text-background-dark !delay-100 "
                              : ""
                        }`}
                     >
                        contact
                     </button>
                  </motion.div>
               </div>
            </div>
         </div>
         <AnimatePresence waitBeforeExit key={"4"}>
            {isActive && <Nav />}
         </AnimatePresence>
      </nav>
   );
}
