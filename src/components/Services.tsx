import React from 'react';
import { SERVICES, BOTTOM_CALLOUT_TEXT } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
  // Helper to dynamically render a Lucide icon component with strict fallback
  const renderIcon = (name: string) => {
    // Cast Icons containing specific components
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-brand-steel-light group-hover:text-white transition-colors duration-300" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-brand-steel-light" />;
  };

  return (
    <section id="services" className="relative py-24 bg-slate-50 text-gray-900 overflow-hidden">
      {/* Background diagonal decorative touches */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-navy/5" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-steel-medium/5" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Intro Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-steel-medium font-mono text-xs uppercase tracking-widest mb-3 justify-center">
            <span className="w-3 h-1.5 bg-brand-steel-medium" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 25% 100%)' }} />
            <span>OUR CORE SOLUTIONS</span>
            <span className="w-3 h-1.5 bg-brand-steel-medium" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 25% 100%)' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy uppercase tracking-tight">
            Focus Services
          </h2>

          <p className="mt-4 text-gray-650 text-sm sm:text-base leading-relaxed">
            In a fast-paced world, we are always ready. We are dedicated to serving your business — we are not just a trading partner or shipping agent. We build cross-continental bridges toward fruitful cooperation.
          </p>
        </div>

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white p-6 sm:p-8 border border-slate-200 hover:border-brand-steel-light hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 92%, 90% 100%, 0 100%)',
              }}
            >
              {/* Top half */}
              <div>
                {/* Numeric label index */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-navy/5 group-hover:bg-brand-steel-medium flex items-center justify-center transition-all duration-300 rounded-none border border-slate-200/50 group-hover:border-transparent"
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
                  >
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-350 tracking-wider">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-brand-navy group-hover:text-brand-steel-medium tracking-wide uppercase transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs text-gray-650 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bottom decorative arrow / chevron anchor link feedback */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-350 group-hover:text-brand-steel-medium transition-colors">
                <span>Core Pillar</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:-translate-y-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Prominent Callout Banner (Dark Navy) */}
        <div 
          className="mt-16 bg-brand-navy text-white relative overflow-hidden shadow-xl"
          style={{
            clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)',
          }}
        >
          {/* Subtle geometric line overlay patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-[20%] w-12 h-full bg-brand-steel-light rotate-[30deg] transform" />
            <div className="absolute top-0 right-[25%] w-4 h-full bg-brand-steel-light rotate-[30deg] transform" />
          </div>

          <div className="px-8 py-10 md:py-12 md:px-16 text-center relative z-10 max-w-5xl mx-auto">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-brand-steel-light block mb-4">
              Our Visionary Code
            </span>
            <p className="text-sm sm:text-lg md:text-xl font-display font-black tracking-wide leading-relaxed uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-steel-light">
              "{BOTTOM_CALLOUT_TEXT}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
