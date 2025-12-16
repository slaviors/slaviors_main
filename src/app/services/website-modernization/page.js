import React from 'react';
import { 
  RefreshCw, Rocket, TrendingUp, Smartphone, 
  Search, Lock, CheckCircle2, MessageCircle, 
  ArrowRight, Award, Clock, Layout
} from 'lucide-react';
import { FloatingStatsCard, FeatureCard, PackageCard, ProcessStep } from '@/components/services';

export const metadata = {
  title: "Jasa Modernisasi Website Indonesia | Upgrade Website Lambat Jadi Cepat",
  description: "Jasa modernisasi dan upgrade website lama melayani Jakarta, Surabaya, Bandung, Jogja & seluruh Indonesia. Perbaikan website lambat, tidak responsive, design jadul. 100% online, mulai 8 juta, zero downtime.",
  keywords: [
    "modernisasi website",
    "jasa modernisasi website jakarta",
    "upgrade website lama",
    "perbaikan website lambat",
    "cara mempercepat loading website",
    "website tidak responsive",
    "redesign website",
    "improve website performance",
    "website modernization",
    "jasa redesign website indonesia"
  ],
  alternates: {
    canonical: "https://slaviors.id/services/website-modernization",
  },
  openGraph: {
    title: "Jasa Modernisasi Website Lama | Upgrade Website Lambat Jadi Cepat",
    description: "Jasa modernisasi website lama menjadi modern, cepat, dan SEO-friendly. Zero downtime, zero data loss.",
    url: "https://slaviors.id/services/website-modernization",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Modernisasi Website",
      },
    ],
  },
};

export default function WebsiteModernizationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Modernization",
    "description": "Jasa modernisasi dan upgrade website lama menjadi lebih modern, cepat, responsive, dan SEO-friendly dengan teknologi terkini.",
    "provider": {
      "@type": "Organization",
      "name": "Slaviors Group",
      "url": "https://slaviors.id"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "serviceType": "Website Modernization",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "8000000",
      "highPrice": "25000000",
      "priceCurrency": "IDR",
      "offerCount": "3"
    }
  };
  const features = [
    {
      icon: Rocket,
      title: "Performance Upgrade",
      description: "Loading time 10x lebih cepat dengan teknologi modern dan optimasi maksimal"
    },
    {
      icon: Layout,
      title: "Modern UI/UX Design",
      description: "Tampilan fresh dan user experience yang jauh lebih baik dari website lama"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Responsive sempurna di semua device - mobile, tablet, dan desktop"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Struktur website yang SEO-friendly untuk ranking Google yang lebih baik"
    },
    {
      icon: Lock,
      title: "Security Enhancement",
      description: "Update security patch dan implementasi best practices terkini"
    },
    {
      icon: TrendingUp,
      title: "Better Conversion",
      description: "Design yang conversion-focused untuk meningkatkan leads dan sales"
    }
  ];

  const problems = [
    {
      icon: Clock,
      problem: "Loading Lambat",
      solution: "Optimasi code & asset untuk loading super cepat",
      impact: "↓ 80% bounce rate"
    },
    {
      icon: Smartphone,
      problem: "Tidak Responsive",
      solution: "Rebuild dengan mobile-first approach",
      impact: "↑ 60% mobile traffic"
    },
    {
      icon: Search,
      problem: "SEO Buruk",
      solution: "Restructure dengan teknik SEO terbaru",
      impact: "↑ 150% organic traffic"
    },
    {
      icon: Layout,
      problem: "Design Jadul",
      solution: "Modern UI/UX yang engaging & professional",
      impact: "↑ 40% conversion"
    }
  ];

  const packages = [
    {
      name: "Refresh Package",
      price: "Mulai dari 8jt",
      duration: "2-3 minggu",
      description: "Update tampilan dan performa website yang sudah ada",
      features: [
        "UI/UX redesign",
        "Mobile responsive",
        "Performance optimization",
        "SEO basic optimization",
        "Security update",
        "Content migration",
        "Training & handover"
      ],
      popular: false
    },
    {
      name: "Rebuild Package",
      price: "Mulai dari 15jt",
      duration: "1-2 bulan",
      description: "Rebuild total dengan teknologi modern dari awal",
      features: [
        "Complete redesign",
        "Modern tech stack (Next.js/React)",
        "Advanced SEO optimization",
        "CMS integration",
        "Performance tuning",
        "Database restructure",
        "API integration",
        "3 bulan support",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Transform Package",
      price: "Mulai dari 25jt",
      duration: "2-3 bulan",
      description: "Transformasi complete dengan fitur baru dan integrasi sistem",
      features: [
        "Full modernization",
        "Custom features & functionality",
        "Third-party integration",
        "Advanced analytics dashboard",
        "Marketing automation",
        "Payment gateway setup",
        "Multi-language support",
        "6 bulan support & maintenance",
        "Ongoing consultation"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Website Audit",
      description: "Analisis mendalam performa, SEO, security, dan UX website existing"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Tentukan scope modernization dan prioritas improvement"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Redesign dan rebuild dengan teknologi modern"
    },
    {
      step: "04",
      title: "Migration & Testing",
      description: "Migrate konten, testing menyeluruh di berbagai device"
    },
    {
      step: "05",
      title: "Launch & Monitor",
      description: "Go live dan monitoring performa post-launch"
    }
  ];

  const beforeAfter = [
    {
      aspect: "Loading Speed",
      before: "5-8 detik",
      after: "< 1 detik",
      improvement: "85% faster"
    },
    {
      aspect: "Mobile Score",
      before: "45/100",
      after: "95/100",
      improvement: "111% better"
    },
    {
      aspect: "SEO Score",
      before: "C (50/100)",
      after: "A+ (95/100)",
      improvement: "90% increase"
    },
    {
      aspect: "Conversion Rate",
      before: "1.2%",
      after: "3.5%",
      improvement: "192% growth"
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Node.js", "Vercel", "Cloudflare", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
            alt="Website Modernization"
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
            Website Modernization
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Transform website lama Anda menjadi modern, cepat, dan conversion machine
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Website Lama Bikin Rugi?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Website yang <strong>lambat, tidak mobile-friendly, dan design jadul</strong> bukan cuma soal estetika - ini langsung impact ke bisnis. Visitor kabur, ranking Google turun, dan competitor yang lebih modern ambil customer Anda.
                </p>
                <p>
                  Website modernization bukan sekedar facelift. Kami rebuild website Anda dengan <strong>teknologi terkini</strong>, optimasi performa maksimal, SEO yang powerful, dan UX yang bikin visitor jadi customer.
                </p>
                <p>
                  Yang paling penting? Anda tetap bisa keep konten existing - kami migrate semuanya dengan aman. <strong>Zero downtime, zero data loss</strong>.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">10x Faster</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Mobile Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">SEO Boosted</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                alt="Modern Website"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 grid-pattern-blog"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Masalah yang Kami Selesaikan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From problem to solution dengan impact yang terukur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">✕</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.problem}
                      </h3>
                    </div>
                  </div>
                </div>

                  <div className="pl-16 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#815854] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item.solution}</span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-green-50 rounded-lg">
                    <span className="text-sm font-bold text-green-700">{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Before vs After Modernization
            </h2>
            <p className="text-lg text-gray-600">
              Real improvement yang bisa Anda expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#815854] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.aspect}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="text-lg font-semibold text-red-600">{item.before}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#815854]" />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="text-lg font-semibold text-green-600">{item.after}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-[#815854]">{item.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 grid-pattern-blog"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yang Anda Dapatkan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Improvement menyeluruh dari semua aspek website
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
              Paket Modernization
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih level modernization yang sesuai kebutuhan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                duration={pkg.duration}
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
              Proses Modernization
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach untuk hasil yang maksimal
            </p>
          </div>

          <div className="relative">
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
              Teknologi Modern yang Kami Gunakan
            </h3>
            <p className="text-gray-600">Built with cutting-edge tech stack</p>
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
            Saatnya Upgrade Website Anda!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Dapatkan free website audit dan rekomendasi improvement dari tim kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6283160581462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#815854] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Request Free Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}