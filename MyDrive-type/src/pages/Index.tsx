import { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import SiteFooter from "../components/SiteFooter";
import ChoiceSection from "../components/ChoiceSection";
import UploadSection from "../components/UploadSection";
import AccessSection from "../components/AccessSection";

type Screen = "landing" | "actions" | "upload" | "access";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");

  const handleTransition = (newScreen: Screen) => {
    setScreen(newScreen);
  };

  const handleGetStarted = () => {
    handleTransition("actions");
  };

  const handleChoice = (choice: "upload" | "access") => {
    handleTransition(choice);
  };

  const handleBack = () => {
    handleTransition("landing");
  };

  return (
    <main className="min-h-screen">
      {screen === "landing" && (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <FeatureCards />
          <SiteFooter />
        </>
      )}

      {screen === "actions" && (
        <section className="min-h-screen w-full flex items-center justify-center">
          <ChoiceSection onChoice={handleChoice} />
        </section>
      )}

      {screen === "upload" && <UploadSection onBack={handleBack} />}

      {screen === "access" && <AccessSection onBack={handleBack} />}
    </main>
  );
};

export default Index;
