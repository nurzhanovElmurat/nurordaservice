import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { getIndustryImage } from "@/lib/images";
import { industries } from "@/data/industries";

export const metadata: Metadata = createMetadata({
  title: "Отрасли",
  description:
    "Поставки промышленного оборудования для нефтегазовой, энергетической, металлургической, химической отраслей и других секторов экономики.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Отрасли"
        description="Комплексные технические решения для предприятий энергетики, добывающей, химической и производственных отраслей"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Отрасли" }]} />
      </div>

      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Отрасли применения"
            description="Специализированные решения для каждого сектора промышленности"
            centered
          />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Card
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                image={getIndustryImage(industry.slug)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
