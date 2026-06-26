import React from 'react'

export function SchedulePreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Race Schedule</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((race) => (
            <div key={race} className="border border-white/10 rounded-lg p-6 hover:border-[#d4af7a] transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Race {race}</h3>
                  <p className="text-white/60 mt-1">TBD Track</p>
                </div>
                <span className="text-[#d4af7a] font-mono">TBD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}