/** Centralized image URLs for consistent asset management */
export const images = {
  hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85",
  about: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85",
  cta: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=85",
  international: "https://images.unsplash.com/photo-1578575437136-3edf78a3d666?w=1200&q=85",
  catalog: {
    kipia: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85",
    laboratornoe: "https://images.unsplash.com/photo-1532187863486-abf9db385eb2?w=800&q=85",
    analiticheskoe: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85",
    elektrotekhnika: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85",
    avtomatizatsiya: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85",
    nasosnoe: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=85",
    "kabelnaya-produktsiya": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    armatura: "https://images.unsplash.com/photo-1581092160607-ee22621dd390?w=800&q=85",
    "istochniki-pitaniya": "https://images.unsplash.com/photo-1558449028-b5145bdf8f6c?w=800&q=85",
    "zapasnye-chasti": "https://images.unsplash.com/photo-1581092795360-fd1fb04c4a98?w=800&q=85",
    "inzhenernye-komplektuyushchie": "https://images.unsplash.com/photo-1581091226033-d5eca59ddeb1?w=800&q=85",
  },
  industries: {
    neftegazovaya: "https://images.unsplash.com/photo-1518709766631-a6d7f60747d8?w=800&q=85",
    energetika: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85",
    metallurgiya: "https://images.unsplash.com/photo-1565688534245-05d6f5c8b2f4?w=800&q=85",
    gornodobyvayushchaya: "https://images.unsplash.com/photo-1508739773434-c26b3d375ee5?w=800&q=85",
    khimicheskaya: "https://images.unsplash.com/photo-1532187863486-abf9db385eb2?w=800&q=85",
    ekologicheskaya: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=85",
    stroitelstvo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85",
    laboratorii: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85",
    "nauchnye-organizatsii": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=85",
    zhkh: "https://images.unsplash.com/photo-1449845747840-2b44fbf7d6e5?w=800&q=85",
  },
} as const;

export function getCatalogImage(slug: string): string {
  return images.catalog[slug as keyof typeof images.catalog] ?? images.hero;
}

export function getIndustryImage(slug: string): string {
  return images.industries[slug as keyof typeof images.industries] ?? images.about;
}
