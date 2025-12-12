import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';

export function PackageCard({ name, price, duration, description, features, popular = false, className = "" }) {
  return (
    <div className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${
      popular 
        ? 'border-[#815854] shadow-xl scale-105' 
        : 'border-gray-200 hover:border-[#815854]'
    } ${className}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-linear-to-r from-[#815854] to-[#6d4a47] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h3>
          {duration && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
          <div className="text-3xl font-bold text-[#815854] mb-2">
            {price}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#F9EBDE] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#815854]" />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/6283160581462"
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            popular
              ? 'bg-[#815854] text-white hover:bg-[#6d4a47] shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-900 hover:bg-[#815854] hover:text-white'
          }`}
        >
          Konsultasi Sekarang
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
