import React, { useState } from 'react'
import MofidLogo from './MofidLogo.jsx'
import { navLinks } from '../data.js'
import { IconSearch, IconMenu, IconClose } from './Icons.jsx'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* Top bar */}
      <div className="bg-teal-700 text-white text-xs py-2 hidden md:block">
        <div className="container-page flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>۰۵۱-۳۸۹۸۷۶۵۴</span>
            <span className="opacity-60">|</span>
            <span>info@mofid-school.ir</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange transition-colors">سامانه آموزشی</a>
            <span className="opacity-60">|</span>
            <a href="#" className="hover:text-orange transition-colors">پورتال معلمان</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-page">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo - right side in RTL */}
            <a href="#" className="flex-shrink-0">
              <MofidLogo className="h-14" showHeading />
            </a>

            {/* Navigation - center */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.active
                      ? 'text-teal bg-teal-50'
                      : 'text-slate-600 hover:text-teal hover:bg-teal-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Search + CTA - left side */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-40 px-4 py-2 pr-10 text-sm rounded-lg border border-slate-200 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                />
                <IconSearch className="w-4 h-4 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
              <a href="#" className="btn-primary text-sm py-2.5">
                دسترسی سریع
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="منو"
            >
              {mobileMenuOpen ? <IconClose className="w-7 h-7" /> : <IconMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <nav className="container-page py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    link.active
                      ? 'text-teal bg-teal-50'
                      : 'text-slate-600 hover:text-teal hover:bg-teal-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="جستجو..."
                    className="w-full px-4 py-2 pr-10 text-sm rounded-lg border border-slate-200 focus:border-teal focus:outline-none"
                  />
                  <IconSearch className="w-4 h-4 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                <a href="#" className="btn-primary text-sm py-2.5">
                  دسترسی سریع
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
