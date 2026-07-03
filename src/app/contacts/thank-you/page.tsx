import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Спасибо за обращение",
  description: "Ваша заявка успешно отправлена. Специалист NurOrdaService свяжется с вами в ближайшее время.",
  path: "/contacts/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface-muted section-padding">
      <div className="container-corporate">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle className="text-accent" size={40} aria-hidden="true" />
          </div>
          <h1 className="heading-display text-3xl md:text-4xl">Спасибо за обращение!</h1>
          <p className="mt-5 text-lg leading-relaxed text-graphite-light">
            Ваша заявка успешно отправлена. Наш специалист свяжется с вами в ближайшее рабочее время.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">На главную</Button>
            <Button href="/catalog" variant="secondary">
              Каталог оборудования
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
