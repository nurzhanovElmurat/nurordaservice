import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";
import { getCatalogImage } from "@/lib/images";
import { catalogCategories, getCategoryBySlug } from "@/data/catalog";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return catalogCategories.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return createMetadata({
    title: category.title,
    description: category.description,
    path: `/catalog/${params.slug}`,
  });
}

export default function CatalogCategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const Icon = getIcon(category.icon);

  return (
    <>
      <PageHero
        title={category.title}
        description={category.shortDescription}
        image={getCatalogImage(category.slug)}
      />
      <div className="container-corporate py-8">
        <Breadcrumbs
          items={[
            { label: "Каталог", href: "/catalog" },
            { label: category.title },
          ]}
        />
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-xl shadow-card">
              <Image
                src={getCatalogImage(category.slug)}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
            <h2 className="heading-display mb-6 text-2xl">Описание</h2>
            <p className="mb-8 leading-relaxed text-graphite-light">{category.description}</p>

            <h3 className="heading-display mb-4 text-xl">Преимущества</h3>
            <ul className="mb-10 grid gap-3 sm:grid-cols-3">
              {category.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 bg-surface-muted p-4 text-sm font-medium text-navy"
                >
                  <Check className="shrink-0 text-accent" size={18} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <h3 className="heading-display mb-4 text-xl">Ассортимент</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-graphite-light">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="sticky top-28 rounded-xl border border-gray-100 bg-surface-muted p-8 shadow-card">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="heading-display mb-3 text-lg">Запросить подбор</h3>
              <p className="mb-6 text-sm leading-relaxed text-graphite-light">
                Наши специалисты подберут оптимальное оборудование с учётом вашего технического
                задания и условий эксплуатации.
              </p>
              <Button href="/contacts" className="w-full" icon>
                Получить консультацию
              </Button>
              <Link
                href="/catalog"
                className="mt-4 block text-center text-sm font-medium text-accent hover:underline"
              >
                ← Все категории
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
