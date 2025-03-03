import "./global.css";
import ServerNav from "./server-nav";
import Header from "@/components/header";

export const metadata = {
   title: "Clément Omnès - Software Developer",
   description:
      "Découvrez le portfolio de Clément OMNÈS, étudiant " +
      "spécialisé en développement logiciel et en marketing digital.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <head>
            <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         </head>
         <body className="w-full">
            <ServerNav>
               <Header />
               {children}
            </ServerNav>
         </body>
      </html>
   );
}
