"use client"

import { useState } from "react"
import { PageHero } from "@/components/ui/page-hero"
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, Headphones, Globe, Building
} from "lucide-react"
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
        phone: "",
        subject: "",
        message: ""
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Hubungi Kami"
        description="Tim kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel yang tersedia atau isi form di bawah ini."
        backgroundImage="https://images.pexels.com/photos/8867275/pexels-photo-8867275.jpeg"
      />

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#25D366] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-3">Chat langsung dengan tim kami</p>
              <span className="text-sm font-medium text-[#25D366]">+62 812-3456-7890 →</span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@slaviors.id"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#815854] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#815854] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-3">Kirim email ke tim support</p>
              <span className="text-sm font-medium text-[#815854]">support@slaviors.id →</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+6281234567890"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#815854] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#815854] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-sm text-gray-600 mb-3">Hubungi via telepon</p>
              <span className="text-sm font-medium text-[#815854]">+62 812-3456-7890 →</span>
            </a>

            {/* Ticket Support */}
            <a
              href="/support/ticket"
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#815854] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#815854] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ticket Support</h3>
              <p className="text-sm text-gray-600 mb-3">Buat tiket support</p>
              <span className="text-sm font-medium text-[#815854]">Buat Tiket →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Grid Pattern Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Grid Pattern Background */}
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
                  Isi form di bawah ini dan tim kami akan merespons dalam 24 jam.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#815854] focus:border-transparent transition-colors"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#815854] focus:border-transparent transition-colors"
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing & Payment</option>
                        <option value="general">General Question</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
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
                  <h3 className="text-lg font-bold text-gray-900">Kantor Kami</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#815854] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Alamat</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Jl. Contoh No. 123<br />
                        Yogyakarta 55281<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#815854] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Jam Operasional</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Senin - Jumat: 09:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00<br />
                        Minggu: Tutup
                      </p>
                      <p className="text-xs text-[#815854] font-medium mt-2">
                        * Support 24/7 via WhatsApp & Email
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
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-400 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-pink-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/slaviors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 text-gray-700 hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
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