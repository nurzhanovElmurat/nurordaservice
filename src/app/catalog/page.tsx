import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { getCatalogImage } from "@/lib/images";
import { catalogCategories } from "@/data/catalog";

export const metadata: Metadata = createMetadata({
  title: "Каталог оборудования",
  description:
    "Каталог промышленного оборудования: КИПиА, лабораторное и аналитическое оборудование, автоматизация, насосы, арматура и запасные части.",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <>
      <PageHero
        title="Каталог оборудования"
        description="Широкий ассортимент промышленного оборудования для предприятий различных отраслей экономики"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Каталог оборудования" }]} />
      </div>

      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Категории оборудования"
            description="Подбор и поставка оборудования под ваши задачи — от анализа ТЗ до ввода в эксплуатацию"
            centered
          />
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogCategories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Card
                title={cat.title}
                description={cat.shortDescription}
                href={`/catalog/${cat.slug}`}
                icon={cat.icon}
                image={getCatalogImage(cat.slug)}
                benefits={cat.benefits}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
