import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-gray-800 text-slate-300 py-16 relative overflow-hidden">
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-48 h-[2px] bg-gradient-to-r from-transparent via-brand-steel-light/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left items-start pb-12 border-b border-gray-800">
          
          {/* Logo & Tagline col (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 flex items-center justify-center bg-brand-steel-medium/10 rounded-full border border-brand-steel-light/30">
                <Globe className="w-5 h-5 text-brand-steel-light" />
              </div>
              <span className="font-display text-xl tracking-[0.2em] font-black text-white">
                FOCUS
              </span>
            </div>

            <p className="text-sm font-display font-medium text-brand-steel-light uppercase tracking-wide">
              "STAY FOCUSED — Get it DONE"
            </p>

            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              Your comprehensive industrial, commercial, and technological partner. Powering trade connections & engineering trust bridges across the globe.
            </p>
          </div>

          {/* Quick links col (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Sitemap Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-brand-steel-light transition-colors">Home</a>
              <a href="#about" className="hover:text-brand-steel-light transition-colors">About</a>
              <a href="#services" className="hover:text-brand-steel-light transition-colors">Services</a>
              <a href="#how-it-works" className="hover:text-brand-steel-light transition-colors">Process</a>
              <a href="#projects" className="hover:text-brand-steel-light transition-colors">Projects</a>
              <a href="#success-stories" className="hover:text-brand-steel-light transition-colors">Stories</a>
              <a href="#team" className="hover:text-brand-steel-light transition-colors">Team</a>
              <a href="#contact" className="hover:text-brand-steel-light transition-colors">Contact</a>
            </div>
          </div>

          {/* Global network highlights col (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Global Connection Hubs
            </h4>
            <div className="space-y-2 text-gray-400">
              <p><strong className="text-white">Cairo Hub:</strong> El Akhbar St., No. 1258 Square, Cairo, Egypt</p>
              <p><strong className="text-white">Guangzhou Hub:</strong> No. 399 Huanshi E Road, Crowne Plaza Room 906, China</p>
            </div>
          </div>

        </div>

        {/* Lower row details */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p className="font-mono uppercase tracking-wider">
            Copyright © 2025 Focus Group. All rights reserved.
          </p>
          
          {/* Scroll up anchor button */}
          <button
            onClick={scrollUp}
            className="mt-6 sm:mt-0 p-3 bg-brand-navy-light/60 border border-gray-800 hover:border-brand-steel-light hover:text-white transition-all flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
          >
            <span>Scroll To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
