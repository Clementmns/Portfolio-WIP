import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Page from "@/components/page";

export default function ProjectDetail() {
   const router = useRouter();

   useEffect(() => {
      // Récupérer l'ID passé dans l'URL
      const { id } = router.query;
   }, [router.query]);

   const id = router.query.id;

   return (
      <Page>
         <div className="flex items-center flex-col w-full">
            <div className=" w-11/12">
               <div className="flex flex-col justify-around items-center mt-[15vh]">
                  <div>
                     <h1 className="text-primary-light dark:text-primary-dark text-[11.79vw] font-hero">
                        Masques Éphèmeres
                     </h1>
                  </div>
                  <div className="w-full h-full">
                     <img
                        className="w-full h-[90vh] object-cover rounded-lg"
                        src="/me.jpg"
                        alt=""
                     />
                  </div>
               </div>
               <div className="flex justify-around text-3xl m-32 dark:text-background-light text-background-dark">
                  <div className="flex flex-col gap-20">
                     <div>
                        <h3>Year</h3>
                        <p>2023</p>
                     </div>
                     <div>
                        <h3>Role</h3>
                        <p>Creative Developer</p>
                        <p>Designer</p>
                        <p>Analyst</p>
                     </div>
                     <div>
                        <h3>Technologies</h3>
                        <p>React.JS</p>
                        <p>Next.JS</p>
                        <p>SCSS</p>
                        <p>Tailwind CSS</p>
                        <p>Prisma</p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-20 w-2/3">
                     <div>
                        <h3>Presentation</h3>
                        <p>
                           Photography personal project that reflect my
                           personality inside those pictures. The goal is to
                           …Photography personal project that reflect my
                           personality inside those pictures. The goal is to
                           …Photography personal project that reflect my
                           personality inside those pictures. The goal is to
                           …Photography personal project that reflect my
                           personality inside those pictures. The goal is to
                           …Photography personal project that reflect my.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Page>
   );
}
