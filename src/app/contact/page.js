import ContactPageClient from "@/components/contact/ContactPageClient"

export const metadata = {
  title: "Hubungi Kami | Konsultasi Gratis Jasa Website & Software Yogyakarta",
  description: "Hubungi Slaviors Group untuk konsultasi gratis jasa pembuatan website dan software. Lokasi di Yogyakarta, melayani seluruh Indonesia. WhatsApp: +62 831-6058-1462. Online support 24/7.",
  keywords: [
    "kontak Slaviors Group",
    "konsultasi website gratis",
    "hubungi software house Yogyakarta",
    "jasa website Yogyakarta contact",
    "customer service IT solution"
  ],
  alternates: {
    canonical: "https://slaviors.id/contact",
  },
  openGraph: {
    title: "Hubungi Kami | Konsultasi Gratis Jasa Website & Software",
    description: "Hubungi Slaviors Group untuk konsultasi gratis. WhatsApp: +62 831-6058-1462. Online support 24/7.",
    url: "https://slaviors.id/contact",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hubungi Slaviors Group",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />
}
