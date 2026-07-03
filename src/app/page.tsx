import {
  Hero,
  AboutPreview,
  AdvantagesGrid,
  DirectionsPreview,
  WhyChooseUs,
  StatsSection,
  CTASection,
} from "@/components/home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AdvantagesGrid />
      <DirectionsPreview />
      <WhyChooseUs />
      <StatsSection />
      <CTASection />
    </>
  );
}
