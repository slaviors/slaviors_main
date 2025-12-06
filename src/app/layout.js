import { Plus_Jakarta_Sans } from "next/font/google"
import { TemporaryNavbar } from "@/components/layout/TemporaryNavbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
})

export const metadata = {
  title: "Slaviors Group - Solusi Digital Modern untuk Bisnis Anda",
  description: "Penyedia layanan pembuatan website, software development, SEO, dan infrastruktur digital dengan teknologi modern. Website cepat, SEO-friendly, dan siap mengembangkan bisnis Anda.",
  keywords: "web development, software development, SEO, digital marketing, domain, hosting, VPS, jasa website, jasa software, Slaviors",
  authors: [{ name: "Slaviors Group" }],
  openGraph: {
    title: "Slaviors Group - Solusi Digital Modern",
    description: "Website dan software modern dengan teknologi terkini",
    url: "https://slaviors.id",
    siteName: "Slaviors Group",
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans`}
      >
        <TemporaryNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}