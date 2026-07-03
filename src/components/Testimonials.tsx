/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="testimonials-header">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase font-mono block">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Trusted by Cornwall Homeowners
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-sans">
            Hear from families and local businesses across Penzance, St Ives, Hayle, and Marazion who rely on our prompt services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={test.id}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Giant quote background decoration */}
              <div className="absolute top-6 right-6 text-slate-100 -z-0">
                <Quote size={56} className="opacity-40" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-amber-400" id={`stars-${test.id}`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 italic text-sm md:text-base leading-relaxed">
                  "{test.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center relative z-10">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base font-sans">
                    {test.name}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    📍 {test.location}, Cornwall
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {test.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Verification Quote */}
        <div className="mt-16 text-center max-w-xl mx-auto p-5 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center gap-3" id="testimonials-trust-footer">
          <ShieldAlert className="text-teal-600 flex-shrink-0 w-6 h-6 hidden sm:block" />
          <p className="text-slate-800 text-xs sm:text-sm font-medium text-left">
            <strong>100% Verified local reviews:</strong> Trevelyan takes immense personal care with every installation, ensuring flawless, safe domestic compliance.
          </p>
        </div>

      </div>
    </section>
  );
}
