import Header from "./header";

export default function Page({ children }) {

   

   return (
      <>
         <Header />
         <main className="font-basic dark:bg-background-dark bg-background-light w-full h-full">
            {children}
         </main>
      </>
   );
}