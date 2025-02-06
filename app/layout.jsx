import "./global.scss";
import ServerNav from "./server-nav";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
   title: "Clément Omnès - Software Developer",
   description:
      "Découvrez le portfolio de Clément OMNÈS, étudiant en BUT Métiers du Multimédia et de l'Internet, " +
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
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}
