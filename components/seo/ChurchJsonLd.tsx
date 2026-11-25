import { SITE_NAME, SITE_URL } from "@/lib/seo";

type JsonLdData = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: `/${string}`;
};

function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const churchSchema: JsonLdData = {
  "@context": "https://schema.org",
  "@type": ["Church", "PlaceOfWorship"],
  "@id": `${SITE_URL}/#church`,
  name: SITE_NAME,
  alternateName: "KCC Kandy",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero-1.jpg`,
  description:
    "Kandy Community Church is a Spirit-filled Christian church in Kandy, Sri Lanka, reaching the unreached, raising disciples, and releasing leaders through worship, education, and community care.",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Ps. & Mrs. Dilini Wijesekara",
  },
  employee: [
    {
      "@type": "Person",
      name: "Ps. & Mrs. Dilini Wijesekara",
      jobTitle: "Lead Pastors",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "26 Colombo St",
    addressLocality: "Kandy",
    postalCode: "20000",
    addressRegion: "Central Province",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.2906,
    longitude: 80.6337,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Kandy",
    },
    {
      "@type": "Country",
      name: "Sri Lanka",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "13:30",
    },
  ],
  department: [
    {
      "@type": "Organization",
      name: "Kingdom Community Hub",
      description:
        "A community centre in Kandy for worship, education, relief, and discipleship.",
      url: `${SITE_URL}/hub`,
      parentOrganization: {
        "@id": `${SITE_URL}/#church`,
      },
    },
    {
      "@type": "EducationalOrganization",
      name: "Bethel Education Centre",
      description:
        "After-school tutoring, mentoring, and youth leadership training for children in Kandy.",
      url: `${SITE_URL}/hub`,
      parentOrganization: {
        "@id": `${SITE_URL}/#church`,
      },
    },
    {
      "@type": "Organization",
      name: "Kidney Patient Ministry",
      description:
        "Practical, financial, and spiritual support for kidney disease patients and their families in Central Sri Lanka.",
      url: `${SITE_URL}/hub`,
      parentOrganization: {
        "@id": `${SITE_URL}/#church`,
      },
    },
  ],
};

export function ChurchJsonLd() {
  return <JsonLd data={churchSchema} />;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}
