import playbook from "./playbook.json";

export default function getPlaybookContent(keys) {
   let value = playbook;
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
