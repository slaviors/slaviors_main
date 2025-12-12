import { Plus_Jakarta_Sans } from "next/font/google"
import { TemporaryNavbar } from "@/components/layout/TemporaryNavbar"
import { TemporaryFooter } from "@/components/layout/TemporaryFooter"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
})

export const metadata = {
  metadataBase: new URL('https://slaviors.id'),
  title: {
    default: "Slaviors Group - Jasa Pembuatan Website & Software Development Yogyakarta",
    template: "%s | Slaviors Group"
  },
  description: "Software house Yogyakarta terpercaya sejak 2023. Jasa pembuatan website profesional, SaaS development, custom software, dan modernisasi website. Solusi digital untuk UMKM & bisnis di Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "web development Indonesia",
    "software house Yogyakarta",
    "jasa pembuatan software",
    "SaaS development",
    "custom software Indonesia",
    "jasa website Yogyakarta",
    "web developer Yogyakarta",
    "IT solution Yogyakarta",
    "modernisasi website",
    "buat website profesional",
    "software ERP CRM"
  ],
  authors: [{ name: "Slaviors Group", url: "https://slaviors.id" }],
  creator: "Slaviors Group",
  publisher: "Slaviors Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://slaviors.id",
  },
  openGraph: {
    title: "Slaviors Group - Jasa Pembuatan Website & Software Development Yogyakarta",
    description: "Software house Yogyakarta terpercaya. Jasa pembuatan website, SaaS, dan custom software untuk UMKM & bisnis di Indonesia.",
    url: "https://slaviors.id",
    siteName: "Slaviors Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Slaviors Group - Software House Yogyakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slaviors Group - Jasa Pembuatan Website & Software Yogyakarta",
    description: "Software house Yogyakarta terpercaya. Jasa pembuatan website, SaaS, dan custom software untuk bisnis.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google Search Console
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Slaviors Group",
    "alternateName": "Slaviors",
    "url": "https://slaviors.id",
    "logo": "https://slaviors.id/assets/logos/with-bg/slaviors-logo.png",
    "description": "Software house Yogyakarta yang menyediakan jasa pembuatan website, SaaS development, custom software, dan modernisasi website untuk UMKM dan bisnis di Indonesia.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Depok",
      "addressLocality": "Sleman",
      "addressRegion": "DI Yogyakarta",
      "postalCode": "55281",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.7627",
      "longitude": "110.4088"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-831-6058-1462",
      "contactType": "customer service",
      "email": "contact@slaviors.id",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://instagram.com/slaviors.id",
      "https://linkedin.com/company/slaviors",
      "https://youtube.com/@slaviors"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-7.7627",
        "longitude": "110.4088"
      },
      "geoRadius": "1000000"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Slaviors Group",
    "image": "https://slaviors.id/assets/logos/with-bg/slaviors-logo.png",
    "@id": "https://slaviors.id",
    "url": "https://slaviors.id",
    "telephone": "+62-831-6058-1462",
    "priceRange": "Rp 3.000.000 - Rp 50.000.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Depok",
      "addressLocality": "Sleman",
      "addressRegion": "DI Yogyakarta",
      "postalCode": "55281",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.7627",
      "longitude": "110.4088"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://instagram.com/slaviors.id",
      "https://linkedin.com/company/slaviors",
      "https://youtube.com/@slaviors"
    ]
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans`}
      >
        <TemporaryNavbar />
        {children}
        <TemporaryFooter />
      </body>
    </html>
  )
}