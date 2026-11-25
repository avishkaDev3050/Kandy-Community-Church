import type { Metadata } from "next";
import GalleryContent from "@/components/pages/GalleryContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Church Photo Gallery in Kandy",
  description:
    "Browse photos of worship services, prayer, youth fellowship and community care at Kandy Community Church, a Spirit-filled church in Kandy, Sri Lanka.",
  path: "/gallery",
  keywords: [
    "Kandy Community Church photos",
    "church gallery Kandy",
    "worship service photos Sri Lanka",
    "Kandy church events",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <GalleryContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
    </>
  );
}
