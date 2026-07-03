export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    slug: "neftegazovaya",
    title: "Нефтегазовая",
    description:
      "Оборудование для добычи, транспортировки и переработки углеводородов: КИПиА, арматура, насосы, системы автоматизации.",
    icon: "oil",
  },
  {
    slug: "energetika",
    title: "Энергетика",
    description:
      "Технические решения для тепловых и гидроэлектростанций, подстанций и распределительных сетей.",
    icon: "energy",
  },
  {
    slug: "metallurgiya",
    title: "Металлургия",
    description:
      "Оборудование для металлургических производств: измерительные системы, автоматизация, электротехника.",
    icon: "metal",
  },
  {
    slug: "gornodobyvayushchaya",
    title: "Горнодобывающая",
    description:
      "Комплексные поставки для горнодобывающих предприятий: насосное оборудование, КИПиА, системы безопасности.",
    icon: "mining",
  },
  {
    slug: "khimicheskaya",
    title: "Химическая",
    description:
      "Оборудование для химических производств: аналитические системы, арматура, дозирующее оборудование.",
    icon: "chemical",
  },
  {
    slug: "ekologicheskaya",
    title: "Экологическая",
    description:
      "Приборы и системы для экологического мониторинга, очистки стоков и контроля выбросов.",
    icon: "eco",
  },
  {
    slug: "stroitelstvo",
    title: "Строительство",
    description:
      "Инженерное оборудование для строительных объектов: электротехника, насосные станции, системы автоматизации.",
    icon: "construction",
  },
  {
    slug: "laboratorii",
    title: "Лаборатории",
    description:
      "Оснащение производственных и контрольных лабораторий аналитическим и измерительным оборудованием.",
    icon: "lab",
  },
  {
    slug: "nauchnye-organizatsii",
    title: "Научные организации",
    description:
      "Специализированное оборудование для научно-исследовательских институтов и университетов.",
    icon: "science",
  },
  {
    slug: "zhkh",
    title: "ЖКХ",
    description:
      "Оборудование для объектов жилищно-коммунального хозяйства: насосные станции, КИПиА, системы учёта.",
    icon: "utilities",
  },
];
