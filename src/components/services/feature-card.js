import React from 'react';

export function FeatureCard({ icon: Icon, title, description, className = "" }) {
  return (
    <div className={`group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#815854] transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="w-14 h-14 bg-linear-to-br from-[#F9EBDE] to-[#fdf5ed] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-[#815854]/10">
        <Icon className="w-7 h-7 text-[#815854]" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
