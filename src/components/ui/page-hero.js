"use client"

import Image from "next/image"

export function PageHero({ 
  title, 
  description, 
  lastUpdated,
  backgroundImage 
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay - gradient dari cream ke transparent */}
          <div className="absolute inset-0 z-10 bg-linear-to-br from-[#F9EBDE]/95 via-[#F9EBDE]/90 to-[#F9EBDE]/85" />
        </>
      )}
      
      {/* Fallback gradient jika tidak ada image */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-linear-to-br from-[#F9EBDE] to-white" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-6">
          
          {lastUpdated && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-[#815854] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Diperbarui {lastUpdated}
              </span>
            </div>
          )}

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {/* Decorative Line */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-20 bg-[#815854] rounded-full"></div>
              <div className="h-1 w-12 bg-[#815854]/60 rounded-full"></div>
              <div className="h-1 w-6 bg-[#815854]/30 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#815854]/20 to-transparent"></div>
    </section>
  )
}