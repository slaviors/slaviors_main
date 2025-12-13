import React from 'react';
import { 
  Cloud, Users, Lock, TrendingUp, 
  Database, RefreshCw, CheckCircle2, MessageCircle, 
  ArrowRight, Award, Layers, Settings
} from 'lucide-react';
import { FloatingStatsCard, FeatureCard, PackageCard, ProcessStep } from '@/components/services';
import { CtaSection } from '@/components/home/cta-section';

export const metadata = {
  title: "Jasa Pembuatan SaaS Development Indonesia | Platform SaaS Scalable",
  description: "Jasa pembuatan platform SaaS yang scalable dan customizable. Solusi SaaS untuk berbagai industri dengan subscription management, multi-tenant, dan cloud architecture. Mulai dari 25 juta.",
  keywords: [
    "jasa pembuatan SaaS",
    "SaaS development Indonesia",
    "bikin platform SaaS",
    "software as a service Indonesia",
    "cloud based software",
    "subscription software",
    "multi-tenant application",
    "SaaS architecture"
  ],
  alternates: {
    canonical: "https://slaviors.id/services/saas-development",
  },
  openGraph: {
    title: "Jasa Pembuatan SaaS Development Indonesia | Platform SaaS Scalable",
    description: "Jasa pembuatan platform SaaS yang scalable dan customizable untuk berbagai industri.",
    url: "https://slaviors.id/services/saas-development",
    images: [
      {
        url: "/images/og-saas-development.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan SaaS Development",
      },
    ],
  },
};

export default function SaaSDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Development",
    "description": "Jasa pembuatan platform SaaS (Software as a Service) yang scalable, multi-tenant, dan cloud-based untuk berbagai industri.",
    "provider": {
      "@type": "Organization",
      "name": "Slaviors Group",
      "url": "https://slaviors.id"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "serviceType": "SaaS Development",
    "offers": {
      "@type": "Offer",
      "name": "SaaS Development Package",
      "description": "Platform SaaS complete dengan subscription management, multi-tenant architecture, dan cloud infrastructure",
      "price": "25000000",
      "priceCurrency": "IDR"
    }
  };
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Based Architecture",
      description: "Infrastruktur cloud yang scalable dan reliable untuk handle ribuan users"
    },
    {
      icon: Users,
      title: "Multi-User Management",
      description: "Sistem user management lengkap dengan role & permission yang fleksibel"
    },
    {
      icon: Lock,
      title: "Keamanan Enterprise",
      description: "Enkripsi data, authentication, dan security best practices"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Database design yang efisien untuk performa tinggi dengan data besar"
    },
    {
      icon: RefreshCw,
      title: "Auto-Update & Sync",
      description: "Update otomatis tanpa downtime dan real-time data synchronization"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Dashboard lengkap dengan insights dan reporting yang powerful"
    }
  ];

  const useCases = [
    {
      icon: Settings,
      title: "Business Management",
      description: "CRM, ERP, Project Management, Inventory System",
      examples: ["Sales tracking", "Customer management", "Task automation"]
    },
    {
      icon: Layers,
      title: "Workflow Automation",
      description: "Otomasi proses bisnis untuk efisiensi maksimal",
      examples: ["Approval system", "Document workflow", "Task scheduling"]
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Platform kolaborasi tim dengan real-time features",
      examples: ["Team chat", "File sharing", "Project tracking"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Sistem manajemen data dengan analitik canggih",
      examples: ["Data visualization", "Report generation", "Forecasting"]
    }
  ];

  const pricingModels = [
    {
      name: "MVP Development",
      price: "Mulai dari 25jt",
      duration: "3-4 bulan",
      description: "Minimum Viable Product untuk validasi ide bisnis Anda",
      features: [
        "Core features essential",
        "User authentication & management",
        "Basic admin dashboard",
        "Database design & setup",
        "Cloud deployment",
        "3 bulan support & maintenance",
        "Bug fixes & minor updates"
      ],
      popular: false
    },
    {
      name: "Full SaaS Platform",
      price: "Mulai dari 50jt",
      duration: "4-6 bulan",
      description: "Platform SaaS lengkap siap untuk scale dan monetization",
      features: [
        "Complete feature set",
        "Advanced user management",
        "Multi-tenant architecture",
        "Payment gateway integration",
        "Advanced analytics dashboard",
        "API documentation",
        "Mobile responsive",
        "6 bulan support & maintenance",
        "Training & handover"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom pricing",
      duration: "6+ bulan",
      description: "Solusi enterprise dengan kompleksitas tinggi dan integrasi sistem",
      features: [
        "Custom architecture design",
        "Third-party integrations",
        "Advanced security features",
        "Load balancing & scaling",
        "Dedicated infrastructure",
        "White-label solution",
        "Priority support 24/7",
        "Custom SLA agreement",
        "Ongoing development support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Analisis mendalam business model, user flow, dan technical requirements"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design system architecture, database schema, dan tech stack selection"
    },
    {
      step: "03",
      title: "MVP Development",
      description: "Development core features untuk testing dan validation"
    },
    {
      step: "04",
      title: "Testing & Iteration",
      description: "User testing, feedback gathering, dan iterative improvements"
    },
    {
      step: "05",
      title: "Launch & Scale",
      description: "Production deployment, monitoring, dan continuous optimization"
    }
  ];

  const techStack = [
    "Next.js", "React", "Node.js", "PostgreSQL", 
    "Redis", "AWS/GCP", "Docker", "Kubernetes",
    "Stripe", "Firebase", "GraphQL", "TypeScript"
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
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="SaaS Development"
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
            SaaS Development
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Bangun platform SaaS yang scalable, secure, dan profitable untuk bisnis Anda
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SaaS yang Siap Scale & Monetize
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Software as a Service (SaaS) adalah model bisnis yang terus berkembang. Kami membantu Anda mengubah ide menjadi <strong>platform SaaS yang profitable</strong> dengan teknologi cloud-native yang scalable.
                </p>
                <p>
                  Dari MVP untuk validasi pasar hingga enterprise solution yang kompleks, kami pastikan arsitektur yang solid, keamanan yang ketat, dan user experience yang smooth untuk mendukung pertumbuhan bisnis Anda.
                </p>
                <p>
                  Yang membedakan? Kami bukan hanya developer, tapi <strong>tech partner</strong> yang memahami business model SaaS dan membantu strategi go-to-market Anda.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Cloud Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Secure by Design</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                alt="SaaS Platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
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
              Fitur & Keunggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Platform SaaS yang kami bangun dilengkapi dengan fitur-fitur enterprise-grade
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jenis SaaS yang Kami Kembangkan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dari berbagai industri dan use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#815854] transition-colors duration-300">
                    <useCase.icon className="w-6 h-6 text-[#815854] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-[#815854] bg-[#F9EBDE] px-3 py-1 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Investment Model
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih model development yang sesuai dengan stage bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                  model.popular
                    ? 'border-[#815854] shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#815854]'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#815854] text-white text-xs font-bold px-4 py-2 rounded-full">
                      PALING POPULER
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {model.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#815854] mb-1">
                    {model.price}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    Timeline: {model.duration}
                  </div>
                  <p className="text-sm text-gray-600">
                    {model.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, idx) => (
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
                    model.popular
                      ? 'bg-[#815854] text-white hover:bg-[#6d4a47]'
                      : 'bg-white text-[#815854] border-2 border-[#815854] hover:bg-[#815854] hover:text-white'
                  }`}
                >
                  Diskusi Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologi agile untuk delivery yang cepat dan berkualitas
            </p>
          </div>

          <div className="relative">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Tech Stack untuk SaaS Modern
            </h3>
            <p className="text-gray-600">Teknologi enterprise-grade untuk reliability & scalability</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#815854] hover:text-[#815854] transition-all duration-300"
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