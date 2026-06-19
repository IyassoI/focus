import React from 'react';
import { VALUES, VALUES_QUOTE } from '../data';
import { ShieldCheck, UserCheck, HeartHandshake, Lightbulb, Users, Compass, HelpCircle } from 'lucide-react';

export default function CompanyValues() {
  const valueIcons = [ShieldCheck, UserCheck, HeartHandshake, Lightbulb, Users, Compass];

  return (
    <section id="values" className="relative py-24 bg-slate-50 text-gray-900 overflow-hidden">
      {/* Background diagonal panels */}
      <div 
        className="absolute bottom-0 left-0 w-[45%] h-full bg-white z-0" 
        style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/[0.03] z-[1]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Grid of 6 Values (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 text-brand-steel-medium font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-[1px] bg-brand-steel-medium" />
              <span>CORE PRINCIPLES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy uppercase tracking-tight">
              The Company Values
            </h2>

            <p className="mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
              Securing operations through foundational metrics
            </p>

            {/* Grid of Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {VALUES.map((val, idx) => {
                const IconComponent = valueIcons[idx] || HelpCircle;
                return (
                  <div
                    key={val}
                    className="bg-white border border-slate-200 p-5 group hover:border-brand-steel-light hover:-translate-y-1 transition-all duration-350"
                    style={{
                      clipPath: 'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)'
                    }}
                  >
                    <div className="w-9 h-9 bg-brand-navy/5 text-brand-steel-medium group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center transition-colors duration-200"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="block mt-4 font-display font-black text-xs text-brand-navy uppercase tracking-wider">
                      {val}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quote of the year "CHANCES LOVE READY" (5 cols) */}
          <div className="lg:col-span-5 bg-brand-navy text-white p-8 sm:p-12 shadow-xl border-l-[6px] border-brand-steel-light relative"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%)'
            }}
          >
            {/* Subtle overlay accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-steel-medium/5 pointer-events-none" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />

            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand-steel-light mb-6 block">
              Motto & Preparedness
            </span>

            {/* Giant quote header */}
            <span className="text-3xl font-display font-black tracking-widest text-white leading-normal uppercase">
              "{VALUES_QUOTE.quote}"
            </span>

            <div className="h-[2px] w-12 bg-brand-steel-light my-6" />

            <p className="text-sm font-sans text-gray-300 leading-relaxed font-light">
              {VALUES_QUOTE.subtext}
            </p>

            <div className="mt-8 pt-4 border-t border-gray-800 text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center justify-between">
              <span>Operational Guideline</span>
              <span>Focus readiness index</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
