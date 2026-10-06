import React from 'react'
import { quickAccessItems } from '../data.js'
import { iconMap } from './Icons.jsx'

export default function QuickAccess() {
  return (
    <section className="container-page -mt-2 lg:-mt-6 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickAccessItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <a
              key={item.title}
              href="#"
              className="group flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-teal-50 rounded-full mb-3 group-hover:bg-teal transition-colors duration-300">
                {Icon && <Icon className="w-7 h-7 text-teal group-hover:text-white transition-colors duration-300" />}
              </div>
              <h3 className="text-sm font-bold text-navy mb-1">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
