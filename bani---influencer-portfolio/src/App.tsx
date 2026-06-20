import { BackgroundGlow } from "./components/BackgroundGlow";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BrandsMarquee } from "./components/BrandsMarquee";
import { About } from "./components/About";
import { SocialStats } from "./components/SocialStats";
import { ReelsGallery } from "./components/ReelsGallery";
import { Collaborations } from "./components/Collaborations";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="min-h-screen relative selection:bg-pink-500/30 selection:text-white">
      <LoadingScreen />
      <WhatsAppButton />
      <BackgroundGlow />
      <Navigation />
      
      <div className="flex flex-col">
        <Hero />
        <BrandsMarquee />
        <About />
        <SocialStats />
        <ReelsGallery />
        <Collaborations />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

