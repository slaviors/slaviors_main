"use client"

import { useState } from "react"
import { 
  Mail, Phone, MapPin, Send, 
  MessageCircle, Globe, Building
} from "lucide-react"
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function ContactPage() {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#815854] to-[#6d4a47] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Tim kami siap membantu Anda. Hubungi kami melalui berbagai channel yang tersedia.
          </p>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#815854] to-[#6d4a47] rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, #815854 1px, transparent 1px),
                linear-gradient(to bottom, #815854 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Fade effect on edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60" />
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
                    <Send className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Pesan Terkirim!</p>
                      <p className="text-xs text-green-700 mt-1">
                        Tim kami akan menghubungi Anda segera.
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
                    className="w-full sm:w-auto px-8 py-3 bg-[#815854] text-white font-semibold rounded-lg hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Kirim Pesan</span>
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
                    href="https://facebook.com/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                    title="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/slaviors.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-pink-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                    title="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                    title="YouTube"
                  >
                    <FaYoutube className="w-5 h-5" />
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