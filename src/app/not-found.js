import React from 'react';
import { Home, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9EBDE] flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#815854 1.5px, transparent 1.5px),
            linear-gradient(90deg, #815854 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="w-full max-w-lg relative z-10 text-center">
        {/* Error Code */}
        <div className="flex justify-center mb-6">
          <div className="px-5 py-2.5 bg-[#815854] rounded-full shadow-lg">
            <span className="text-white font-semibold text-sm tracking-wide">ERROR 404</span>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#815854] mb-5 leading-tight">
          Halaman Tidak Ditemukan
        </h1>
        
        {/* Message */}
        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau URL yang Anda masukkan salah.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#815854] text-white font-semibold rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </a>
          <a
            href="https://wa.me/6283160581462"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#815854] font-semibold rounded-full border-2 border-[#815854] hover:bg-[#815854] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}