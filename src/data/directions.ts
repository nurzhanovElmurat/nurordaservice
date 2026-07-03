export interface Direction {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const directions: Direction[] = [
  {
    slug: "promyshlennoe-oborudovanie",
    title: "Промышленное оборудование",
    description:
      "Комплексное оснащение производственных площадок оборудованием для технологических процессов различной сложности.",
    icon: "factory",
  },
  {
    slug: "laboratornoe-oborudovanie",
    title: "Лабораторное оборудование",
    description:
      "Оснащение исследовательских и контрольных лабораторий современными приборами и системами анализа.",
    icon: "lab",
  },
  {
    slug: "analiticheskoe-oborudovanie",
    title: "Аналитическое оборудование",
    description:
      "Приборы и системы для химического, физического и спектрального анализа в промышленных и научных условиях.",
    icon: "analytics",
  },
  {
    slug: "promyshlennaya-avtomatizatsiya",
    title: "Промышленная автоматизация",
    description:
      "Системы управления технологическими процессами, контроллеры, датчики и программное обеспечение.",
    icon: "automation",
  },
  {
    slug: "kipia",
    title: "КИПиА",
    description:
      "Контрольно-измерительные приборы и автоматика для мониторинга и регулирования технологических параметров.",
    icon: "instruments",
  },
  {
    slug: "elektrotekhnicheskoe-oborudovanie",
    title: "Электротехническое оборудование",
    description:
      "Электротехническая продукция для промышленных объектов: распределительные устройства, кабельные системы, защита.",
    icon: "electric",
  },
  {
    slug: "nasosnoe-oborudovanie",
    title: "Насосное оборудование",
    description:
      "Промышленные насосы и насосные станции для перекачки жидкостей в энергетике, нефтегазе и химической промышленности.",
    icon: "pump",
  },
  {
    slug: "truboprovodnaya-armatura",
    title: "Трубопроводная арматура",
    description:
      "Запорная, регулирующая и предохранительная арматура для трубопроводных систем различного назначения.",
    icon: "valve",
  },
  {
    slug: "inzhenernye-resheniya",
    title: "Инженерные решения",
    description:
      "Разработка и реализация комплексных технических решений под конкретные задачи заказчика.",
    icon: "engineering",
  },
  {
    slug: "kompleksnye-postavki",
    title: "Комплексные поставки",
    description:
      "Полный цикл снабжения: от анализа технического задания до ввода оборудования в эксплуатацию.",
    icon: "supply",
  },
];
