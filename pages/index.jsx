import LandingDescription from "@/components/landingPage/Description";
import LandingHeroBanner from "@/components/landingPage/Hero";
import LandingProjects from "@/components/landingPage/Projects";
import Page from "@/components/page";
// import { SmoothScrollProvider } from "@/components/scroll";

export default function Home() {
   return (
      <Page>
         <LandingHeroBanner />
         <LandingDescription />
         <LandingProjects />
      </Page>
   );
}
