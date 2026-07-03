import type { Metadata } from "next";
import { Check } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { advantages } from "@/data/services";
import { whyChooseUs } from "@/data/company";

export const metadata: Metadata = createMetadata({
  title: "Преимущества",
  description:
    "Комплексные поставки, индивидуальный подбор, международная логистика, инженерное сопровождение и гарантийная поддержка.",
  path: "/advantages",
});

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        title="Преимущества"
        description="Комплексный подход к реализации инженерных проектов любой сложности"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Преимущества" }]} />
      </div>
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Ключевые преимущества"
            description="Решения, ориентированные на длительную эксплуатацию и минимальные затраты"
            centered
          />
        </AnimatedSection>
        <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <StaggerItem key={item}>
              <div className="card-corporate flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-glow">
                  <Check size={22} aria-hidden="true" />
                </div>
                <span className="text-lg font-semibold text-navy">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <Section dark>
        <AnimatedSection>
          <SectionHeader label="Почему мы" title="Почему выбирают нас" light centered />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10">
                <h2 className="mb-4 text-xl font-bold text-white">{item.title}</h2>
                <p className="leading-relaxed text-white/70">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <Section>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-display text-3xl">Начните сотрудничество</h2>
            <p className="mt-5 text-graphite-light">
              Свяжитесь с нами для получения индивидуального коммерческого предложения.
            </p>
            <Button href="/contacts" size="lg" className="mt-8" icon>
              Получить консультацию
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
