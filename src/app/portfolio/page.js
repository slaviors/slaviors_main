"use client"

import { Rocket, Code2, Clock } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Coming Soon Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(#815854 1px, transparent 1px),
                linear-gradient(90deg, #815854 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Code2 className="absolute top-20 left-[10%] w-12 h-12 text-[#815854]/10 animate-float" />
            <Rocket className="absolute top-40 right-[15%] w-10 h-10 text-[#815854]/10 animate-float-delayed" />
            <Clock className="absolute bottom-32 left-[20%] w-14 h-14 text-[#815854]/10 animate-float" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fadeIn">
                Portfolio
                <br />
                <span className="text-[#815854]">Coming Soon</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
                Kami sedang menyiapkan showcase portfolio proyek-proyek terbaik kami. 
                Sementara itu, hubungi kami untuk melihat contoh karya dan diskusi project Anda.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.me/6283160581462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#815854] rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 shadow-lg animate-fadeIn"
              >
                <span>Hubungi Kami untuk Info Portfolio</span>
              </a>

              {/* Additional Info */}
              <div className="mt-16 pt-8 border-t border-gray-200 animate-fadeIn">
                <p className="text-sm text-gray-500 mb-4">
                  Sementara waktu, Anda dapat menghubungi kami untuk:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="px-4 py-2 bg-[#F9EBDE] rounded-full text-sm font-medium text-gray-700">
                    Melihat Portfolio
                  </div>
                  <div className="px-4 py-2 bg-[#F9EBDE] rounded-full text-sm font-medium text-gray-700">
                    Konsultasi Project
                  </div>
                  <div className="px-4 py-2 bg-[#F9EBDE] rounded-full text-sm font-medium text-gray-700">
                    Request Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
