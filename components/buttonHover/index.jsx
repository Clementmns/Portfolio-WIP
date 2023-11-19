import { motion } from "framer-motion";

export default function HoverEffect({ text }) {
   return (
      <div className="w-70 text-center">
         <motion.div
            className="relative cursor-pointer flex flex-col overflow-hidden h-[5rem] z-0"
            whileHover="hover"
         >
            <div>{splitText(text)}</div>
            <div className="mt-1">{splitText(text)}</div>
         </motion.div>
      </div>
   );
}

function splitText(text) {
   return text.split("").map((char, index) => (
      <motion.span
         key={index}
         className="word-wrapper inline-block dark:text-background-light text-background-dark text-7xl font-hero h-full"
         variants={{
            hover: {
               y: [0, -80],
               transition: {
                  delay: index * 0.05,
                  duration: 0.3,
               },
            },
         }}
      >
         {char === " " ? "\u00A0" : char}
      </motion.span>
   ));
}
