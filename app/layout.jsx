import "./global.scss";
import ServerNav from "./server-nav";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
   title: "Clément Omnès - Développeur Web",
   description:
      "Découvrez le portfolio de Clément Omnès, étudiant passionné en développement web, marketing digital et graphisme. Explorez ses réalisations et compétences dans ces domaines !",
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
