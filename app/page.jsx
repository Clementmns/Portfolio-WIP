import LandingDescription from "@/components/landingPage/Description";
import LandingExperiences from "@/components/landingPage/Experiences";
import LandingHeroBanner from "@/components/landingPage/Hero";
import LandingProjectsDesc from "@/components/landingPage/ProjectsOverview";
import Page from "@/components/page";

export default function Home() {
   return (
      <>
         <Page>
            <LandingHeroBanner />
            <LandingDescription />
            <LandingExperiences />
            <LandingProjectsDesc />
         </Page>
      </>
   );
}
