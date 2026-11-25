import type { Metadata } from "next";
import HubContent from "@/components/pages/HubContent";
import { BreadcrumbJsonLd } from "@/components/seo/ChurchJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kingdom Community Hub in Kandy",
  description:
    "Explore the Kingdom Community Hub in Kandy: Bethel Education Centre, Kidney Patient Ministry, guest rooms and community care outreach across Sri Lanka.",
  path: "/hub",
  keywords: [
    "Kingdom Community Hub Kandy",
    "Bethel Education Centre Kandy",
    "Kidney Patient Ministry Sri Lanka",
    "church community centre Kandy",
  ],
});

export default function CommunityHubPage() {
  return (
    <>
      <HubContent />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Community Hub", path: "/hub" },
        ]}
      />
    </>
  );
}
