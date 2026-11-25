import type { Metadata } from "next";
import BeliefsContent from "@/components/pages/BeliefsContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Beliefs & Statement of Faith",
  description:
    "Read the biblical statement of faith of Kandy Community Church: Scripture, the Trinity, salvation, Holy Spirit baptism, divine healing and the blessed hope.",
  path: "/beliefs",
  keywords: [
    "Kandy Community Church beliefs",
    "statement of faith Kandy",
    "Pentecostal beliefs Sri Lanka",
    "Holy Spirit baptism Kandy",
  ],
});

export default function BeliefsPage() {
  return (
    <>
      <BeliefsContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Beliefs", path: "/beliefs" },
        ]}
      />
    </>
  );
}
