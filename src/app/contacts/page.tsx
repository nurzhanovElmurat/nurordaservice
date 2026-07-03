import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm, ContactInfo, MapEmbed } from "@/components/contacts/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Контакты",
  description:
    "Свяжитесь с NurOrdaService для консультации по подбору промышленного оборудования. Астана, проспект Абылай хана, 6/4.",
  path: "/contacts",
});

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакты"
        description="Свяжитесь с нами для получения консультации по подбору оборудования"
      />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Контакты" }]} />
      </div>
      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="heading-display mb-8 text-2xl">Форма обратной связи</h2>
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Section>
      <Section className="bg-surface-muted !pt-0">
        <h2 className="heading-display mb-8 text-2xl">Как нас найти</h2>
        <MapEmbed />
      </Section>
    </>
  );
}
