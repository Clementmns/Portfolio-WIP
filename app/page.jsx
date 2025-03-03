import LandingDescription from "@/components/landingPage/Description";
import LandingExperiences from "@/components/landingPage/Experiences";
import LandingHeroBanner from "@/components/landingPage/Hero";
import Page from "@/components/page";

export default function Home() {
   return (
      <>
         <Page>
            <LandingHeroBanner />
            <LandingDescription />
            <LandingExperiences />
         </Page>
      </>
   );
}
