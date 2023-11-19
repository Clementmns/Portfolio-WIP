import { useEffect, useState } from "react";

const useLangChangeObserver = () => {
   const [language, setLanguage] = useState(document.documentElement.lang);

   useEffect(() => {
      const handleLangChange = () => {
         setLanguage(document.documentElement.lang);
      };

      const observer = new MutationObserver(handleLangChange);
      observer.observe(document.documentElement, {
         attributes: true,
         attributeFilter: ["lang"],
      });

      return () => {
         observer.disconnect();
      };
   }, []);

   return language;
};

export default useLangChangeObserver;
