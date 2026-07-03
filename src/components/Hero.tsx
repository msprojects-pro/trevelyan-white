/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ChevronRight, MessageSquare, Shield, HelpCircle, Settings } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Clean phone number for WhatsApp links (digits only)
  const waPhone = BUSINESS_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center bg-slate-950 overflow-hidden pt-12 pb-20 md:pb-24 lg:pt-0">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BUSINESS_INFO.heroBgUrl}
          alt="Professional Boiler Installation"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Navy to Teal Radial Gradient overlay for extreme legibility & premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-grid">
        {/* Left side text column */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8" id="hero-text-column">
          {/* Badge indicator */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-teal-300 font-mono text-xs font-semibold uppercase tracking-wider"
            id="hero-qualification-badge"
          >
            <Shield size={13} className="text-teal-400" />
            Fully Qualified & Insured • Penzance Local
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-none"
              id="hero-heading"
            >
              If it heats, or cools <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 font-sans">
                I do it.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed font-light"
              id="hero-subheadline"
            >
              Bespoke heating system design, boiler breakdowns, diagnosis, repair, and installations. Serving <span className="text-white font-medium">Penzance and West Cornwall</span> with premium engineering for Gas, LPG, Oil, Heat Pumps, and Air Conditioning.
            </motion.p>
          </div>

          {/* Quick core certifications listed beautifully */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-l-2 border-teal-500/50 pl-4 py-1"
            id="hero-certs"
          >
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Boilers & Gas</span>
              <span className="text-sm font-semibold text-white">Gas Safe & LPG</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Heat Pumps</span>
              <span className="text-sm font-semibold text-white">MCS Renewables</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Air Conditioning</span>
              <span className="text-sm font-semibold text-white">F-Gas Certified</span>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
            id="hero-ctas"
          >
            <button
              id="hero-quote-btn"
              onClick={onOpenQuote}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              Get a Free Quote
              <ChevronRight size={18} />
            </button>
            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${waPhone}?text=Hi%20Trevelyan,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20heating/cooling%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:border-teal-400/50 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              <MessageSquare size={18} className="text-teal-400" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right side floating credentials box (Bento style) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block"
          id="hero-bento-card"
        >
          <div className="bg-slate-900/85 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              Local Professional Services
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Settings size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Bespoke Design</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Precision thermal calculations for perfect radiator & pipe sizing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">24/7 Boiler Breakdowns</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Fast, meticulous diagnostics and repairs on Gas, LPG & Oil boilers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full F-Gas Registration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Air Conditioning split installations for ideal heating and cooling.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
              <span className="block text-xs text-slate-400">Direct Contact:</span>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-mono font-bold text-teal-400 hover:underline">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
