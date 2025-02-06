import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../anim";

export default function Index({ data, isActive, setSelectedIndicator }) {
   const { title, href, index } = data;
   const isPageActive = isActive; // Vérifie si la page est active

   const linkClass = `
      relative before:absolute  before:-bottom-2 sm:before:h-2 before:h-1 before:w-full before:bg-text-dark dark:before:bg-text-light before:transition-transform hover:cursor-pointer
      ${isPageActive ? "before:scale-x-100" : "before:scale-x-0"}
   `;

   return (
      <motion.div
         className="relative flex items-center dark:text-text-light text-text-dark bg-none"
         onMouseEnter={() => {
            setSelectedIndicator(href);
         }}
         custom={index}
         variants={slide}
         initial="initial"
         animate="enter"
         exit="exit"
      >
         {/* Utilisation de dangerouslySetInnerHTML pour injecter du HTML */}
         <Link href={href} className={linkClass}>
            <div dangerouslySetInnerHTML={{ __html: title }} />
         </Link>
      </motion.div>
   );
}
