import "./global.scss";
import ServerNav from "./server-nav";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
   title: "Clément Omnès - Portfolio",
   description:
      "Bienvenue sur mon portfolio, il vous permettra de voir mes différents projets et compétences. Bonne visite !",
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
               <Footer />
            </ServerNav>
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}
