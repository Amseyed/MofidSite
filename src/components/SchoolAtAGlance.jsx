import React from 'react'
import { glanceFeatures } from '../data.js'
import { iconMap, IconPlay, IconArrowLeft } from './Icons.jsx'

export default function SchoolAtAGlance() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video card */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-lg group aspect-video">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
              alt="مدرسه در یک نگاه"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/40"></div>
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <IconPlay className="w-7 h-7 text-teal" />
              </span>
            </button>
            <div className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
              <span className="text-white text-sm font-medium">ویدیو معرفی مدرسه</span>
            </div>
          </div>

          {/* Text + features */}
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">مدرسه در یک نگاه</span>
            <h2 className="section-title mb-4">
              جایی برای رشد و یادگیری
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              دبیرستان مفید با بیش از دو دهه تجربه در آموزش، فضایی پویا و انسانی را برای رشد همه‌جانبه دانش‌آموزان فراهم کرده است. ما باور داریم مدرسه تنها جایی برای یادگیری درس نیست، بلکه مکانی برای تجربه زندگی است.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {glanceFeatures.map((feature) => {
                const Icon = iconMap[feature.icon]
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-teal-50 rounded-xl">
                      {Icon && <Icon className="w-5 h-5 text-teal" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy mb-0.5">{feature.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <a href="#" className="btn-primary">
              بیشتر بدانید
              <IconArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
