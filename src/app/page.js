import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/service-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"

export const metadata = {
  title: "Jasa Pembuatan Website & Software Development Yogyakarta | Slaviors Group",
  description: "Software house Yogyakarta terpercaya sejak 2023. Jasa pembuatan website profesional, SaaS development, custom software, dan modernisasi website. Solusi digital terbaik untuk UMKM, bisnis, dan agency di Indonesia dengan harga terjangkau.",
  keywords: [
    "jasa pembuatan website Yogyakarta",
    "web developer Yogyakarta",
    "software house Yogyakarta",
    "IT solution Yogyakarta",
    "jasa website profesional",
    "buat website company profile",
    "jasa pembuatan software Indonesia",
    "SaaS development",
    "custom software development",
    "modernisasi website",
  ],
  alternates: {
    canonical: "https://slaviors.id",
  },
  openGraph: {
    title: "Jasa Pembuatan Website & Software Development Yogyakarta",
    description: "Software house Yogyakarta terpercaya. Jasa pembuatan website, SaaS, dan custom software untuk UMKM & bisnis di Indonesia.",
    url: "https://slaviors.id",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Slaviors Group - Software House Yogyakarta",
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