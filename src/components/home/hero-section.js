"use client"

export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Solusi Digital Modern <br />
              untuk Bisnis <span className="text-[#815854]">Anda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kami menghadirkan website dan software dengan teknologi terkini yang cepat, SEO-friendly, dan siap mengembangkan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-[#815854] rounded-lg hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Mulai Konsultasi Gratis
              </a>
              <a
                href="#layanan"
                className="px-8 py-4 text-lg font-semibold text-[#815854] border-2 border-[#815854] rounded-lg hover:bg-[#815854] hover:text-white transition-all duration-300"
              >
                Lihat Layanan Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary content untuk testing scroll */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600">Section lainnya akan ditambahkan di sini</p>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </>
  )
}