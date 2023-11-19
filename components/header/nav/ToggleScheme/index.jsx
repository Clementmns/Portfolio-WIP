import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiMoonFill } from "react-icons/pi";
import { PiSunFill } from "react-icons/pi";

function ToggleScheme() {
   const [theme, setTheme] = useState(localStorage.getItem("theme"));
   const [isOn, setIsOn] = useState(theme === "dark");

   const spring = {
      type: "spring",
      stiffness: 700,
      damping: 30,
   };

   const handleThemeSwitch = () => {
      const newTheme = theme === "dark" ? "" : "dark";
      setTheme(newTheme);
      setIsOn(newTheme === "dark");
      localStorage.setItem("theme", newTheme);
   };

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <div
         className="absolute bottom-10 left-10 w-20 h-12 bg-background-light dark:bg-background-dark flex justify-start data-[isOn='true']:justify-end rounded-full p-1 cursor-pointer"
         data-ison={isOn}
         onClick={handleThemeSwitch}
      >
         <motion.div
            className="w-10 h-10 dark:bg-background-light bg-background-dark rounded-full flex justify-center items-center"
            layout
            transition={spring}
         >
            <div className="text-background-light dark:text-background-dark">
               {isOn ? (
                  <PiMoonFill className="w-5 h-5" />
               ) : (
                  <PiSunFill className="w-5 h-5" />
               )}
            </div>
         </motion.div>
      </div>
   );
}

export default ToggleScheme;
