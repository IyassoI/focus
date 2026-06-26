import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '/' },
    { name: 'About',    href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact',  href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
        isScrolled
          ? 'bg-brand-navy/95 shadow-md backdrop-blur-md py-4 border-b border-brand-steel-medium/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-brand-steel-medium/10 rounded-full border border-brand-steel-light/30 overflow-hidden">
              <Globe className="w-6 h-6 text-brand-steel-light group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute top-1/2 left-0 w-12 h-1 bg-gradient-to-r from-transparent via-brand-steel-light/60 to-transparent rotate-[-30deg] transform -translate-y-1/2 animate-pulse" />
            </div>
            <div>
              <span className="font-display text-2xl tracking-[0.25em] font-black text-white hover:text-brand-steel-light transition-colors">
                FOCUS
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono tracking-widest text-brand-steel-light/80 uppercase">
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 relative ${
                    isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-steel-light" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-6 px-4 py-2 bg-brand-steel-medium hover:bg-brand-steel-light text-white text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm"
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-steel-light"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-brand-navy border-b border-brand-steel-medium/35`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-brand-navy">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-mono tracking-widest uppercase transition-all ${
                  isActive
                    ? 'bg-brand-steel-medium text-white font-bold'
                    : 'text-gray-300 hover:bg-brand-navy-light hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-brand-steel-medium text-white text-xs font-mono uppercase tracking-wider rounded"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}