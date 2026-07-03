/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Flame, Droplet, Leaf, Wind, ShieldAlert, Wrench, Layers, Thermometer, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { Service } from '../types';
import { motion, AnimatePresence } from 'motion/react';

// Robust, fail-safe icon mapper
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Flame':
      return <Flame className={className} />;
    case 'Radiator':
      return <Thermometer className={className} />; // Fallback to Thermometer which is universally supported
    case 'Droplet':
      return <Droplet className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    default:
      return <Wrench className={className} />;
  }
};

interface ServicesProps {
  onOpenQuote: () => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase font-mono block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Premium Engineering Services
          </h2>
          <p className="text-slate-600 font-sans text-base md:text-lg">
            From emergency repairs to bespoke environmental system designs, Trevelyan delivers flawless workmanship backed by decades of experience and full regulatory certifications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors duration-300">
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-900 transition-colors font-sans">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  id={`learn-more-btn-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold tracking-wider uppercase text-blue-700 hover:text-teal-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Call Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6" id="services-banner-cta">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white font-sans">
              Need a breakdown expert or custom system survey?
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              We diagnose oil, LPG, gas and air-con faults meticulously, providing exact solutions with premium component replacements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              id="services-quote-cta-btn"
              onClick={onOpenQuote}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-center text-sm shadow-md transition-all cursor-pointer"
            >
              Book an Assessment
            </button>
            <a
              id="services-call-cta-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-center text-sm border border-slate-700 transition-all font-mono"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Drawer/Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              id="service-modal-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 md:p-8"
              id="service-modal-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-50"
                aria-label="Close"
                id="close-service-modal-btn"
              >
                <X size={20} />
              </button>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <ServiceIcon name={selectedService.iconName} className="w-7 h-7" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-teal-600 uppercase tracking-widest font-mono">
                    {selectedService.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
                <p className="font-medium text-slate-800">
                  {selectedService.description}
                </p>
                <p className="border-t border-slate-100 pt-4">
                  {selectedService.longDescription}
                </p>

                {/* Quals mini list */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3 text-xs text-slate-700">
                  <ShieldCheck className="text-teal-500 w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Fully Certified Installation</span>
                    All {selectedService.category} diagnostics and installs are backed by full regulatory certs & gas safe/F-gas validation logs.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                <button
                  id="service-modal-quote-btn"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenQuote();
                  }}
                  className="flex-1 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-center text-sm shadow-md transition-all cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <button
                  id="service-modal-close-btn"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-center text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
