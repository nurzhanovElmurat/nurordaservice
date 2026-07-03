import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { directions, getDirectionHref } from "@/data/directions";

export const metadata: Metadata = createMetadata({
  title: "Направления деятельности",
  description:
    "Промышленное и лабораторное оборудование, КИПиА, автоматизация, насосы, арматура и комплексные инженерные поставки.",
  path: "/directions",
});

export default function DirectionsPage() {
  return (
    <>
      <PageHero
        title="Направления деятельности"
        description="Комплексные поставки оборудования, инженерные решения и техническое сопровождение"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Направления деятельности" }]} />
      </div>
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Наши направления"
            description="Широкий спектр промышленного оборудования и инженерных решений"
            centered
          />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((dir) => (
            <StaggerItem key={dir.slug}>
              <Card
                title={dir.title}
                description={dir.description}
                icon={dir.icon}
                href={getDirectionHref(dir)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
