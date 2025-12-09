"use client"

import React from 'react';
import { 
  Code2, Layout, Smartphone, TrendingUp, 
  Search, Rocket, CheckCircle2, MessageCircle, 
  ArrowRight, Clock, Award
} from 'lucide-react';

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: Layout,
      title: "Desain Modern & Profesional",
      description: "UI/UX yang menarik dan intuitif, disesuaikan dengan brand identity bisnis Anda"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Tampilan sempurna di semua device, dari desktop hingga smartphone"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Website yang mudah ditemukan di Google dengan teknik SEO terbaik"
    },
    {
      icon: Rocket,
      title: "Loading Super Cepat",
      description: "Performa tinggi dengan optimasi kode dan asset untuk kecepatan maksimal"
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Kode yang rapi, terstruktur, dan mudah di-maintain untuk jangka panjang"
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      description: "Dirancang untuk mengubah visitor menjadi customer dengan CTA yang tepat"
    }
  ];

  const packages = [
    {
      name: "Landing Page",
      price: "Mulai dari 3jt",
      description: "Perfect untuk promosi produk/jasa atau campaign marketing",
      features: [
        "1 Halaman responsive",
        "Desain custom",
        "Form kontak/lead",
        "Optimasi SEO dasar",
        "Google Analytics",
        "Domain & hosting 1 tahun"
      ],
      popular: false
    },
    {
      name: "Company Profile",
      price: "Mulai dari 6jt",
      description: "Solusi lengkap untuk membangun kredibilitas bisnis online",
      features: [
        "5-7 Halaman responsive",
        "Desain premium & custom",
        "CMS untuk update konten",
        "SEO advanced",
        "Contact form & map",
        "Blog/news section",
        "Domain & hosting 1 tahun",
        "Training penggunaan"
      ],
      popular: true
    },
    {
      name: "E-Commerce",
      price: "Mulai dari 10jt",
      description: "Toko online lengkap dengan sistem pembayaran dan manajemen produk",
      features: [
        "Katalog produk unlimited",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Admin dashboard",
        "Order & inventory management",
        "Customer account system",
        "Mobile app friendly",
        "Training & maintenance"
      ],
      popular: false
    },
    {
      name: "Portal Berita/Blog",
      price: "Mulai dari 8jt",
      description: "Platform konten dengan CMS lengkap untuk publikasi artikel",
      features: [
        "Unlimited artikel & kategori",
        "Multi-author system",
        "SEO optimization per artikel",
        "Comment & social sharing",
        "Newsletter integration",
        "Advertisement slots",
        "Analytics dashboard",
        "Content scheduling"
      ],
      popular: false
    },
    {
      name: "Membership/LMS",
      price: "Mulai dari 12jt",
      description: "Platform pembelajaran online atau membership eksklusif",
      features: [
        "User registration & login",
        "Course/content management",
        "Video hosting integration",
        "Progress tracking",
        "Quiz & assessment",
        "Certificate generation",
        "Payment subscription",
        "Discussion forum"
      ],
      popular: false
    },
    {
      name: "Custom Website",
      price: "Harga sesuai kebutuhan",
      description: "Website dengan fitur kompleks sesuai kebutuhan spesifik bisnis",
      features: [
        "Unlimited halaman",
        "Custom features & functionality",
        "Dashboard admin kompleks",
        "API integration",
        "Payment gateway",
        "Database design",
        "Full customization",
        "Maintenance & support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Diskusi mendalam tentang kebutuhan bisnis, target audience, dan goals yang ingin dicapai"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Membuat wireframe dan design mockup untuk approval sebelum development"
    },
    {
      step: "03",
      title: "Development",
      description: "Coding website dengan teknologi modern dan best practices"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Quality assurance, testing di berbagai device, dan launching ke production"
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Pendampingan setelah launch dan maintenance berkala"
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Node.js", "PostgreSQL", "Vercel", "Firebase"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
            alt="Website Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white bg-[#815854] px-4 py-2 rounded-full">
              Layanan Kami
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Website Development
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Bangun online presence yang kuat dengan website modern, cepat, dan conversion-focused
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Website yang Bukan Sekedar Cantik
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Di era digital ini, website bukan hanya soal tampilan. Kami membangun website yang tidak hanya eye-catching, tapi juga <strong>fast, SEO-friendly, dan conversion-focused</strong>.
                </p>
                <p>
                  Dari landing page yang simpel hingga company profile yang kompleks, kami pastikan setiap elemen dirancang untuk mencapai goals bisnis Anda. Website yang kami bangun menggunakan teknologi terkini untuk performa maksimal.
                </p>
                <p>
                  Yang paling penting? Anda tidak perlu pusing dengan teknis. Kami handle semuanya - dari design, development, hingga hosting dan maintenance.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Fast Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
                alt="Web Development Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-[#815854]" />
                  <div>
                    <div className="text-2xl font-bold text-[#815854]">A+</div>
                    <div className="text-xs text-gray-600">SEO Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
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
              Fitur & Keunggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap website yang kami bangun dilengkapi dengan fitur-fitur essential ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#F9EBDE] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#815854] group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#815854] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Paket Layanan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? 'border-[#815854] shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#815854]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#815854] text-white text-xs font-bold px-4 py-2 rounded-full">
                      PALING POPULER
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#815854] mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#815854] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6283160581462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center font-semibold rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#815854] text-white hover:bg-[#6d4a47]'
                      : 'bg-white text-[#815854] border-2 border-[#815854] hover:bg-[#815854] hover:text-white'
                  }`}
                >
                  Pilih Paket Ini
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparan dan terstruktur dari awal hingga akhir
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 h-full w-full bg-[#815854]"></div>
            </div>

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

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Teknologi yang Kami Gunakan
            </h3>
            <p className="text-gray-600">Modern tech stack untuk performa maksimal</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#815854] hover:text-[#815854] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#815854] to-[#6d4a47] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Membangun Website Impian Anda?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Konsultasikan project Anda dengan tim kami. Gratis, tanpa komitmen!
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