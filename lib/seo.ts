import type { Metadata } from "next";

export const SITE_URL = "https://www.kandycommunitychurch.lk";

export const SITE_NAME = "Kandy Community Church";

export const DEFAULT_DESCRIPTION =
  "Kandy Community Church is a Spirit-filled Christian church in the heart of Kandy, Sri Lanka. Join our Sunday worship service at 12:00 PM, 26 Colombo St, Kandy.";

export const DEFAULT_KEYWORDS = [
  "Kandy Community Church",
  "Kandy churches",
  "Christian church in Kandy Sri Lanka",
  "Sunday worship service Kandy",
  "Kingdom Community Hub Kandy",
  "church in Kandy",
  "Spirit-filled church Sri Lanka",
  "Bethel Education Centre Kandy",
  "Kidney Patient Ministry Sri Lanka",
  "Pentecostal church Kandy",
];

export const DEFAULT_OG_IMAGE = {
  url: "/images/hero-1.jpg",
  width: 1376,
  height: 768,
  alt: "Kandy Community Church congregation gathered for Sunday worship in Kandy, Sri Lanka",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
