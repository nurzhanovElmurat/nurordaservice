import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/Section";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности NurOrdaService — обработка персональных данных и использование файлов cookie.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Политика конфиденциальности" />
      <div className="container-corporate py-8">
        <Breadcrumbs items={[{ label: "Политика конфиденциальности" }]} />
      </div>
      <Section>
        <div className="prose prose-lg mx-auto max-w-3xl text-graphite-light">
          <h2 className="heading-display text-2xl text-navy">1. Общие положения</h2>
          <p className="mt-4 leading-relaxed">
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
            данных пользователей сайта NurOrdaService (далее — «Сайт»), принадлежащего компании
            NurOrdaService (далее — «Компания»).
          </p>

          <h2 className="heading-display mt-10 text-2xl text-navy">2. Собираемые данные</h2>
          <p className="mt-4 leading-relaxed">
            При заполнении форм обратной связи мы можем собирать: имя, номер телефона, адрес
            электронной почты, название организации и содержание сообщения. Также автоматически
            собираются технические данные: IP-адрес, тип браузера, время посещения.
          </p>

          <h2 className="heading-display mt-10 text-2xl text-navy">3. Цели обработки</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Обработка запросов и обращений пользователей</li>
            <li>Предоставление консультаций по оборудованию</li>
            <li>Улучшение качества обслуживания и работы Сайта</li>
            <li>Информирование о продуктах и услугах Компании</li>
          </ul>

          <h2 className="heading-display mt-10 text-2xl text-navy">4. Файлы cookie</h2>
          <p className="mt-4 leading-relaxed">
            Сайт использует файлы cookie для обеспечения корректной работы и анализа посещаемости.
            Продолжая использовать Сайт, вы соглашаетесь с использованием cookie в соответствии
            с настоящей Политикой.
          </p>

          <h2 className="heading-display mt-10 text-2xl text-navy">5. Защита данных</h2>
          <p className="mt-4 leading-relaxed">
            Компания принимает необходимые организационные и технические меры для защиты
            персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
          </p>

          <h2 className="heading-display mt-10 text-2xl text-navy">6. Контакты</h2>
          <p className="mt-4 leading-relaxed">
            По вопросам обработки персональных данных обращайтесь: info@nurordaservice.kz
          </p>
        </div>
      </Section>
    </>
  );
}
