import React from 'react'
import { newsItems } from '../data.js'
import { IconArrowLeft, IconArrowUpLeft } from './Icons.jsx'

export default function News() {
  return (
    <section id="news" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">آخرین اخبار</span>
            <h2 className="section-title">اخبار مدرسه</h2>
          </div>
          <a href="#" className="text-teal text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
            مشاهده همه اخبار
            <IconArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 text-xs font-medium text-white bg-teal px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs text-slate-400 mb-2 block">{item.date}</span>
                <h3 className="text-sm font-bold text-navy mb-2 group-hover:text-teal transition-colors leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-teal text-xs font-medium hover:gap-2 transition-all"
                >
                  ادامه مطلب
                  <IconArrowUpLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
