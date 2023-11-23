import Page from "@/components/page";
import { SmoothScrollProvider } from "@/components/scroll";

export default function Home() {
   return (
      <Page>
         <SmoothScrollProvider options={{ smooth: true }}>
            <div>ABOUT</div>
         </SmoothScrollProvider>
      </Page>
   );
}
