import React from "react";

function Stacks({ children }) {
   return (
      <div>
         <p className="text-primary-light dark:text-primary-dark rounded-2xl dark:border-primary-dark border-primary-light border-2 pr-2 pl-2">
            {children}
         </p>
      </div>
   );
}

export default Stacks;
