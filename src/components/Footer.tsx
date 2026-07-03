/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Calendar, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900" id="footer-upper">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4" id="footer-brand-column">
            <a href="#home" className="flex items-center gap-3" id="footer-logo">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-500 to-slate-800 border border-teal-400">
                <span className="text-white font-sans font-black text-sm tracking-tight select-none">TW</span>
              </div>
              <div>
                <span className="block text-white font-bold text-base leading-none">Trevelyan White</span>
                <span className="block text-[10px] text-teal-400 uppercase tracking-wider font-mono mt-1">Plumbing • Heating • Cooling</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Bespoke heating design, boiler installation, repairs, and air conditioning installations tailored for Penzance and surrounding West Cornwall coastal areas.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 bg-slate-900/50 p-3 rounded-lg border border-slate-900 w-fit">
              <ShieldCheck size={16} />
              <span>Fully Insured up to £5M Public Liability</span>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div className="lg:col-span-2 space-y-4" id="footer-links-column">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-sans">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact information */}
          <div className="lg:col-span-3 space-y-4 text-sm" id="footer-contact-column">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-sans">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase font-mono">Phone / WhatsApp</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-300 font-bold font-mono hover:text-teal-400 transition-colors">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase font-mono">Email Address</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-teal-400 transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase font-mono">Coverage Area</span>
                  <span className="text-slate-300">{BUSINESS_INFO.location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Certs */}
          <div className="lg:col-span-3 space-y-4 text-sm" id="footer-hours-column">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-sans">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Calendar size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-medium">Monday - Friday</span>
                  <span className="text-xs text-slate-500 block mt-0.5">8:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg text-xs text-red-300">
                ⚠️ <strong>Emergency Support:</strong> Breakdowns and urgent leaks prioritized 24/7 in Penzance.
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500" id="footer-lower">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Gas Safe Registered</span>
            <span>•</span>
            <span>OFTEC Compliant</span>
            <span>•</span>
            <span>F-Gas Certified</span>
          </div>
          <button
            id="scroll-top-btn"
            onClick={handleScrollTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-teal-400 hover:text-white rounded-lg border border-slate-800 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
