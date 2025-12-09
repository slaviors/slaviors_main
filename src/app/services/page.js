"use client"

import React from 'react';
import { 
  Code2, Cloud, Settings, RefreshCw,
  ArrowRight, CheckCircle2, MessageCircle,
  Rocket, TrendingUp, Users
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Website Development",
      tagline: "Bangun Online Presence yang Kuat",
      description: "Website modern, cepat, dan conversion-focused untuk meningkatkan kredibilitas dan penjualan bisnis Anda.",
      features: [
        "Landing Page & Company Profile",
        "E-Commerce & Portal Berita",
        "Membership/LMS Platform",
        "SEO Optimized & Mobile Responsive"
      ],
      startingPrice: "Mulai dari 3jt",
      link: "/services/website-development",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: Cloud,
      title: "SaaS Development",
      tagline: "Platform yang Scalable & Profitable",
      description: "Solusi SaaS custom dengan cloud-native architecture untuk efisiensi operasional dan pertumbuhan bisnis berkelanjutan.",
      features: [
        "MVP to Full Platform",
        "Multi-tenant Architecture",
        "Payment Gateway Integration",
        "Advanced Analytics Dashboard"
      ],
      startingPrice: "Mulai dari 25jt",
      link: "/services/saas-development",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: Settings,
      title: "Custom Software Development",
      tagline: "Solusi yang Fit dengan Bisnis Anda",
      description: "Software custom yang disesuaikan 100% dengan workflow dan kebutuhan spesifik bisnis Anda.",
      features: [
        "Sistem Informasi Management",
        "Workflow & Approval System",
        "Business Intelligence Tools",
        "No Monthly Fee - Full Ownership"
      ],
      startingPrice: "Mulai dari 15jt",
      link: "/services/custom-software",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Website Modernization",
      tagline: "Transform Website Lama Jadi Modern",
      description: "Update website lama dengan teknologi terkini untuk performa, SEO, dan user experience yang jauh lebih baik.",
      features: [
        "10x Faster Loading Speed",
        "Modern UI/UX Design",
        "SEO & Security Enhancement",
        "Zero Downtime Migration"
      ],
      startingPrice: "Mulai dari 8jt",
      link: "/services/website-modernization",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const whyChoose = [
    {
      icon: Rocket,
      title: "Delivery Cepat & Berkualitas",
      description: "Timeline yang jelas dan hasil yang exceed expectation"
    },
    {
      icon: TrendingUp,
      title: "ROI-Focused Solution",
      description: "Solusi yang dirancang untuk growth dan profitability"
    },
    {
      icon: Users,
      title: "Partnership Jangka Panjang",
      description: "Support & maintenance untuk kesuksesan bisnis Anda"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi",
      description: "Diskusi mendalam tentang kebutuhan dan goals bisnis"
    },
    {
      step: "02",
      title: "Planning",
      description: "Design solution dan timeline development"
    },
    {
      step: "03",
      title: "Development",
      description: "Build dengan teknologi modern dan best practices"
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy, testing, dan training"
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance dan enhancement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="Slaviors Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Layanan Kami
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Solusi teknologi lengkap untuk mengembangkan bisnis Anda di era digital
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#815854 1px, transparent 1px),
              linear-gradient(90deg, #815854 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilih Layanan yang Sesuai Kebutuhan Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dari website hingga aplikasi kompleks, kami siap membantu transformasi digital bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-7 h-7 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#815854] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Harga</div>
                      <div className="text-xl font-bold text-[#815854]">
                        {service.startingPrice}
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#815854] text-white font-semibold rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:gap-3"
                    >
                      Selengkapnya
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner teknologi yang tidak hanya deliver, tapi juga peduli dengan kesuksesan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-[#F9EBDE] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#815854] group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#815854] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparan, terstruktur, dan fokus pada hasil
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 h-full w-full bg-[#815854]"></div>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-24 h-24 bg-[#815854] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9EBDE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#815854] mb-2">50+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#815854] mb-2">99%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#815854] mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#815854] mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#815854] to-[#6d4a47] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Tidak Yakin Layanan Mana yang Cocok?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan bisnis Anda dengan tim expert kami. Gratis, tanpa komitmen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6283160581462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#815854] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#815854] transition-all duration-300"
            >
              Lihat Portfolio
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}