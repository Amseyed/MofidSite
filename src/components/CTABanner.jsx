import React from 'react'
import { IconArrowLeft } from './Icons.jsx'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-teal py-16 lg:py-24">
      {/* Decorative arch pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M50 400 L50 150 Q50 30 200 30 Q350 30 350 150 L350 400" stroke="white" strokeWidth="2" />
        <path d="M200 400 L200 200 Q200 100 320 100 Q440 100 440 200 L440 400" stroke="white" strokeWidth="2" />
        <path d="M800 400 L800 100 Q800 0 950 0 Q1100 0 1100 100 L1100 400" stroke="white" strokeWidth="2" />
        <path d="M950 400 L950 180 Q950 80 1050 80 Q1150 80 1150 180 L1150 400" stroke="white" strokeWidth="2" />
      </svg>

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            انتظارات مفید از ما
          </h2>
          <p className="text-teal-50 text-lg mb-8 leading-relaxed">
            با هم برای ساختن مدرسه‌ای بهتر. ما باور داریم که مشارکت و هم‌اندیشی، کلید ساختن آینده‌ای روشن برای دانش‌آموزان است.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-teal px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-orange hover:text-white hover:shadow-lg hover:-translate-y-0.5"
          >
            مشاهده انتظارات
            <IconArrowLeft className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
