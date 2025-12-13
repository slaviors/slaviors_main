"use client"

import { useState } from "react"
import { 
  Mail, Phone, MapPin, Send, 
  MessageCircle, Globe, Building
} from "lucide-react"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { PageHero } from "@/components/ui/page-hero"

export default function ContactPageClient() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Hubungi Kami",
    "description": "Halaman kontak Slaviors Group. Hubungi kami untuk konsultasi gratis tentang jasa pembuatan website dan software.",
    "url": "https://slaviors.id/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Slaviors Group",
      "telephone": "+62-831-6058-1462",
      "email": "contact@slaviors.id",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Depok",
        "addressLocality": "Sleman",
        "addressRegion": "DI Yogyakarta",
        "postalCode": "55281",
        "addressCountry": "ID"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Format pesan WhatsApp
    const whatsappMessage = `*Pesan Baru dari Website*%0A%0A*Nama:* ${formData.name}%0A*Email:* ${formData.email}%0A*Pesan:*%0A${formData.message}`
    
    // Redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/6283160581462?text=${whatsappMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset form after short delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        title="Hubungi Kami"
        description="Tim kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel yang tersedia atau isi form di bawah ini."
        backgroundImage="https://images.pexels.com/photos/8867275/pexels-photo-8867275.jpeg"
      />

      {/* Contact Methods Grid */}
      <section className="py-16 bg-linear-to-brom-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pilih Channel Komunikasi</h2>
            <p className="text-gray-600">Hubungi kami melalui channel yang paling nyaman untuk Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6283160581462"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#815854]/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#815854]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 bg-linear-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <FaWhatsapp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">Chat langsung dengan tim kami</p>
                <div className="flex items-center text-sm font-semibold text-[#815854] group-hover:gap-2 transition-all">
                  <span>+62 831-6058-1462</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@slaviors.id"
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#815854]/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#815854]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 bg-linear-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <p className="text-sm text-gray-600 mb-4">Kirim email ke tim kami</p>
                <div className="flex items-center text-sm font-semibold text-[#815854] group-hover:gap-2 transition-all">
                  <span>contact@slaviors.id</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+6283160581462"
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#815854]/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#815854]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 bg-linear-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Telepon</h3>
                <p className="text-sm text-gray-600 mb-4">Hubungi via telepon</p>
                <div className="flex items-center text-sm font-semibold text-[#815854] group-hover:gap-2 transition-all">
                  <span>+62 831-6058-1462</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Main grid pattern */}
          <div className="absolute inset-0 opacity-30 grid-pattern-medium" />
          
          {/* Fade effect on edges */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white opacity-60" />
        </div>

        <div className="relative z-10">          
          {/* Center content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
                <p className="text-gray-600 mb-6">
                  Isi form di bawah ini dan tim kami akan merespons segera.
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <FaWhatsapp className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Membuka WhatsApp...</p>
                      <p className="text-xs text-green-700 mt-1">
                        Pesan Anda akan dikirim melalui WhatsApp.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#815854] focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#815854] focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#815854] focus:border-transparent transition-colors resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Membuka WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="w-5 h-5" />
                        <span>Kirim via WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Office Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-[#815854]" />
                  <h3 className="text-lg font-bold text-gray-900">Informasi Kontak</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#815854] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Lokasi</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Depok, Sleman<br />
                        Yogyakarta, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#815854] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Layanan</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Online Support 24/7<br />
                        Via WhatsApp & Email
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#815854] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Website</p>
                      <a href="https://slaviors.id" className="text-sm text-[#815854] hover:underline mt-1 block">
                        www.slaviors.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/slaviors.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kunjungi halaman Instagram Slaviors Group"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-pink-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com/company/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kunjungi halaman LinkedIn Slaviors Group"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://youtube.com/@slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kunjungi channel YouTube Slaviors Group"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaYoutube className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
