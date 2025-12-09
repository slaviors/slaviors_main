"use client";

import React from "react";
import {
  Code2,
  Layout,
  Smartphone,
  TrendingUp,
  Search,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import {
  FeatureCard,
  PackageCard,
  ProcessStep,
} from "@/components/services";
import { CtaSection } from "@/components/home/cta-section";

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: Layout,
      title: "Desain Modern & Profesional",
      description:
        "UI/UX yang menarik dan intuitif, disesuaikan dengan brand identity bisnis Anda",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "Tampilan sempurna di semua device, dari desktop hingga smartphone",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description:
        "Website yang mudah ditemukan di Google dengan teknik SEO terbaik",
    },
    {
      icon: Rocket,
      title: "Loading Super Cepat",
      description:
        "Performa tinggi dengan optimasi kode dan asset untuk kecepatan maksimal",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Kode yang rapi, terstruktur, dan mudah di-maintain untuk jangka panjang",
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      description:
        "Dirancang untuk mengubah visitor menjadi customer dengan CTA yang tepat",
    },
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
        "Domain & hosting 1 tahun",
      ],
      popular: false,
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
        "Training penggunaan",
      ],
      popular: true,
    },
    {
      name: "E-Commerce",
      price: "Mulai dari 10jt",
      description:
        "Toko online lengkap dengan sistem pembayaran dan manajemen produk",
      features: [
        "Katalog produk unlimited",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Admin dashboard",
        "Order & inventory management",
        "Customer account system",
        "Mobile app friendly",
        "Training & maintenance",
      ],
      popular: false,
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
        "Content scheduling",
      ],
      popular: false,
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
        "Discussion forum",
      ],
      popular: false,
    },
    {
      name: "Custom Website",
      price: "Harga sesuai kebutuhan",
      description:
        "Website dengan fitur kompleks sesuai kebutuhan spesifik bisnis",
      features: [
        "Unlimited halaman",
        "Custom features & functionality",
        "Dashboard admin kompleks",
        "API integration",
        "Payment gateway",
        "Database design",
        "Full customization",
        "Maintenance & support",
      ],
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description:
        "Diskusi mendalam tentang kebutuhan bisnis, target audience, dan goals yang ingin dicapai",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description:
        "Membuat wireframe dan design mockup untuk approval sebelum development",
    },
    {
      step: "03",
      title: "Development",
      description: "Coding website dengan teknologi modern dan best practices",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Quality assurance, testing di berbagai device, dan launching ke production",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Pendampingan setelah launch dan maintenance berkala",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Vercel",
    "Firebase",
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
            Bangun online presence yang kuat dengan website modern, cepat, dan
            conversion-focused
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
                  Di era digital ini, website bukan hanya soal tampilan. Kami
                  membangun website yang tidak hanya eye-catching, tapi juga{" "}
                  <strong>fast, SEO-friendly, dan conversion-focused</strong>.
                </p>
                <p>
                  Dari landing page yang simpel hingga company profile yang
                  kompleks, kami pastikan setiap elemen dirancang untuk mencapai
                  goals bisnis Anda. Website yang kami bangun menggunakan
                  teknologi terkini untuk performa maksimal.
                </p>
                <p>
                  Yang paling penting? Anda tidak perlu pusing dengan teknis.
                  Kami handle semuanya - dari design, development, hingga
                  hosting dan maintenance.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">
                    Responsive Design
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">
                    SEO Optimized
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">
                    Fast Performance
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
                alt="Web Development Process"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(#815854 1px, transparent 1px),
              linear-gradient(90deg, #815854 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur & Keunggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap website yang kami bangun dilengkapi dengan fitur-fitur
              essential ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
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
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
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
                <ProcessStep
                  key={index}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
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
            <p className="text-gray-600">
              Modern tech stack untuk performa maksimal
            </p>
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
      <CtaSection />
    </div>
  );
}
