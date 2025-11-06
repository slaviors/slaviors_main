import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}