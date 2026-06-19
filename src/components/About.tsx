import React from 'react';
import { BRAND } from '../data';
import { Globe, MapPin, Milestone, Settings, Award } from 'lucide-react';

export default function About() {
  const cities = [
    { name: "Cairo", country: "Egypt", type: "Hub" },
    { name: "Damietta", country: "Egypt", type: "Port" },
    { name: "Mansoura", country: "Egypt", type: "Branch" },
    { name: "Guangzhou", country: "China", type: "Core Branch" },
    { name: "Hong Kong", country: "Hong Kong", type: "Licensing" },
    { name: "Riyadh", country: "Saudi Arabia", type: "Regional" },
    { name: "Mecca", country: "Saudi Arabia", type: "Projects" },
    { name: "Istanbul", country: "Turkey", type: "Partners" }
  ];

  const benefits = [
    {
      icon: Settings,
      title: "Direct Sourcing & Custom Engineering",
      description: "Direct ties with manufacturers combined with on-demand product engineering modifications."
    },
    {
      icon: Milestone,
      title: "Global Supply Corridors",
      description: "Cross-continental bridges that connect production capitals to regional commercial markets seamlessly."
    },
    {
      icon: Award,
      title: "Unmatched Expertise",
      description: "Over 24 years of experience studying complex specifications and selecting the perfect industrial fits."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white text-gray-900 overflow-hidden">
      {/* Background elegant diagonal styling */}
      <div 
        className="absolute top-0 right-0 w-[45%] h-full bg-slate-50 z-0" 
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-steel-light/10 z-[1]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Tagline preheading */}
            <div className="flex items-center space-x-2 text-brand-steel-medium font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-[1px] bg-brand-steel-medium" />
              <span>WHO WE ARE</span>
            </div>

            {/* Main Section Header */}
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy uppercase tracking-tight">
              About <span className="text-brand-steel-medium">Focus</span>
            </h2>
            
            {/* Paragraph Text */}
            <p className="mt-6 text-gray-650 text-base sm:text-lg leading-relaxed font-sans">
              Focus is your industrial, commercial, and technological partner. If your business involves specialized engineering supplies, Focus is your best source for products directly from manufacturers — not just sourcing, but also product development and custom modifications to perfectly match your target applications. 
            </p>
            
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              We have the experience to study required products, select the right solutions for your projects, and offer an unmatched network of relationships and accumulated partnerships in a fast-moving world. Our service network spans global economic zones, serving you expertly from initial drafts to final delivery.
            </p>

            {/* Quick Value Pillars */}
            <div className="mt-10 space-y-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-navy flex items-center justify-center text-white" style={{ clipPath: 'polygon(12% 0, 100% 0, 88% 100%, 0 100%)' }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-brand-navy tracking-wide uppercase">{b.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Global Footprint Map list Column (5 cols) */}
          <div className="lg:col-span-5 bg-brand-navy text-white p-8 sm:p-10 shadow-xl border-t-4 border-brand-steel-light relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 92% 100%, 0 100%)' }}>
            {/* Subtle background diagonal shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-steel-medium/10 pointer-events-none" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-brand-steel-light animate-spin-slow" />
              <h3 className="font-display font-bold text-lg tracking-wider uppercase text-white">
                Global Footprint
              </h3>
            </div>
            
            <p className="text-xs text-gray-300 mb-8 font-mono tracking-wide leading-relaxed uppercase">
              Connecting the Far East, the Gulf, & the Mediterranean
            </p>

            {/* Cities Node Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, ind) => (
                <div 
                  key={ind} 
                  className="bg-brand-navy-light/40 border border-gray-700/50 p-3 hover:border-brand-steel-light/75 transition-all group hover:bg-brand-navy-light/80"
                  style={{ clipPath: 'polygon(0 0, 93% 0, 100% 25%, 100% 100%, 7% 100%, 0 75%)' }}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-steel-light group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-brand-steel-light transition-colors">{city.name}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2.5">
                    <span className="text-[10px] font-sans text-gray-400 font-medium">{city.country}</span>
                    <span className="text-[9px] font-mono bg-brand-steel-medium/30 text-brand-steel-light px-1.5 py-0.5 rounded uppercase">{city.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom footnote */}
            <div className="mt-8 pt-4 border-t border-gray-800 text-[11px] text-gray-400 font-mono flex justify-between items-center">
              <span>Established Networks</span>
              <span className="text-brand-steel-light font-bold">Cairo & Guangzhou Hubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
