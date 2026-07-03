/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('--- CONTACT INQUIRY RECEIVED ---');
      console.log('Sender:', formData);
      console.log('Timestamp:', new Date().toISOString());
      console.log('---------------------------------');
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Enquiry',
      message: '',
    });
    setIsSuccess(false);
  };

  const cleanPhone = BUSINESS_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase font-mono block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Contact Trevelyan White Today
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base">
            Have an urgent heating breakdown or want to schedule a design survey? Send an inquiry below, or contact Trevelyan directly via phone or WhatsApp for quick dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
          
          {/* Left Column: Cards & Coverage Map */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-column">
            <div className="space-y-4" id="contact-cards-container">
              
              {/* Phone WhatsApp Card */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-400/50 hover:shadow-md transition-all group"
                id="contact-phone-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Phone & WhatsApp</span>
                    <span className="block font-bold text-slate-900 text-base md:text-lg font-mono mt-0.5 group-hover:text-blue-900 transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="block p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-400/50 hover:shadow-md transition-all group"
                id="contact-email-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Email Address</span>
                    <span className="block font-bold text-slate-900 text-sm md:text-base mt-0.5 group-hover:text-blue-900 transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
              </a>

              {/* Location Coverage Area Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100" id="contact-location-card">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Primary Coverage Area</span>
                    <span className="block font-bold text-slate-900 text-sm md:text-base">
                      {BUSINESS_INFO.location}
                    </span>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {BUSINESS_INFO.coverage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours & Availability Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100" id="contact-hours-card">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Working Hours</span>
                    <span className="block font-bold text-slate-900 text-sm md:text-base">
                      {BUSINESS_INFO.workingHours}
                    </span>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      24/7 prioritized emergency call-out dispatch for active water leaks or total system breakdowns.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100" id="contact-form-column">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-enquiry-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="contact-phone">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                      placeholder="e.g. +44 7533 709114"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                    placeholder="e.g. sarah@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="contact-subject">
                    Subject / Project Interest
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Bespoke Heating Design">Bespoke Heating Design</option>
                    <option value="Boiler Replacement">Boiler Replacement</option>
                    <option value="Boiler Breakdown / Emergency">Boiler Breakdown / Emergency</option>
                    <option value="Air Source Heat Pumps">Air Source Heat Pumps</option>
                    <option value="Air Conditioning">Air Conditioning (Heating & Cooling)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="contact-message">
                    Inquiry Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Tell us about the project details, current layout, or specific diagnostic requirements..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center h-full"
                id="contact-success-container"
              >
                <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-4 border border-teal-100">
                  <CheckCircle2 size={36} className="animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                <p className="text-slate-600 max-w-sm mt-2 text-sm leading-relaxed">
                  Thank you for contacting us, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.subject}</strong> has been logged. Trevelyan will respond to your email or phone number as soon as possible.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <a
                    id="success-whatsapp-chat-btn"
                    href={`https://wa.me/${cleanPhone}?text=Hi%20Trevelyan,%20I%20just%20sent%20you%20an%20email%20enquiry%20regarding%20${encodeURIComponent(formData.subject)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-sm shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare size={14} />
                    Quick WhatsApp
                  </a>
                  <button
                    id="success-new-message-btn"
                    onClick={resetForm}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
