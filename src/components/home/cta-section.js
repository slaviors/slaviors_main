"use client"

import React from 'react';
import { MessageCircle, ArrowRight, Cloud, Code2, Rocket } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="relative py-20 bg-linear-to-br from-[#815854] to-[#6d4a47] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-[10%] w-12 h-12 text-white/10 animate-float" />
        <Cloud className="absolute top-40 right-[15%] w-10 h-10 text-white/10 animate-float-delayed" />
        <Rocket className="absolute bottom-32 left-[20%] w-14 h-14 text-white/10 animate-float" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Siap Wujudkan Proyek Digital Anda?
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Konsultasikan kebutuhan bisnis Anda dengan tim expert kami. 
            Dapatkan solusi teknologi terbaik untuk mengembangkan bisnis Anda di era digital.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center animate-fadeIn">
            <a
              href="https://wa.me/6283160581462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#815854] bg-white rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
