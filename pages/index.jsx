import LandingDescription from "@/components/landingPage/Description";
import LandingHeroBanner from "@/components/landingPage/Hero";
import LandingProjects from "@/components/landingPage/Projects";
import Page from "@/components/page";

export default function Home() {
   return (
      <Page>
         <LandingHeroBanner />
         <LandingDescription />
         <LandingProjects />
      </Page>
   );
}
