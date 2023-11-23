import LandingDescription from "@/components/landingPage/Description";
import LandingHeroBanner from "@/components/landingPage/Hero";
import LandingProjects from "@/components/landingPage/Projects";
import Page from "@/components/page";
// import { SmoothScrollProvider } from "@/components/scroll";
import Head from "next/head";

export default function Home() {
   return (
      <>
         <Head>
            <title>C.O - Portfolio</title>
            <link rel="shortcut icon" href="/fav.ico" type="image/x-icon" />
         </Head>
         <Page>
            <LandingHeroBanner />
            <LandingDescription />
            <LandingProjects />
         </Page>
      </>
   );
}
