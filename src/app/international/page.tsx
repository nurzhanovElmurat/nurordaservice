import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SupplyChainInfographic } from "@/components/international/SupplyChain";
import { images } from "@/lib/images";
import { internationalBenefits } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "Международные поставки",
  description:
    "Прямые поставки промышленного оборудования из Китая без посредников. Контроль качества, заводские испытания, логистика и таможенное оформление.",
  path: "/international",
});

export default function InternationalPage() {
  return (
    <>
      <PageHero
        title="Международные поставки"
        description="Прямые поставки промышленного оборудования от производителей с полным циклом сопровождения"
        image={images.international}
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Международные поставки" }]} />
      </div>

      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="heading-display mb-6 text-3xl">Прямые поставки из Китая</h2>
            <div className="space-y-5 leading-relaxed text-graphite-light">
              <p>
                NurOrdaService осуществляет прямые поставки оборудования с промышленных предприятий
                Китайской Народной Республики без лишних посредников.
              </p>
              <p>
                Наши специалисты взаимодействуют непосредственно с производителями, инженерными
                подразделениями и экспортными отделами заводов.
              </p>
              <p>
                Мы сотрудничаем с предприятиями, имеющими современную производственную базу,
                международные сертификаты качества и опыт изготовления оборудования для мирового рынка.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card-hover">
              <Image
                src={images.international}
                alt="Международная логистика"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <AnimatedSection>
          <SectionHeader
            label="Логистическая цепочка"
            title="Путь оборудования от завода до заказчика"
            centered
          />
        </AnimatedSection>
        <SupplyChainInfographic />
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader label="Преимущества" title="Преимущества прямых поставок" centered />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internationalBenefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <Card title={benefit.title} description={benefit.description} icon="logistics" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section dark>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">Индивидуальное изготовление</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              Возможность изготовления оборудования по индивидуальным техническим требованиям,
              заказ нестандартного оборудования и поставка оригинальных запасных частей.
            </p>
            <Button href="/contacts" size="lg" className="mt-8" icon>
              Обсудить проект
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
