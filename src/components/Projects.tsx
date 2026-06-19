import React, { useState } from 'react';
import { CURRENT_PROJECTS, UPCOMING_PROJECTS } from '../data';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Compass, Layers, Hourglass } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'current' | 'upcoming'>('current');

  return (
    <section id="projects" className="relative py-24 bg-brand-navy text-white overflow-hidden">
      {/* Background geometric slices */}
      <div 
        className="absolute bottom-0 right-0 w-[40%] h-1/2 bg-brand-steel-medium/10 pointer-events-none" 
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
      />
      <div 
        className="absolute top-0 left-0 w-[20%] h-1/3 bg-brand-steel-light/10 pointer-events-none" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-800">
          <div>
            <div className="flex items-center space-x-2 text-brand-steel-light font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-[1px] bg-brand-steel-light" />
              <span>COMMERCIAL FOOTPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight">
              Our <span className="text-brand-steel-light">Projects</span>
            </h2>
            <p className="mt-2 text-xs text-gray-400 font-mono uppercase tracking-widest">
              A record of execution & custom-manufacturing delivery
            </p>
          </div>

          {/* Interactive Modern Toggles */}
          <div className="mt-6 md:mt-0 flex space-x-2 bg-brand-navy-light/40 p-1.5 border border-gray-800 rounded-none">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-2.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'current'
                  ? 'bg-brand-steel-medium text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Active (2024–2025)
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'upcoming'
                  ? 'bg-brand-steel-medium text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              <Hourglass className="w-3.5 h-3.5" />
              Upcoming (2026)
            </button>
          </div>
        </div>

        {/* Dynamic Project Panels */}
        <div className="mt-8">
          {activeTab === 'current' ? (
            <div>
              {/* Dashboard stats panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-brand-navy-light/60 border-l-4 border-brand-steel-light p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Scope Term</span>
                  <span className="text-xl font-display font-bold uppercase mt-1">2024 — 2025</span>
                </div>
                <div className="bg-brand-navy-light/60 border-l-4 border-brand-steel-medium p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Total Deliveries</span>
                  <span className="text-xl font-display font-bold uppercase mt-1">{CURRENT_PROJECTS.length} Major Engineering Supplies</span>
                </div>
                <div className="bg-brand-navy-light/60 border-l-4 border-slate-500 p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Status Code</span>
                  <span className="text-xl font-display font-bold uppercase mt-1 text-emerald-400 flex items-center gap-1.5">
                    ● SUCCESSFUL/ONGOING
                  </span>
                </div>
              </div>

              {/* Grid Layout of Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CURRENT_PROJECTS.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="bg-brand-navy-light/40 border border-gray-800 p-6 hover:bg-brand-steel-medium/10 hover:border-brand-steel-light/60 transition-all duration-300 flex flex-col justify-between"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 93% 100%, 0 100%)',
                    }}
                  >
                    <div>
                      {/* Badge / Index mark */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-mono text-brand-steel-light uppercase tracking-widest bg-brand-steel-medium/20 px-2 py-0.5 border border-brand-steel-light/10">
                          Active Asset
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 font-bold">
                          #{(idx + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase leading-snug">
                        {proj.title}
                      </h4>

                      {/* Associated Client Partnership Name */}
                      {proj.partnership && (
                        <div className="mt-2.5 flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono uppercase text-gray-400">PARTNER:</span>
                          <span className="text-[10px] font-mono uppercase bg-brand-steel-light/10 text-brand-steel-light px-1.5 py-0.5">
                            {proj.partnership}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-8 pt-4 border-t border-gray-800/40 flex items-center justify-between text-[10px] font-mono text-gray-400">
                      <span>Industrial Supply Group</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand-steel-light" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Dashboard stats panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-brand-navy-light/60 border-l-4 border-brand-steel-light p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Scope Term</span>
                  <span className="text-xl font-display font-bold uppercase mt-1 text-brand-steel-light">2026 FUTURE FOCUS</span>
                </div>
                <div className="bg-brand-navy-light/60 border-l-4 border-brand-steel-medium p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Upcoming Backlog</span>
                  <span className="text-xl font-display font-bold uppercase mt-1">{UPCOMING_PROJECTS.length} Major Implementations</span>
                </div>
                <div className="bg-brand-navy-light/60 border-l-4 border-amber-500 p-5" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
                  <span className="block text-xs font-mono text-brand-steel-light uppercase tracking-wider">Tendering Status</span>
                  <span className="text-xl font-display font-bold uppercase mt-1 text-amber-400 flex items-center gap-1.5">
                    ● ALLOCATION & TESTING
                  </span>
                </div>
              </div>

              {/* Grid Layout of Upcoming items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UPCOMING_PROJECTS.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="bg-brand-navy-light/40 border border-amber-500/10 hover:border-brand-steel-light/60 p-6 hover:bg-brand-steel-medium/10 transition-all duration-300 flex flex-col justify-between"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 93% 100%, 0 100%)',
                    }}
                  >
                    <div>
                      {/* Badge / Index mark */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2.5 py-0.5 border border-amber-400/20">
                          2026 Pipeline
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 font-bold">
                          #{(idx + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase leading-snug">
                        {proj.title}
                      </h4>

                      {/* Client Partnership info if present */}
                      {proj.partnership && (
                        <div className="mt-2.5 flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono uppercase text-gray-400">PARTNER:</span>
                          <span className="text-[10px] font-mono uppercase bg-brand-steel-light/10 text-brand-steel-light px-1.5 py-0.5">
                            {proj.partnership}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-8 pt-4 border-t border-gray-800/40 flex items-center justify-between text-[10px] font-mono text-gray-500">
                      <span>System Architecture Supply</span>
                      <Compass className="w-3.5 h-3.5 text-brand-steel-light" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
