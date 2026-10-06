import React from 'react'
import { lifeAtMofid } from '../data.js'
import { IconArrowLeft } from './Icons.jsx'

export default function LifeAtMofid() {
  return (
    <section id="life" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">زندگی در مفید</span>
            <h2 className="section-title">تجربه‌های دانش‌آموزی</h2>
          </div>
          <a href="#" className="text-teal text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
            بیشتر درباره زندگی در مفید
            <IconArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifeAtMofid.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-base font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  تجربه‌های متنوع برای رشد همه‌جانبه دانش‌آموزان در فضایی پویا و انسانی.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
