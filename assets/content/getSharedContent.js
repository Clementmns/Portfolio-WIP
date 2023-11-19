import shared from "./shared.json";

export default function getSharedContent(keys) {
   let value = shared;
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
