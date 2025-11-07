"use client"

export function StatsGrid({ stats }) {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-[#F9EBDE] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-10 h-10 text-[#815854] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-800">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}