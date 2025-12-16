import React from 'react';
import { 
  Workflow, Database, Settings, 
  LineChart, FileText, CheckCircle2, Puzzle, Monitor
} from 'lucide-react';
import { FeatureCard, PackageCard, ProcessStep } from '@/components/services';
import { CtaSection } from '@/components/home/cta-section';

export const metadata = {
  title: "Jasa Custom Software Indonesia | ERP CRM untuk Seluruh Indonesia",
  description: "Jasa custom website & pembuatan software profesional melayani Jakarta, Surabaya, Bandung, Jogja & seluruh Indonesia. Sistem informasi management, ERP, CRM untuk UMKM dan bisnis. Software inventory, HRD, accounting. 100% online, konsultasi gratis!",
  keywords: [
    "jasa custom software",
    "jasa custom website",
    "jasa pembuatan software",
    "custom software indonesia",
    "jasa software jakarta",
    "jasa pembuatan software jakarta",
    "sistem informasi management",
    "software ERP CRM",
    "software inventory untuk UMKM",
    "aplikasi bisnis custom",
    "software akuntansi",
    "software HRD",
    "vendor development",
    "jasa software surabaya",
    "jasa software bandung"
  ],
  alternates: {
    canonical: "https://slaviors.id/services/custom-software",
  },
  openGraph: {
    title: "Jasa Pembuatan Software Custom & ERP CRM | Software House Yogyakarta",
    description: "Jasa pembuatan software custom, ERP, CRM, sistem informasi management untuk UMKM dan bisnis.",
    url: "https://slaviors.id/services/custom-software",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Software Custom",
      },
    ],
  },
};

export default function CustomSoftwarePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development",
    "description": "Jasa pembuatan software custom, aplikasi bisnis, ERP, CRM, sistem informasi management yang disesuaikan dengan kebutuhan bisnis Anda.",
    "provider": {
      "@type": "Organization",
      "name": "Slaviors Group",
      "url": "https://slaviors.id"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "serviceType": "Custom Software Development",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "15000000",
      "highPrice": "100000000",
      "priceCurrency": "IDR",
      "offerCount": "3"
    }
  };
  const features = [
    {
      icon: Puzzle,
      title: "Fully Customizable",
      description: "Solusi yang 100% disesuaikan dengan workflow dan kebutuhan bisnis Anda"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Otomasi proses bisnis repetitif untuk efisiensi dan produktivitas maksimal"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Sistem manajemen data yang terstruktur, aman, dan mudah diakses"
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Dashboard analitik dengan visualisasi data untuk decision making yang lebih baik"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Integrasi dengan sistem existing atau third-party services"
    },
    {
      icon: Monitor,
      title: "Desktop & Web App",
      description: "Aplikasi desktop maupun web sesuai kebutuhan operasional bisnis"
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Sistem Informasi Management",
      description: "ERP, CRM, HRM, Inventory, dan sistem management lainnya",
      industries: ["Manufacturing", "Retail", "Healthcare", "Education"]
    },
    {
      icon: Workflow,
      title: "Workflow & Approval System",
      description: "Otomasi alur kerja dan sistem approval multi-level",
      industries: ["Corporate", "Government", "Finance", "Legal"]
    },
    {
      icon: Database,
      title: "Database & Reporting System",
      description: "Sistem database kompleks dengan reporting dan analytics",
      industries: ["Research", "Analytics", "Insurance", "Banking"]
    },
    {
      icon: LineChart,
      title: "Business Intelligence Tools",
      description: "Tools analitik untuk monitoring dan forecasting bisnis",
      industries: ["Sales", "Marketing", "Operations", "Finance"]
    }
  ];

  const solutions = [
    {
      name: "Small Business Software",
      price: "Mulai dari 15jt",
      duration: "2-3 bulan",
      description: "Solusi software untuk UMKM dan bisnis kecil",
      features: [
        "3-5 modul utama",
        "User management basic",
        "Simple dashboard & reporting",
        "Database design",
        "Desktop atau web app",
        "Training & documentation",
        "3 bulan support"
      ],
      popular: false
    },
    {
      name: "Medium Business System",
      price: "Mulai dari 35jt",
      duration: "3-5 bulan",
      description: "Sistem informasi lengkap untuk bisnis menengah",
      features: [
        "8-12 modul terintegrasi",
        "Multi-user & role management",
        "Advanced dashboard & analytics",
        "Complex database design",
        "API integration ready",
        "Mobile responsive (web)",
        "Automated backup system",
        "6 bulan support & maintenance",
        "On-site training"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom pricing",
      duration: "6+ bulan",
      description: "Solusi enterprise dengan kompleksitas tinggi",
      features: [
        "Unlimited modules",
        "Complex workflow automation",
        "Enterprise-grade security",
        "Multi-location support",
        "Third-party integration",
        "Real-time data sync",
        "Dedicated server setup",
        "Custom SLA & support",
        "Continuous development",
        "On-demand consultation"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Deep dive ke business process, pain points, dan ekspektasi hasil"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design system architecture, database, dan user interface"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development dengan testing di setiap sprint"
    },
    {
      step: "04",
      title: "Deployment & Training",
      description: "Deploy ke production dan training user & admin"
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, bug fixes, dan feature enhancement"
    }
  ];

  const techStack = [
    "Python", "Java", "C#", ".NET", 
    "PHP", "Laravel", "Node.js", "React",
    "PostgreSQL", "MySQL", "MongoDB", "Redis"
  ];

  const benefits = [
    {
      title: "Efisiensi Operasional",
      description: "Otomasi proses manual menghemat waktu hingga 70%",
      percentage: "70%"
    },
    {
      title: "Data Akurat Real-time",
      description: "Keputusan bisnis berdasarkan data yang akurat dan update",
      percentage: "100%"
    },
    {
      title: "ROI Jangka Panjang",
      description: "Investasi software custom lebih hemat dalam jangka panjang",
      percentage: "3x"
    }
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
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
            alt="Custom Software Development"
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
            Custom Software Development
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Software yang dirancang khusus untuk menyelesaikan challenge unik bisnis Anda
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Software yang Fit dengan Bisnis Anda
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Setiap bisnis punya challenge dan workflow yang unik. Off-the-shelf software sering kali tidak bisa mengakomodasi kebutuhan spesifik Anda. Di sinilah <strong>custom software</strong> jadi solusi.
                </p>
                <p>
                  Kami membangun software dari nol yang disesuaikan 100% dengan business process Anda. Dari sistem informasi management, workflow automation, hingga business intelligence tools - semuanya dirancang untuk meningkatkan efisiensi dan produktivitas tim Anda.
                </p>
                <p>
                  Tidak ada fitur yang tidak Anda butuhkan, tidak ada pembayaran untuk user yang tidak dipakai. <strong>Bayar sekali, pakai selamanya</strong> - tidak ada biaya subscription bulanan.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">100% Customizable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">No Monthly Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#815854]" />
                  <span className="text-sm font-medium text-gray-700">Full Ownership</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Custom Software"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-[#F9EBDE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#815854] mb-3">
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 grid-pattern-blog"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur & Keunggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Software yang powerful, fleksibel, dan mudah digunakan
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

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jenis Software yang Kami Kembangkan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi untuk berbagai industri dan kebutuhan bisnis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F9EBDE] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#815854] transition-colors duration-300">
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
                  {useCase.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-[#815854] bg-[#F9EBDE] px-3 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Investment Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Investasi yang sesuai dengan skala dan kompleksitas bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <PackageCard
                key={index}
                name={solution.name}
                price={solution.price}
                duration={solution.duration}
                description={solution.description}
                features={solution.features}
                popular={solution.popular}
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
              Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologi yang proven untuk delivery berkualitas
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
              Technology Stack
            </h3>
            <p className="text-gray-600">Kami pilih teknologi yang paling sesuai dengan kebutuhan project Anda</p>
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