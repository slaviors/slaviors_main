"use client"

import React from 'react';
import { PageHero } from '@/components/ui/page-hero';
import { Target, Eye, Award, Users, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Tentang Slaviors Group | Software House Yogyakarta Sejak 2023",
  description: "Slaviors Group adalah software house Yogyakarta yang berdiri sejak 2023. Kami menyediakan solusi digital untuk UMKM dan bisnis: jasa pembuatan website, SaaS, dan custom software dengan teknologi modern.",
  keywords: [
    "software house Yogyakarta",
    "tentang Slaviors Group",
    "IT company Yogyakarta",
    "web development agency",
    "software development company",
    "digital solution Indonesia"
  ],
  alternates: {
    canonical: "https://slaviors.id/about",
  },
  openGraph: {
    title: "Tentang Slaviors Group | Software House Yogyakarta Sejak 2023",
    description: "Software house Yogyakarta yang menyediakan solusi digital untuk UMKM dan bisnis di Indonesia.",
    url: "https://slaviors.id/about",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Tentang Slaviors Group",
      },
    ],
  },
};

export default function AboutUsPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Tentang Slaviors Group",
    "description": "Slaviors Group adalah software house yang berbasis di Yogyakarta, Indonesia. Kami menyediakan layanan teknologi untuk membantu bisnis bertransformasi digital.",
    "url": "https://slaviors.id/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Slaviors Group",
      "foundingDate": "2023",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Yogyakarta",
          "addressCountry": "ID"
        }
      },
      "description": "Perusahaan teknologi yang menyediakan solusi digital untuk UMKM dan bisnis",
      "url": "https://slaviors.id"
    }
  };
  const values = [
    {
      icon: Target,
      title: "Fokus pada Solusi",
      description: "Kami tidak hanya membuat aplikasi, tapi memberikan solusi yang benar-benar menyelesaikan masalah bisnis Anda."
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Setiap project dikerjakan dengan standar kualitas tinggi, dari kode yang clean hingga UI/UX yang intuitif."
    },
    {
      icon: Users,
      title: "Partnership Jangka Panjang",
      description: "Kami bukan hanya vendor, tapi partner yang mendampingi pertumbuhan bisnis Anda."
    }
  ];

  const milestones = [
    { 
      year: "2023", 
      title: "Berdiri", 
      description: "Slaviors Group didirikan dengan visi membantu bisnis bertransformasi digital"
    },
    { 
      year: "2024", 
      title: "Berkembang", 
      description: "Melayani berbagai klien dari UMKM hingga perusahaan menengah"
    },
    { 
      year: "2025", 
      title: "Terus Bertumbuh", 
      description: "Ekspansi layanan dan tim untuk memberikan solusi yang lebih baik"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        title="Tentang Kami"
        description="Partner teknologi terpercaya untuk membantu bisnis Anda bertumbuh di era digital"
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
      />

      {/* Story Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #815854 1px, transparent 1px),
              linear-gradient(to bottom, #815854 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Slaviors Team"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Membangun Solusi Digital untuk Indonesia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Slaviors Group lahir dari visi sederhana: membantu bisnis di Indonesia untuk berkembang melalui teknologi digital yang tepat guna. Sejak 2023, kami fokus memberikan solusi teknologi yang tidak hanya modern, tapi juga benar-benar menjawab kebutuhan bisnis.
                </p>
                <p>
                  Tim kami terdiri dari developer dan designer yang passionate dengan apa yang mereka kerjakan. Kami tidak hanya membuat kode, tapi membangun solusi yang membuat bisnis Anda lebih efisien dan berkembang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-16 bg-[#F9EBDE] overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #815854 1px, transparent 1px),
              linear-gradient(to bottom, #815854 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Prinsip yang Memandu Kami</h2>
            <div className="w-20 h-1 bg-[#815854] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#815854]/20 transition-all duration-300 hover:shadow-lg">
              <Eye className="w-10 h-10 text-[#815854] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi partner teknologi pilihan utama bagi bisnis yang ingin bertransformasi digital dengan solusi yang inovatif, berkualitas, dan terjangkau.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#815854]/20 transition-all duration-300 hover:shadow-lg">
              <Target className="w-10 h-10 text-[#815854] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan solusi teknologi yang membantu bisnis meningkatkan efisiensi, memperluas jangkauan pasar, dan mencapai pertumbuhan yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 overflow-hidden">
        {/* Subtle dots pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #815854 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Yang Kami Pegang Teguh
            </h2>
            <p className="text-gray-600">Prinsip yang menjadi fondasi setiap project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <value.icon className="w-10 h-10 text-[#815854] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#815854] bg-[#F9EBDE] px-4 py-2 rounded-full inline-block mb-4">
              Timeline
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Perjalanan Kami
            </h2>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-[#815854] transition-all duration-1000"></div>
            </div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  {/* Circle Node */}
                  <div className={`relative z-10 flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-all duration-300 ${
                    index < 2 
                      ? 'bg-[#815854] text-white shadow-lg' 
                      : 'bg-white border-4 border-[#815854] text-[#815854]'
                  } group-hover:scale-110`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{milestone.year}</div>
                    </div>
                    
                    {/* Checkmark for completed */}
                    {index < 2 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Progress percentage for current */}
                    {index === 2 && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#815854] text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                        In Progress
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Subtle radial pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #815854 1px, transparent 1px), radial-gradient(circle at 80% 80%, #815854 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wujudkan Potensi Bisnis Anda
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ceritakan kebutuhan bisnis Anda, dan kami akan bantu temukan solusi teknologi yang tepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6283160581462"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#815854] text-white font-semibold rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Hubungi Kami
            </a>
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#815854] font-semibold rounded-full border-2 border-[#815854] hover:bg-[#815854] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Lihat Layanan Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}