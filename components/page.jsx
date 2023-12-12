import Footer from "./footer";

export default function Page({ children }) {
   return (
      <>
         <main className="font-basic dark:bg-background-dark bg-background-light h-full">
            {children}
         </main>
         <Footer />
      </>
   );
}
