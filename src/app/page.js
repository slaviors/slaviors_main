import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/service-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"

export const metadata = {
  title: "Jasa Website Indonesia | Pembuatan Website Jakarta Surabaya Jogja",
  description: "Jasa pembuatan website profesional melayani seluruh Indonesia - Jakarta, Surabaya, Bandung, Jogja, Semarang, Medan, Bali. Vendor website development terpercaya sejak 2023 untuk UMKM dan bisnis. Company profile, e-commerce, SaaS, 100% online. Rating tertinggi!",
  keywords: [
    "jasa website indonesia",
    "jasa pembuatan website jakarta",
    "jasa website jogja",
    "jasa pembuatan website surabaya",
    "jasa website bandung",
    "jasa pembuatan website semarang",
    "jasa website medan",
    "jasa pembuatan website bali",
    "web developer jogja",
    "vendor website development",
    "jasa website development",
    "website developer indonesia",
    "software house yogyakarta",
    "jasa website company profile",
    "penyedia website",
    "jasa pembuatan website profesional",
    "jasa custom website",
    "membuat website perusahaan",
    "jasa website makassar",
    "jasa pembuatan website palembang",
  ],
  alternates: {
    canonical: "https://slaviors.id",
  },
  openGraph: {
    title: "Jasa Website Indonesia | Jakarta Surabaya Bandung Jogja & Seluruh Indonesia",
    description: "Jasa pembuatan website profesional melayani seluruh Indonesia. Vendor website development terpercaya, 100% online. Konsultasi gratis!",
    url: "https://slaviors.id",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Website Jogja - Slaviors Group",
      },
    ],
  },
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Slaviors Group",
    "url": "https://slaviors.id",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://slaviors.id/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Website Development",
        "description": "Jasa pembuatan website profesional, landing page, company profile, dan toko online dengan teknologi modern.",
        "url": "https://slaviors.id/services/website-development",
        "provider": {
          "@type": "Organization",
          "name": "Slaviors Group"
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "SaaS Development",
        "description": "Jasa pembuatan platform SaaS yang scalable dan customizable untuk berbagai industri.",
        "url": "https://slaviors.id/services/saas-development",
        "provider": {
          "@type": "Organization",
          "name": "Slaviors Group"
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Custom Software Development",
        "description": "Jasa pembuatan software custom, aplikasi bisnis, ERP, CRM, dan sistem informasi management.",
        "url": "https://slaviors.id/services/custom-software",
        "provider": {
          "@type": "Organization",
          "name": "Slaviors Group"
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Website Modernization",
        "description": "Layanan upgrade dan modernisasi website lama menjadi lebih cepat, modern, dan SEO-friendly.",
        "url": "https://slaviors.id/services/website-modernization",
        "provider": {
          "@type": "Organization",
          "name": "Slaviors Group"
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data - Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Structured Data - Services Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  )
}