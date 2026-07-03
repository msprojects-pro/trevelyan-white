/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar with quick credentials and contact */}
      <div className="bg-slate-900 text-slate-300 py-2.5 px-4 text-xs border-b border-slate-800 hidden md:block" id="top-bar">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium text-teal-400">
              <ShieldCheck size={14} />
              Fully Qualified & Insured (Up to £5M)
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin size={13} />
              {BUSINESS_INFO.location}
            </span>
          </div>
          <div className="flex items-center gap-5 font-mono">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <Phone size={13} className="text-teal-400" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <Mail size={13} />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-800'
            : 'bg-transparent py-5'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Brand area */}
          <a href="#home" className="flex items-center gap-3 group" id="header-brand-logo">
            <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-500 to-slate-800 border-2 border-teal-400 shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-sans font-black text-base md:text-lg tracking-tight select-none">TW</span>
            </div>
            <div>
              <span className="block text-base md:text-lg font-bold font-sans text-white tracking-tight leading-tight group-hover:text-teal-400 transition-colors">
                Trevelyan White
              </span>
              <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-teal-300 font-mono leading-none mt-0.5">
                Plumbing • Heating • Cooling
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors py-1.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call / Quote CTA actions */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-ctas">
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all font-mono"
            >
              <Phone size={15} className="text-teal-400" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              id="header-quote-btn"
              onClick={onOpenQuote}
              className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-3" id="mobile-nav-toggle-container">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2.5 rounded-full bg-slate-800 text-teal-400 border border-slate-700"
              aria-label="Call Now"
            >
              <Phone size={18} />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
              id="mobile-drawer"
            >
              <div className="px-5 py-6 space-y-4 flex flex-col">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-200 hover:text-teal-400 py-1 border-b border-slate-800/50"
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile Drawer Quick Contacts */}
                <div className="pt-4 space-y-3 font-mono text-xs text-slate-400">
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-teal-400" />
                    Call: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-bold">{BUSINESS_INFO.phoneDisplay}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-teal-400" />
                    Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white font-bold">{BUSINESS_INFO.email}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-teal-400" />
                    Fully Qualified & Insured Specialist
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <button
                    id="mobile-drawer-quote-btn"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-center shadow-md transition-all cursor-pointer"
                  >
                    Request Free Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
