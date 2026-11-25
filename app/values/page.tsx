import type { Metadata } from "next";
import ValuesContent from "@/components/pages/ValuesContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Core Values in Kandy",
  description:
    "Discover the core values of Kandy Community Church—relational, missional, charismatic and kingdom-orientated—and how they shape our life in Kandy.",
  path: "/values",
  keywords: [
    "Kandy Community Church values",
    "kingdom values Kandy",
    "missional church Sri Lanka",
    "Spirit-filled church Kandy",
  ],
});

export default function ValuesPage() {
  return (
    <>
      <ValuesContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Values", path: "/values" },
        ]}
      />
    </>
  );
}
