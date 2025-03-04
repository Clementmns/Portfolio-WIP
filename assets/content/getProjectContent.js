import project from "./project.json";

export default function getAboutContent(keys) {
   let value = project;
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
