import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import SuccessStories from './components/SuccessStories';
import MeetTeam from './components/MeetTeam';
import CompanyValues from './components/CompanyValues';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        'home',
        'about',
        'services',
        'how-it-works',
        'projects',
        'success-stories',
        'team',
        'contact',
      ];

      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial call
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-brand-steel-light selection:text-white antialiased">
      {/* Dynamic Header / Top Bar */}
      <Navbar activeSection={activeSection} />

      {/* Hero section with heavy sky-scraper cover */}
      <Hero />

      {/* Industrial partner overview */}
      <About />

      {/* Grid of 8 services with bottom VISION and icons */}
      <Services />

      {/* Staggered process map (Process 01, Process 02, Process 03) */}
      <HowItWorks />

      {/* Toggled / tabbed historical and futuristic commercial lists */}
      <Projects />

      {/* 3 detailed case studies with high-contrast picture grids */}
      <SuccessStories />

      {/* Executive management profiles with specific verified assets */}
      <MeetTeam />

      {/* 6 Grid items and quote "CHANCES LOVE READY" */}
      <CompanyValues />

      {/* Global contacts and validated message dispatch form */}
      <Contact />

      {/* Footer credits and sitemaps */}
      <Footer />
    </div>
  );
}
