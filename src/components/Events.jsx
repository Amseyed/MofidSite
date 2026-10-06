import React from 'react'
import { events } from '../data.js'
import { IconArrowLeft, IconArrowUpLeft } from './Icons.jsx'

export default function Events() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">رویدادهای آینده</span>
            <h2 className="section-title">برنامه‌های پیش‌رو</h2>
          </div>
          <a href="#" className="text-teal text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
            مشاهده همه رویدادها
            <IconArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-orange text-white rounded-xl px-3 py-2 text-center min-w-[3.5rem] shadow-lg">
                  <div className="text-xl font-bold leading-none">{event.day}</div>
                  <div className="text-xs mt-0.5">{event.month}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-teal bg-teal-50 px-2.5 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{event.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-teal text-sm font-medium hover:gap-2 transition-all"
                >
                  جزئیات بیشتر
                  <IconArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
