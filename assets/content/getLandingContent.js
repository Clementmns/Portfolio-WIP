import landingPage from "./landingPage.json";

export default function getLandingContent(keys) {
   let value = landingPage;
   let language = localStorage.getItem("lang");

   for (const key of keys.split(".")) {
      if (value[key]) {
         value = value[key];
      } else {
         return "Traduction non disponible";
      }
   }

   return value[language] || "Traduction non disponible";
}
