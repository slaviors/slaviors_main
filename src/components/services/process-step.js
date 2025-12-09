import React from 'react';

export function ProcessStep({ step, title, description, isLast = false, className = "" }) {
  return (
    <div className={`relative flex flex-col items-center text-center ${className}`}>
      <div className="relative z-10 w-20 h-20 bg-linear-to-br from-[#815854] to-[#6d4a47] rounded-2xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
        <span className="text-white text-2xl font-bold">{step}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
