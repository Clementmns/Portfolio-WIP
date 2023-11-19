import React, { useEffect } from "react";

function LangSelection() {
   // Prendre en charge le changement -> EN
   const handleLangEn = () => {
      const newLang = "en";
      localStorage.setItem("lang", newLang);
      document.documentElement.lang = "en";
   };

   // Prendre en charge le changement -> FR
   const handleLangFr = () => {
      const newLang = "fr";
      localStorage.setItem("lang", newLang);
      document.documentElement.lang = "fr";
   };

   // Changer la langue
   useEffect(() => {
      const currentLang = localStorage.getItem("lang");
      document.documentElement.lang = currentLang;
   }, []);

   return (
      <div className="absolute bottom-10 right-10 flex justify-between w-20">
         <p
            className="cursor-pointer hover:scale-110 transition-all text-background-light"
            onClick={handleLangFr}
         >
            FR
         </p>
         <p
            className="cursor-pointer hover:scale-110 transition-all text-background-light"
            onClick={handleLangEn}
         >
            EN
         </p>
      </div>
   );
}

export default LangSelection;
