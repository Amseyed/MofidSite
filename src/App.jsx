import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import QuickAccess from './components/QuickAccess.jsx'
import SchoolAtAGlance from './components/SchoolAtAGlance.jsx'
import Facilities from './components/Facilities.jsx'
import LifeAtMofid from './components/LifeAtMofid.jsx'
import CTABanner from './components/CTABanner.jsx'
import Events from './components/Events.jsx'
import News from './components/News.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-bg">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <QuickAccess />
        <SchoolAtAGlance />
        <Facilities />
        <LifeAtMofid />
        <CTABanner />
        <Events />
        <News />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
