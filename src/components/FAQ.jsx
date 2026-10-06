import React, { useState } from 'react'
import { faqItems } from '../data.js'
import { IconChevronDown } from './Icons.jsx'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration side */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Large speech bubble illustration */}
              <div className="bg-teal-50 rounded-3xl p-12 flex items-center justify-center aspect-square">
                <svg viewBox="0 0 200 200" className="w-48 h-48" fill="none">
                  {/* Speech bubble */}
                  <path
                    d="M40 30 Q40 20 50 20 L150 20 Q160 20 160 30 L160 110 Q160 120 150 120 L80 120 L60 150 L65 120 L50 120 Q40 120 40 110 Z"
                    fill="white"
                    stroke="#008ea6"
                    strokeWidth="2"
                  />
                  {/* Question marks */}
                  <circle cx="75" cy="65" r="4" fill="#008ea6" />
                  <circle cx="100" cy="65" r="4" fill="#fca311" />
                  <circle cx="125" cy="65" r="4" fill="#008ea6" />
                  <path d="M70 85 Q70 75 80 75 Q90 75 90 85 Q90 92 82 95 L82 100" stroke="#008ea6" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M110 85 Q110 75 120 75 Q130 75 130 85 Q130 92 122 95 L122 100" stroke="#fca311" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Decorative arches */}
                  <path d="M20 180 L20 160 Q20 150 30 150 Q40 150 40 160 L40 180" stroke="#008ea6" strokeWidth="1.5" fill="none" opacity="0.3" />
                  <path d="M160 180 L160 160 Q160 150 170 150 Q180 150 180 160 L180 180" stroke="#fca311" strokeWidth="1.5" fill="none" opacity="0.3" />
                </svg>
              </div>
              {/* CTA below illustration */}
              <div className="mt-6 text-center">
                <a href="#contact" className="btn-secondary">
                  سؤال از شما، پاسخ از ما
                </a>
              </div>
            </div>
          </div>

          {/* Accordion side */}
          <div>
            <span className="text-teal text-sm font-medium mb-2 block">سؤالات متداول</span>
            <h2 className="section-title mb-8">پرسش‌های شما</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === index ? 'border-teal bg-teal-50/30' : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-right"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span className={`text-sm font-bold ${openIndex === index ? 'text-teal' : 'text-navy'}`}>
                      {item.question}
                    </span>
                    <IconChevronDown
                      className={`w-5 h-5 flex-shrink-0 mr-3 transition-all duration-300 ${
                        openIndex === index ? 'text-teal rotate-180' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile CTA */}
            <div className="mt-6 lg:hidden">
              <a href="#contact" className="btn-secondary w-full justify-center">
                سؤال از شما، پاسخ از ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
