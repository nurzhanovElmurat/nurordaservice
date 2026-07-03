import type { Metadata } from "next";

const SITE_URL = "https://nurordaservice.kz";
const SITE_NAME = "NurOrdaService";

export const companyInfo = {
  name: "NurOrdaService",
  legalName: "NurOrdaService",
  tagline: "Комплексные поставки промышленного оборудования и инженерных решений",
  description:
    "Казахстанская инжиниринговая компания: поставки промышленного оборудования, КИПиА, лабораторных систем, автоматизации и комплексное техническое сопровождение для предприятий.",
  phone: "+7 776 008 4867",
  email: "info@nurordaservice.kz",
  address: "г. Астана, район Алматы, проспект Абылай хана, 6/4, кв. 70",
  postalCode: "010000",
  city: "Астана",
  country: "KZ",
};

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const ogImage = image ?? `${SITE_URL}/og-image.svg`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ru_KZ",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: companyInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Абылай хана, 6/4, кв. 70",
      addressLocality: companyInfo.city,
      postalCode: companyInfo.postalCode,
      addressCountry: companyInfo.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      email: companyInfo.email,
      contactType: "customer service",
      availableLanguage: ["Russian", "Kazakh"],
    },
  };
}
