import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "Услуги",
  description:
    "Подбор оборудования, технические консультации, проектные поставки, инженерное сопровождение, гарантийная и постгарантийная поддержка.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Услуги"
        description="Полный спектр услуг по подбору, поставке и техническому сопровождению оборудования"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Услуги" }]} />
      </div>
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Наши услуги"
            description="Комплексное сопровождение от анализа ТЗ до ввода в эксплуатацию"
            centered
          />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <Section className="bg-surface-muted">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-display text-3xl">Нужна консультация?</h2>
            <p className="mt-5 text-graphite-light">
              Наши инженерно-технические специалисты готовы оказать поддержку на всех этапах проекта.
            </p>
            <Button href="/contacts" className="mt-8" icon>
              Связаться с нами
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
