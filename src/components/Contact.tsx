import React, { useState } from 'react';
import { CONTACT_HEAD_OFFICE, CONTACT_CHINA_BRANCH } from '../data';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  

const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formState.name || !formState.email || !formState.message) {
    setErrorMess('Please provide your name, email, and a message.');
    return;
  }
  setErrorMess('');
  setIsSubmitting(true);

  emailjs.send(
    'service_589piif',       // from Step 1
    'template_1n5yret',      // from Step 1
    {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    },
    'O5McarhmvoYZEPvIs'        // from Step 1
  )
  .then(() => {
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    setIsSubmitting(false);
    setErrorMess('Something went wrong. Please try again or contact us directly.');
    console.error('EmailJS error:', error);
  });
};

  return (
    <section id="contact" className="relative py-24 bg-brand-navy border-b border-gray-800 text-white overflow-hidden">
      {/* Background elegant diagonal styling */}
      <div 
        className="absolute top-0 right-0 w-[45%] h-full bg-slate-900/40 z-0" 
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-steel-light/10 pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-steel-light font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-[1px] bg-brand-steel-light" />
            <span>CONNECT WITH US</span>
            <span className="w-8 h-[1px] bg-brand-steel-light" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
            Prompt answers for specialized engineering & commerce requests
          </p>
        </div>

        {/* Side-by-Side: Info Cards vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Office Details Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Egypt Card */}
            <div 
              className="bg-brand-navy-light/40 border border-gray-800 p-6 hover:border-brand-steel-light/60 transition-all duration-300 relative group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 93% 100%, 0 100%)' }}
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 group-hover:bg-brand-steel-medium/20 transition-all duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1.5 h-6 bg-brand-steel-light" />
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">
                  Head Office — Egypt
                </h3>
              </div>

              {/* Channels list */}
              <div className="space-y-4">
                <a href={`tel:${CONTACT_HEAD_OFFICE.phone}`} className="flex items-start gap-3 hover:text-brand-steel-light transition-colors group/link">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-steel-light group-hover/link:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Call Support</span>
                    <span className="text-sm font-semibold tracking-wider">{CONTACT_HEAD_OFFICE.phone}</span>
                  </div>
                </a>
                
                <a href={`mailto:${CONTACT_HEAD_OFFICE.email}`} className="flex items-start gap-3 hover:text-brand-steel-light transition-colors group/link">
                  <Mail className="w-4 h-4 mt-0.5 text-brand-steel-light group-hover/link:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Email Inquiries</span>
                    <span className="text-sm font-semibold lowercase tracking-wide">{CONTACT_HEAD_OFFICE.email}</span>
                  </div>
                </a>

                {CONTACT_HEAD_OFFICE.website && (
                  <a href={`https://${CONTACT_HEAD_OFFICE.website}`} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-brand-steel-light transition-colors group/link">
                    <Globe className="w-4 h-4 mt-0.5 text-brand-steel-light group-hover/link:scale-110 transition-transform" />
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-gray-500">Web Portal</span>
                      <span className="text-sm font-semibold uppercase tracking-wider">{CONTACT_HEAD_OFFICE.website}</span>
                    </div>
                  </a>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-steel-light" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Location Address</span>
                    <span className="text-xs text-gray-300 leading-relaxed">{CONTACT_HEAD_OFFICE.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* China Card */}
            <div 
              className="bg-brand-navy-light/40 border border-gray-800 p-6 hover:border-brand-steel-light/60 transition-all duration-300 relative group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 93% 100%, 0 100%)' }}
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500/5 group-hover:bg-brand-steel-medium/20 transition-all duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1.5 h-6 bg-brand-steel-light" />
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">
                  Core Branch — China
                </h3>
              </div>

              {/* Channels list */}
              <div className="space-y-4">
                <a href={`tel:${CONTACT_CHINA_BRANCH.phone}`} className="flex items-start gap-3 hover:text-brand-steel-light transition-colors group/link">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-steel-light group-hover/link:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Call Guangzhou Hub</span>
                    <span className="text-sm font-semibold tracking-wider">{CONTACT_CHINA_BRANCH.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${CONTACT_CHINA_BRANCH.email}`} className="flex items-start gap-3 hover:text-brand-steel-light transition-colors group/link">
                  <Mail className="w-4 h-4 mt-0.5 text-brand-steel-light group-hover/link:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Export Desk</span>
                    <span className="text-sm font-semibold lowercase tracking-wide">{CONTACT_CHINA_BRANCH.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-steel-light" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Regional Address</span>
                    <span className="text-xs text-gray-300 leading-relaxed">{CONTACT_CHINA_BRANCH.address}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction Form Panel (7 cols) */}
          <div className="lg:col-span-7 bg-brand-navy-light/20 border border-gray-800 p-8 sm:p-10 relative"
            style={{ clipPath: 'polygon(0 0, 97% 0, 100% 5%, 100% 100%, 0 100%)' }}
          >
            <div className="flex items-center space-x-2.5 mb-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-steel-light">
                SECURE CORRESPONDENCE
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6 animate-pulse" />
                <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2">
                  Transmission Successful
                </h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed mb-8">
                  Thank you for contacting Focus Group. Your parameters have been received, and our logistics and engineering consulting desk will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-brand-steel-medium hover:bg-brand-steel-light text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Submit New Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Form Warning state */}
                {errorMess && (
                  <div className="p-4 bg-rose-500/10 border-l-4 border-rose-500 text-xs text-rose-300 font-mono">
                    {errorMess}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name-input" className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy p-3 text-xs border border-gray-800 focus:outline-none focus:border-brand-steel-light text-white transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email-input" className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy p-3 text-xs border border-gray-800 focus:outline-none focus:border-brand-steel-light text-white transition-colors"
                      placeholder="e.g. john@company.com"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message-input" className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 tracking-wider">
                    Detailed Scope or Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-brand-navy p-3 text-xs border border-gray-800 focus:outline-none focus:border-brand-steel-light text-white transition-colors resize-none"
                    placeholder="Enter project specifications, sourcing details or desired modifications..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-steel-medium hover:bg-brand-steel-light transition-colors text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 disabled:bg-gray-700/60 disabled:cursor-not-allowed"
                  style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Files...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
