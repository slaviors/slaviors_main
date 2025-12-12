"use client"

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [typedCode, setTypedCode] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    'const project = {',
    '  name: "Your Business",',
    '  status: "scaling",',
    '  tech: ["Next.js", "React"],',
    '  performance: "blazing fast"',
    '};',
    '',
    'function buildSuccess() {',
    '  return innovation + dedication;',
    '}'
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // Reset animation after completion
      const timer = setTimeout(() => {
        setTypedCode('');
        setCurrentLine(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const currentText = codeLines.slice(0, currentLine + 1).join('\n');
    const targetLength = currentText.length;
    
    if (typedCode.length < targetLength) {
      const timer = setTimeout(() => {
        setTypedCode(currentText.slice(0, typedCode.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [typedCode, currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Wujudkan Potensi Bisnis
              <br />
              <span className="text-[#815854]">di Era Digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Kami membangun website, SaaS, dan software custom dengan teknologi modern. 
              Solusi digital yang cepat, scalable, dan siap mengembangkan bisnis Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6283160581462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#815854] rounded-full hover:bg-[#6d4a47] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#815854] border-2 border-[#815854] rounded-full hover:bg-[#815854] hover:text-white transition-all duration-300"
              >
                Lihat Layanan
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Value Props */}
            <div className="hidden sm:grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#815854] mb-1">Fast</div>
                <div className="text-sm text-gray-600">Performa Tinggi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#815854] mb-1">Secure</div>
                <div className="text-sm text-gray-600">Keamanan Terjaga</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#815854] mb-1">Scalable</div>
                <div className="text-sm text-gray-600">Siap Berkembang</div>
              </div>
            </div>
          </div>

          {/* Right Side - Code Editor Animation */}
          <div className="animate-slideInRight">
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              {/* Editor Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm font-mono">
                  project.js
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-hidden" style={{ minHeight: '400px' }}>
                <pre className="text-gray-300 leading-relaxed">
                  <code>
                    {typedCode.split('\n').map((line, i) => (
                      <div key={i} className="hover:bg-gray-800/50 transition-colors">
                        <span className="text-gray-600 select-none inline-block w-8 text-right mr-4">
                          {i + 1}
                        </span>
                        <span className="text-gray-300">
                          {line.includes('const') || line.includes('function') ? (
                            <>
                              <span className="text-purple-400">
                                {line.match(/(const|function)/)?.[0]}
                              </span>
                              {line.replace(/(const|function)/, '')}
                            </>
                          ) : line.includes('name') || line.includes('status') || line.includes('tech') || line.includes('performance') ? (
                            <>
                              <span className="text-blue-400">
                                {line.match(/\w+(?=:)/)?.[0]}
                              </span>
                              {line.replace(/\w+(?=:)/, '')}
                            </>
                          ) : line.includes('return') ? (
                            <>
                              <span className="text-pink-400">return</span>
                              {line.replace('return', '')}
                            </>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}
                    <span className="inline-block w-2 h-5 bg-[#815854] animate-pulse ml-1"></span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Customer Benefits */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              {['Siap Pakai', 'Hemat Biaya', 'Responsif', 'Maintenance Terjamin'].map((benefit) => (
                <div
                  key={benefit}
                  className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:border-[#815854] hover:text-[#815854] transition-all"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.2s both;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
}