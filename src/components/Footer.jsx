import React from 'react'
import MofidLogo from './MofidLogo.jsx'
import { footerLinks } from '../data.js'
import { IconPhone, IconMail, IconLocation } from './Icons.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-navy text-white overflow-hidden">
      {/* Decorative arch pattern */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none"
        viewBox="0 0 1200 200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M50 200 L50 80 Q50 20 150 20 Q250 20 250 80 L250 200" stroke="white" strokeWidth="2" />
        <path d="M200 200 L200 120 Q200 60 280 60 Q360 60 360 120 L360 200" stroke="white" strokeWidth="2" />
        <path d="M500 200 L500 60 Q500 0 620 0 Q740 0 740 60 L740 200" stroke="white" strokeWidth="2" />
        <path d="M700 200 L700 100 Q700 40 800 40 Q900 40 900 100 L900 200" stroke="white" strokeWidth="2" />
        <path d="M950 200 L950 80 Q950 20 1050 20 Q1150 20 1150 80 L1150 200" stroke="white" strokeWidth="2" />
      </svg>

      <div className="container-page relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo + about */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <MofidLogo className="h-16" showHeading />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              مجتمع آموزشی مفید، مدرسه‌ای برای زندگی، رشد و یادگیری عمیق در فضایی انسانی و پویا.
            </p>
            {/* Social media */}
            <div className="flex items-center gap-3">
              {['telegram', 'instagram', 'aparat', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-teal transition-colors"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">دسترسی سریع</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickAccess.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">پیوندها</h4>
            <ul className="space-y-2.5">
              {['سامانه آموزشی', 'پورتال والدین', 'تقویم مدرسه', 'سؤالات متداول'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-slate-400 hover:text-teal transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <IconLocation className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">{footerLinks.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="w-5 h-5 text-teal flex-shrink-0" />
                <span className="text-sm text-slate-400" dir="ltr">{footerLinks.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="w-5 h-5 text-teal flex-shrink-0" />
                <span className="text-sm text-slate-400" dir="ltr">{footerLinks.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © ۱۴۰۳ دبیرستان دوره اول مفید یادگار امام. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-teal transition-colors">حریم خصوصی</a>
            <a href="#" className="text-xs text-slate-500 hover:text-teal transition-colors">قوانین و مقررات</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
