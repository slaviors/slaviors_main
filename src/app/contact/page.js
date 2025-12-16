import ContactPageClient from "@/components/contact/ContactPageClient"

export const metadata = {
  title: "Hubungi Kami | Konsultasi Gratis Jasa Website & Software Seluruh Indonesia",
  description: "Hubungi Slaviors Group untuk konsultasi gratis jasa pembuatan website dan custom software. Melayani Jakarta, Surabaya, Bandung, Jogja & seluruh Indonesia. 100% online, buka sekarang! WhatsApp: +62 831-6058-1462. Janji temu online 24/7.",
  keywords: [
    "kontak jasa website indonesia",
    "hubungi vendor website development",
    "konsultasi website gratis",
    "jasa website janji temu online",
    "hubungi jasa website jakarta",
    "kontak jasa website surabaya",
    "customer service IT solution",
    "hubungi software house indonesia"
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
