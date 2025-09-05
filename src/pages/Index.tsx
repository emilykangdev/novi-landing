import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WhyNoviSection } from "@/components/WhyNoviSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="why">
        <WhyNoviSection />
      </div>
      <div id="team">
        <CallToActionSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
