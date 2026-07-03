/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'Boiler Installation',
    urgency: 'routine',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('--- FREE QUOTE REQUEST SUBMITTED ---');
      console.log('Customer Details:', formData);
      console.log('Timestamp:', new Date().toISOString());
      console.log('------------------------------------');
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: 'Boiler Installation',
      urgency: 'routine',
      details: '',
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    // Delay resetting state to allow exit animation to finish
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100"
            id="modal-card"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 bg-gradient-to-r from-blue-700 via-teal-500 to-cyan-400" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-50"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <div className="p-6 md:p-8" id="quote-form-container">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-sans text-slate-900 flex items-center gap-2">
                    <Sparkles className="text-teal-500" size={24} />
                    Get a Free Bespoke Quote
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Tell us about your heating, plumbing, or cooling needs. Trevelyan will review details and follow up.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="quote-request-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-name">
                        Your Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                        placeholder="e.g. +44 7533 709114"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-email">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                        placeholder="e.g. sarah@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-address">
                        Location / Address in Cornwall *
                      </label>
                      <input
                        id="quote-address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                        placeholder="e.g. Penzance, TR18"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-service">
                        Service Required
                      </label>
                      <select
                        id="quote-service"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm bg-white"
                      >
                        <option value="Bespoke Heating Design">Bespoke Heating Design</option>
                        <option value="Boiler Installation">Boiler Installation</option>
                        <option value="Boiler Service & Repair">Boiler Service & Repair</option>
                        <option value="Hot Water Systems">Hot Water Systems</option>
                        <option value="Heat Pumps & Renewables">Heat Pumps & Renewables</option>
                        <option value="Air Conditioning">Air Conditioning (Heating & Cooling)</option>
                        <option value="Gas, LPG or Oil works">Gas, LPG or Oil Works</option>
                        <option value="Emergency Plumbing / Leaks">Emergency Plumbing / Leaks</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-urgency">
                        Urgency Level
                      </label>
                      <div className="grid grid-cols-3 gap-2 h-[42px]" id="urgency-selector">
                        {(['routine', 'urgent', 'emergency'] as const).map((level) => (
                          <button
                            key={level}
                            id={`urgency-${level}`}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: level })}
                            className={`text-xs font-medium rounded-lg capitalize border transition-all flex items-center justify-center ${
                              formData.urgency === level
                                ? level === 'emergency'
                                  ? 'bg-red-50 border-red-500 text-red-700 font-bold ring-1 ring-red-500'
                                  : level === 'urgent'
                                  ? 'bg-amber-50 border-amber-500 text-amber-700 font-bold ring-1 ring-amber-500'
                                  : 'bg-blue-50 border-blue-600 text-blue-700 font-bold ring-1 ring-blue-600'
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1" htmlFor="quote-details">
                      Details of your Request
                    </label>
                    <textarea
                      id="quote-details"
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm resize-none"
                      placeholder="Please describe the work required (e.g., number of rooms, boiler model, or current issues)..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-blue-700 to-teal-600 hover:from-blue-800 hover:to-teal-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Calculating details...
                        </>
                      ) : (
                        'Request Free Quote'
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Fully Qualified & Insured Specialist</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-1 text-teal-600 font-semibold hover:underline">
                    <PhoneCall size={12} />
                    Direct Call
                  </a>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center flex flex-col items-center justify-center"
                id="quote-success-container"
              >
                <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-4 border border-teal-100">
                  <CheckCircle2 size={36} className="animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Quote Request Received!</h4>
                <p className="text-slate-600 max-w-sm mt-2 text-sm">
                  Thank you, <strong>{formData.name}</strong>. Trevelyan has been notified of your <strong>{formData.serviceType}</strong> request. We will review the details and respond shortly.
                </p>

                {formData.urgency === 'emergency' && (
                  <div className="mt-5 p-3.5 bg-red-50 border border-red-100 text-red-800 rounded-xl text-xs max-w-xs font-medium">
                    ⚠️ Since this is an <strong>Emergency</strong> request, we recommend calling or sending a WhatsApp message immediately at <strong className="whitespace-nowrap">{BUSINESS_INFO.phoneDisplay}</strong> for the fastest response.
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <a
                    id="success-whatsapp-btn"
                    href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}?text=Hi%20Trevelyan,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.serviceType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg text-sm shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    Send WhatsApp
                  </a>
                  <button
                    id="success-close-btn"
                    onClick={handleClose}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
