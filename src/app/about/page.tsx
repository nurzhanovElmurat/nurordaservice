import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { images } from "@/lib/images";
import { values } from "@/data/company";

export const metadata: Metadata = createMetadata({
  title: "О компании",
  description:
    "NurOrdaService — надёжный партнёр промышленности Казахстана. Миссия, ценности, стратегия и инженерная экспертиза компании.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="О компании"
        description="Надёжный партнёр промышленности Казахстана в области комплексных поставок оборудования"
        image={images.about}
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "О компании" }]} />
      </div>

      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="heading-display mb-6 text-3xl">Кто мы</h2>
            <div className="space-y-5 leading-relaxed text-graphite-light">
              <p>
                NurOrdaService — динамично развивающаяся компания, специализирующаяся на поставках
                промышленного оборудования и реализации комплексных инженерных проектов.
              </p>
              <p>
                Основная цель — обеспечение предприятий современными техническими решениями,
                позволяющими повышать эффективность процессов и минимизировать эксплуатационные расходы.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card-hover">
              <Image src={images.about} alt="Промышленное предприятие" fill className="object-cover" sizes="50vw" />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <AnimatedSection>
          <SectionHeader label="Миссия" title="Наша миссия" centered />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-graphite-light">
            Обеспечить предприятия Казахстана современными инженерными решениями, способствующими
            развитию производства, повышению промышленной безопасности и внедрению передовых технологий.
          </p>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader label="Ценности" title="Наши ценности" centered />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.08}>
              <Card title={value.title} description={value.description} icon="engineering" />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader label="Стратегия" title="Видение и стратегия" light />
            <p className="leading-relaxed text-white/70">
              Стать одной из ведущих инжиниринговых компаний Казахстана, предоставляя заказчикам
              высокий уровень сервиса и профессиональную техническую поддержку.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Инженерная экспертиза</h3>
              <p className="leading-relaxed text-white/70">
                Команда объединяет специалистов с опытом в промышленном оборудовании, автоматизации
                и комплексном техническом снабжении предприятий.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-display text-3xl">Подход к работе</h2>
            <p className="mt-5 text-graphite-light">
              Каждый проект начинается с детального изучения технического задания и формирования
              оптимального решения с учётом условий эксплуатации.
            </p>
            <Button href="/contacts" className="mt-8" icon>Связаться с нами</Button>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
