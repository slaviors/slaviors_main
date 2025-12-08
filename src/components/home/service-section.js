"use client"

import React from 'react';
import { ArrowRight, Code2, Sparkles, Zap, RefreshCw } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Website Development",
      description: "Website modern dan landing page yang cepat, responsive, dan SEO-friendly untuk meningkatkan online presence bisnis Anda.",
      features: ["Desain Modern", "Mobile Responsive", "SEO Optimized"],
      image: "/api/placeholder/600/400",
      link: "/layanan/website-development",
      align: "left"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "SaaS Development",
      description: "Solusi SaaS custom yang scalable untuk efisiensi operasional dan pertumbuhan bisnis yang berkelanjutan.",
      features: ["Cloud-Based", "Scalable", "Multi-User"],
      image: "/api/placeholder/600/400",
      link: "/layanan/saas-development",
      align: "right"
    },
    {
      id: 3,
      icon: Zap,
      title: "Custom Software Development",
      description: "Aplikasi dan sistem informasi management yang disesuaikan dengan kebutuhan spesifik bisnis Anda.",
      features: ["Fully Custom", "Automation", "Integration"],
      image: "/api/placeholder/600/400",
      link: "/layanan/custom-software",
      align: "left"
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Website Modernization",
      description: "Perbarui website lama Anda dengan teknologi terkini untuk performa dan user experience yang lebih baik.",
      features: ["Modern Tech", "Better Performance", "Improved UX"],
      image: "/api/placeholder/600/400",
      link: "/layanan/website-modernization",
      align: "right"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Pattern */}
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-[#815854]">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi teknologi lengkap untuk mengembangkan bisnis Anda di era digital
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} group`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#815854]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-[#815854]" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-block px-4 py-2 bg-[#F9EBDE] rounded-full mb-4">
                  <span className="text-[#815854] font-semibold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#815854] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#815854] text-white font-semibold rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:gap-3 shadow-lg"
                >
                  Selengkapnya
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}