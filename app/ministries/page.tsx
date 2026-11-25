import type { Metadata } from "next";
import MinistriesContent from "@/components/pages/MinistriesContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Ministries in Kandy",
  description:
    "Reach, raise and release: explore the ministries of Kandy Community Church, from evangelism and discipleship to community care and worship in Kandy.",
  path: "/ministries",
  keywords: [
    "Kandy Community Church ministries",
    "church outreach Kandy",
    "discipleship Kandy",
    "youth ministry Sri Lanka",
  ],
});

export default function MinistriesPage() {
  return (
    <>
      <MinistriesContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Ministries", path: "/ministries" },
        ]}
      />
    </>
  );
}
