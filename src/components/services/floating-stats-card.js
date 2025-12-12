import React from 'react';

export function FloatingStatsCard({ icon: Icon, value, label, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-linear-to-br from-[#815854] to-[#6d4a47] rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="text-2xl font-bold text-[#815854] leading-none mb-1">
            {value}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
