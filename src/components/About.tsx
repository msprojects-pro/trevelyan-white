/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Award, HeartHandshake, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <Award className="text-teal-400" size={24} />,
      title: 'Bespoke Craftsmanship',
      description: 'Every plumbing junction, manifold, and heating layout is built with mathematical precision, perfectly soldered copper, and neat wire configurations.',
    },
    {
      icon: <ShieldCheck className="text-teal-400" size={24} />,
      title: 'Fully Certified & Insured',
      description: 'All work is fully compliant with Gas Safe, OFTEC, MCS, and F-Gas regulations, supported by a £5 Million public liability insurance policy.',
    },
    {
      icon: <HeartHandshake className="text-teal-400" size={24} />,
      title: 'Penzance Trusted Local',
      description: 'We live and work in West Cornwall. We treat your property with the utmost respect, working tidily and providing transparent, fair pricing.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Emblem & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative" id="about-visual-column">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-teal-50/50 rounded-3xl -z-10 blur-xl opacity-70" />
            
            {/* Prominent Circular Logo Display */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-slate-900 shadow-2xl bg-gradient-to-br from-slate-900 to-teal-950 flex flex-col items-center justify-center p-6 text-center select-none"
              id="about-logo-badge"
            >
              {/* Inner glowing ring */}
              <div className="absolute inset-4 rounded-full border border-teal-500/30 animate-pulse" />
              <span className="text-white font-sans font-black text-6xl sm:text-8xl tracking-tighter leading-none bg-clip-text bg-gradient-to-r from-white to-teal-300">
                TW
              </span>
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-teal-400 uppercase mt-3">
                PLUMBING & HEATING
              </span>
            </motion.div>

            {/* Float badge for Cornwall */}
            <div className="absolute bottom-4 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold shadow-md border border-slate-800 tracking-wider uppercase font-mono" id="cornwall-local-badge">
              🌴 Penzance, Cornwall
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8" id="about-narrative-column">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase font-mono block">
                Professional Engineering
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                About Trevelyan White Plumbing, Heating & Cooling
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans">
              With a reputation built on peerless technical skill and reliable local service, 
              <strong> Trevelyan White</strong> specializes in premium bespoke systems designed specifically 
              for Cornwall’s unique coastal climate. From central heating upgrades in traditional granite cottages 
              to state-of-the-art air source heat pumps and air conditioning in modern eco-homes, we deliver outstanding 
              long-term performance.
            </p>

            {/* List of full certifications */}
            <div className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-100" id="credentials-box">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-sans">
                My Qualifications & Guarantees
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {BUSINESS_INFO.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                    <CheckCircle className="text-teal-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2" id="pillars-container">
              {values.map((v, index) => (
                <div key={index} className="space-y-2" id={`pillar-${index}`}>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base font-sans">{v.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
