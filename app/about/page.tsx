import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Church & Lead Pastors in Kandy",
  description:
    "Meet Ps. & Mrs. Dilini Wijesekara and read the story of Kandy Community Church, planted in Kandy, Sri Lanka in 2014 after decades of ministry.",
  path: "/about",
  keywords: [
    "Kandy Community Church story",
    "church leadership Kandy",
    "Ps. Dilini Wijesekara",
    "Christian church in Kandy Sri Lanka",
  ],
});

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
    </>
  );
}
