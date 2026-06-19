import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Skyscraper Photo - Left aligned primarily, right half gets the overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop')`,
        }}
      >
        {/* Soft Left Side Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/30 to-transparent" />
      </div>

      {/* Right Half Dark Navy Geometric Overlay with Diagonal Slice */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-10 bg-brand-navy/85 lg:bg-brand-navy/90 backdrop-blur-sm lg:backdrop-blur-0"
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      />
      
      {/* Fallback overlay for mobile where clip-path might look too dramatic */}
      <div className="absolute inset-0 bg-brand-navy/70 z-[5] lg:hidden" />

      {/* Sharp-cut decorative triangles & chevrons (Geometric diagonal shapes) */}
      <div className="absolute top-0 right-1/4 w-32 h-screen z-[11] hidden lg:block pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-32 h-32 bg-brand-steel-light/10"
          style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-24 h-48 bg-brand-steel-medium/10"
          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
        />
      </div>

      {/* Hero content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Spacer for background view on large screens */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right side aligned text content */}
          <div className="lg:col-span-7 text-left lg:pl-12 flex flex-col justify-center">
            {/* Tagline Pre-header with arrow chevron detail */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-brand-steel-light font-mono text-xs uppercase tracking-[0.25em] mb-4 bg-brand-steel-medium/10 py-1.5 px-3.5 border-l-2 border-brand-steel-light"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            >
              <span className="w-1.5 h-1.5 bg-brand-steel-light inline-block rounded-full animate-ping mr-1" />
              Focus Industrial & Trading
            </motion.div>

            {/* Giant Title: STAY FOCUSED */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white leading-tight uppercase tracking-tight"
            >
              STAY <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-steel-light to-brand-steel-medium">
                FOCUSED
              </span>
            </motion.h1>

            {/* Subtitle / Tagline: Get it DONE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 flex items-center space-x-4"
            >
              <div className="h-1.5 w-16 bg-brand-steel-light" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-steel-light tracking-wide uppercase">
                Get it DONE
              </h2>
            </motion.div>

            {/* Introductory statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans"
            >
              Bridging global manufacturing, custom product engineering, and door-to-door full-integration supply chains. Serving world-class projects from the Far East to the Mediterranean Mediterranean.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              {/* Primary Anchor CTA - sharp chevron cut path */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-xs font-mono font-bold uppercase tracking-wider text-white bg-brand-steel-medium hover:bg-brand-steel-light transition-all duration-300 shadow-lg shadow-brand-navy/55"
                style={{ clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)' }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              {/* Secondary Anchor CTA */}
              <a
                href="#services"
                className="inline-flex items-center space-x-2 text-xs font-mono text-gray-300 hover:text-white uppercase tracking-wider transition-colors py-3 px-4 border border-gray-600/30 hover:border-brand-steel-light/60 bg-white/5"
                style={{ clipPath: 'polygon(0 0, 94% 0, 100% 100%, 6% 100%)' }}
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Global cities highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-700/40 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div>
                <span className="block text-xs font-mono text-brand-steel-light">Middle East</span>
                <span className="block text-sm font-sans font-medium text-white">Cairo · Riyadh · Mecca</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-brand-steel-light">Asia</span>
                <span className="block text-sm font-sans font-medium text-white">Guangzhou · HK</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-brand-steel-light">Mediterranean</span>
                <span className="block text-sm font-sans font-medium text-white">Istanbul · Damietta</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-brand-steel-light">Partnerships</span>
                <span className="block text-sm font-sans font-medium text-white">24+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom absolute Chevron scroller */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-brand-steel-light transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
