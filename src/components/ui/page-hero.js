"use client"

import Image from "next/image"

export function PageHero({ 
  icon: Icon, 
  title, 
  description, 
  lastUpdated,
  backgroundImage 
}) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
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
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#F9EBDE]/95 via-[#F9EBDE]/90 to-[#F9EBDE]/85" />
        </>
      )}
      
      {/* Fallback gradient jika tidak ada image */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F9EBDE] to-white" />
      )}

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#815854] rounded-full mb-6 shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-700 mb-2">
              {description}
            </p>
          )}
          
          {lastUpdated && (
            <p className="text-sm text-gray-600">
              Terakhir diperbarui: {lastUpdated}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}