"use client"

import React, { useState } from 'react';
import { Gauge, Lock, Smartphone, Server, TrendingUp, MessageCircle } from 'lucide-react';

export function WhyChooseUsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Website yang kami bangun sudah dioptimalkan untuk SEO dengan rating A+, memastikan bisnis Anda mudah ditemukan di mesin pencari.",
      badge: "A+ Rating"
    },
    {
      icon: Gauge,
      title: "Performa Kencang",
      description: "Loading time super cepat dengan teknologi modern. Website yang cepat = user experience yang baik = konversi yang tinggi.",
      badge: "Fast Loading"
    },
    {
      icon: Smartphone,
      title: "100% Responsive",
      description: "Tampilan sempurna di semua device - desktop, tablet, hingga mobile. Tidak ada lagi user yang frustasi karena tampilan berantakan.",
      badge: "All Devices"
    },
    {
      icon: Server,
      title: "Hosting & Maintenance",
      description: "Butuh hosting? Kami sediakan! Termasuk maintenance berkala, update rutin, dan backup otomatis untuk keamanan data Anda.",
      badge: "Available"
    },
    {
      icon: Lock,
      title: "99.9% Uptime",
      description: "Website Anda online 24/7 tanpa downtime. Monitoring real-time dan tim standby siap handle jika ada masalah.",
      badge: "24/7 Online"
    },
    {
      icon: MessageCircle,
      title: "Support Responsif",
      description: "Ada masalah? Chat kami kapan saja! Tim support kami siap membantu dan merespons dengan cepat untuk semua kebutuhan Anda.",
      badge: "Quick Response"
    }
  ];

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle Grid Pattern */}
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
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#815854] bg-[#F9EBDE] px-4 py-2 rounded-full">
              Keunggulan Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Pilih <span className="text-[#815854]">Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi digital yang tidak hanya bagus di mata, tapi juga perform maksimal untuk bisnis Anda
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: hoveredCard === index 
                  ? 'translateY(-8px) rotateX(2deg) rotateY(2deg)' 
                  : 'translateY(0) rotateX(0) rotateY(0)',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                boxShadow: hoveredCard === index
                  ? '0 20px 60px -15px rgba(129, 88, 84, 0.4), 0 10px 30px -10px rgba(129, 88, 84, 0.2)'
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Cursor Shadow Effect */}
              {hoveredCard === index && (
                <div
                  className="absolute pointer-events-none rounded-full transition-opacity duration-300"
                  style={{
                    width: '200px',
                    height: '200px',
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(129, 88, 84, 0.15) 0%, transparent 70%)',
                    opacity: 1
                  }}
                />
              )}

              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="text-xs font-semibold text-[#815854] bg-[#F9EBDE] px-3 py-1 rounded-full">
                  {reason.badge}
                </span>
              </div>

              {/* Icon with Unique Design */}
              <div className="relative w-16 h-16 mb-6">
                {/* Rotating Background Circle */}
                <div 
                  className="absolute inset-0 bg-linear-to-br from-[#F9EBDE] to-[#f5ddc8] rounded-full group-hover:rotate-180 transition-all duration-700"
                  style={{
                    transform: hoveredCard === index ? 'translateZ(20px) scale(1.1)' : 'translateZ(0) scale(1)'
                  }}
                />
                
                {/* Icon Container */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: hoveredCard === index ? 'translateZ(25px)' : 'translateZ(0)'
                  }}
                >
                  <div className="relative">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-[#815854] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
                    
                    {/* Main Icon */}
                    <reason.icon className="relative w-8 h-8 text-[#815854] group-hover:text-[#6d4a47] group-hover:scale-110 transition-all duration-300" 
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                
                {/* Animated Ring */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-[#815854] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                  style={{
                    transform: hoveredCard === index ? 'translateZ(15px)' : 'translateZ(0)'
                  }}
                />
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#815854] transition-colors relative z-10"
                style={{
                  transform: hoveredCard === index ? 'translateZ(15px)' : 'translateZ(0)'
                }}
              >
                {reason.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed relative z-10"
                style={{
                  transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0)'
                }}
              >
                {reason.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#815854] group-hover:w-full transition-all duration-500"></div>

              {/* 3D Shine Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(129,88,84,0.05) 100%)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}