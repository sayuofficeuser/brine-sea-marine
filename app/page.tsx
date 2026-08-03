import PageShell from "@/components/PageShell";
import HeroSlider from "@/components/HeroSlider";
import StatsBand from "@/components/StatsBand";
import WelcomeSection from "@/components/WelcomeSection";
import ExploreGrid from "@/components/ExploreGrid";
import ImageShowcase from "@/components/ImageShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortsWeServe from "@/components/PortsWeServe";
import EmergencyCTA from "@/components/EmergencyCTA";

export default function Home() {
  return (
    <PageShell>
      <HeroSlider />
      <StatsBand />
      <WelcomeSection />
      <ExploreGrid />
      <ImageShowcase />
      <ServicesGrid />
      <WhyChooseUs />
      <PortsWeServe />
      <EmergencyCTA />
    </PageShell>
  );
}