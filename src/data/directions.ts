export interface Direction {
  slug: string;
  title: string;
  description: string;
  icon: string;
  /** Slug категории каталога — если есть, карточка ведёт на /catalog/[slug] */
  catalogSlug?: string;
  /** Прямая ссылка для направлений без категории каталога */
  href?: string;
}

export const directions: Direction[] = [
  {
    slug: "promyshlennoe-oborudovanie",
    title: "Промышленное оборудование",
    description:
      "Комплексное оснащение производственных площадок оборудованием для технологических процессов различной сложности.",
    icon: "factory",
    href: "/catalog",
  },
  {
    slug: "laboratornoe-oborudovanie",
    title: "Лабораторное оборудование",
    description:
      "Оснащение исследовательских и контрольных лабораторий современными приборами и системами анализа.",
    icon: "lab",
    catalogSlug: "laboratornoe",
  },
  {
    slug: "analiticheskoe-oborudovanie",
    title: "Аналитическое оборудование",
    description:
      "Приборы и системы для химического, физического и спектрального анализа в промышленных и научных условиях.",
    icon: "analytics",
    catalogSlug: "analiticheskoe",
  },
  {
    slug: "promyshlennaya-avtomatizatsiya",
    title: "Промышленная автоматизация",
    description:
      "Системы управления технологическими процессами, контроллеры, датчики и программное обеспечение.",
    icon: "automation",
    catalogSlug: "avtomatizatsiya",
  },
  {
    slug: "kipia",
    title: "КИПиА",
    description:
      "Контрольно-измерительные приборы и автоматика для мониторинга и регулирования технологических параметров.",
    icon: "instruments",
    catalogSlug: "kipia",
  },
  {
    slug: "elektrotekhnicheskoe-oborudovanie",
    title: "Электротехническое оборудование",
    description:
      "Электротехническая продукция для промышленных объектов: распределительные устройства, кабельные системы, защита.",
    icon: "electric",
    catalogSlug: "elektrotekhnika",
  },
  {
    slug: "nasosnoe-oborudovanie",
    title: "Насосное оборудование",
    description:
      "Промышленные насосы и насосные станции для перекачки жидкостей в энергетике, нефтегазе и химической промышленности.",
    icon: "pump",
    catalogSlug: "nasosnoe",
  },
  {
    slug: "truboprovodnaya-armatura",
    title: "Трубопроводная арматура",
    description:
      "Запорная, регулирующая и предохранительная арматура для трубопроводных систем различного назначения.",
    icon: "valve",
    catalogSlug: "armatura",
  },
  {
    slug: "inzhenernye-resheniya",
    title: "Инженерные решения",
    description:
      "Разработка и реализация комплексных технических решений под конкретные задачи заказчика.",
    icon: "engineering",
    href: "/services",
  },
  {
    slug: "kompleksnye-postavki",
    title: "Комплексные поставки",
    description:
      "Полный цикл снабжения: от анализа технического задания до ввода оборудования в эксплуатацию.",
    icon: "supply",
    href: "/international",
  },
];

export function getDirectionHref(direction: Direction): string {
  if (direction.catalogSlug) return `/catalog/${direction.catalogSlug}`;
  return direction.href ?? "/catalog";
}
