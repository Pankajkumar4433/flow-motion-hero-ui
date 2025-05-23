
import { HeroSection } from "@/components/ui/hero-section-1";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footerdemo />
    </div>
  );
};

export default Index;
