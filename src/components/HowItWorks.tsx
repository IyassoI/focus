import React from 'react';
import { PROCESS_STEPS } from '../data';
import { motion } from 'motion/react';
import { Layers, Lightbulb, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const icons = [Layers, Lightbulb, TrendingUp];

  return (
    <section id="how-it-works" className="relative py-24 bg-white text-gray-900 overflow-hidden">
      {/* Background diagonal accents */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-slate-50" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute top-1/2 left-0 w-24 h-48 bg-brand-navy/5" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center space-x-2 text-brand-steel-medium font-mono text-xs uppercase tracking-widest mb-3 justify-center">
            <span className="w-8 h-[1px] bg-brand-steel-medium" />
            <span>OPERATIONAL PIPELINE</span>
            <span className="w-8 h-[1px] bg-brand-steel-medium" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy uppercase tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
            A meticulous, three-stage racing workflow to power your decisions
          </p>
        </div>

        {/* Process Timeline Block */}
        <div className="relative mt-12">
          {/* Middle Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-steel-medium/20 via-brand-steel-light/40 to-brand-steel-medium/20 -translate-x-1/2 hidden lg:block" />

          {/* Staggered Alternating Steps */}
          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((proc, index) => {
              const StepIcon = icons[index];
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={proc.step} 
                  className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Left or Right Content Box (Depends on alignment) */}
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:px-8">
                    <div 
                      className={`w-full max-w-lg bg-brand-navy text-white p-8 sm:p-10 shadow-xl border-t-2 border-brand-steel-light relative group hover:border-white transition-all duration-300 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
                      style={{
                        clipPath: isEven 
                          ? 'polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%)' 
                          : 'polygon(0% 0%, 97% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      {/* Accent corner triangle */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-steel-medium/10 group-hover:bg-brand-steel-medium/20 transition-all" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                      {/* Step Indicator Label */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                        <span className="font-mono text-xs uppercase tracking-widest text-brand-steel-light bg-brand-steel-medium/20 px-3 py-1 border border-brand-steel-light/20">
                          {proc.step}
                        </span>
                      </div>

                      {/* Header Title with Custom Icon */}
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                        {!isEven && <span className="font-display font-medium text-lg text-white hidden lg:inline">{proc.title}</span>}
                        <div className="w-10 h-10 bg-brand-steel-medium flex items-center justify-center text-white" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}>
                          <StepIcon className="w-5 h-5" />
                        </div>
                        {(isEven || !isEven) && <span className="font-display font-bold text-lg text-white lg:hidden">{proc.title}</span>}
                        {isEven && <span className="font-display font-medium text-lg text-white hidden lg:inline">{proc.title}</span>}
                      </div>

                      {/* Card Paragraph Description */}
                      <p className="text-gray-300 text-sm leading-relaxed font-sans mt-3">
                        {proc.description}
                      </p>
                      
                      {/* Metric summary */}
                      <p className="mt-6 text-[10px] font-mono text-brand-steel-light/75 uppercase tracking-widest">
                        Focus Standard Operations Pipeline
                      </p>
                    </div>
                  </div>

                  {/* Centered Node / Badge (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden lg:flex">
                    <div className="w-8 h-8 rounded-full bg-brand-navy border-4 border-brand-steel-light flex items-center justify-center shadow-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Column spacer (Desktop) */}
                  <div className="w-full lg:w-1/2 lg:px-8 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
