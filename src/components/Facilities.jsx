import React from 'react'
import { facilities } from '../data.js'
import { IconArrowUpLeft, IconArrowLeft } from './Icons.jsx'

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">فضا و امکانات</span>
            <h2 className="section-title">فضاهای مدرسه</h2>
          </div>
          <a href="#" className="text-teal text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
            مشاهده همه فضاها
            <IconArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 aspect-[3/4]"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
              {/* Circular arrow icon */}
              <div className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-teal transition-colors duration-300">
                <IconArrowUpLeft className="w-4 h-4 text-navy group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <h3 className="text-white text-sm font-bold">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
