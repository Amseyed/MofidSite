import React from 'react'
import { IconArrowLeft } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-neutral-bg overflow-hidden">
      {/* Decorative arch pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M100 600 L100 250 Q100 80 300 80 Q500 80 500 250 L500 600" stroke="#008ea6" strokeWidth="2" />
        <path d="M250 600 L250 300 Q250 160 400 160 Q550 160 550 300 L550 600" stroke="#008ea6" strokeWidth="2" />
        <path d="M700 600 L700 200 Q700 50 900 50 Q1100 50 1100 200 L1100 600" stroke="#008ea6" strokeWidth="2" />
      </svg>

      <div className="container-page relative py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text side (right in RTL) */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal rounded-full"></span>
              مجتمع آموزشی مفید
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
              مدرسه زندگی
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              جایی برای یادگیری، تجربه، انتخاب و رشد
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              دبیرستان دوره اول مفید یادگار امام، با رویکردی مبتنی بر رشد متوازن و یادگیری عمیق، فضایی انسانی و پویا برای شکوفایی استعدادهای دانش‌آموزان فراهم آورده است.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#about" className="btn-primary">
                بیشتر درباره مفید
                <IconArrowLeft className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-outline">
                تماس با مدرسه
              </a>
            </div>
          </div>

          {/* Image side (left in RTL) */}
          <div className="order-1 lg:order-2 relative">
            {/* Arch frame */}
            <div className="relative rounded-t-[6rem] rounded-b-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0146a9?w=800&q=80"
                alt="دانش‌آموزان مفید"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            {/* Decorative arch behind image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-teal-200 rounded-t-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-orange-200 rounded-t-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
