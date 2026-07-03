/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, ChevronDown, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import { BUSINESS_INFO, FAQS } from './data';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  // Monitor scroll for floating contact CTAs
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const cleanPhone = BUSINESS_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950 font-sans" id="app-wrapper">
      {/* Navigation Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 1. Hero Cover Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Brand Narrative - About */}
        <About />

        {/* 3. Core Specialties - Services */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 4. Portfolio - Gallery */}
        <Gallery />

        {/* 5. Reviews - Testimonials */}
        <Testimonials />

        {/* 6. Accordion Trust FAQ Section */}
        <section className="py-20 md:py-28 bg-slate-900 border-t border-slate-850" id="faqs-section">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            
            <div className="text-center mb-12 space-y-4" id="faqs-header">
              <span className="text-xs font-bold tracking-widest text-teal-400 uppercase font-mono block">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-sans max-w-xl mx-auto">
                Learn more about our pricing, dispatch speeds, certifications, and how we design bespoke systems.
              </p>
            </div>

            <div className="space-y-4" id="faqs-accordion-container">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden transition-all"
                  id={`faq-item-${index}`}
                >
                  <button
                    id={`faq-toggle-btn-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-sans font-bold hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    <span className="pr-4 text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                        activeFaqIdx === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaqIdx === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        id={`faq-content-${index}`}
                      >
                        <div className="px-6 pb-6 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-900 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Quick Guarantees bar */}
            <div className="mt-12 p-6 bg-slate-950 rounded-2xl border border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left" id="faqs-guarantees-banner">
              <div className="flex items-center gap-3">
                <HelpCircle className="text-teal-400 w-8 h-8 flex-shrink-0 hidden sm:block" />
                <div>
                  <h4 className="text-white font-bold text-sm font-sans">Have a different question?</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Contact Trevelyan directly. We are happy to clarify details.</p>
                </div>
              </div>
              <a
                id="faq-whatsapp-cta"
                href={`https://wa.me/${cleanPhone}?text=Hi%20Trevelyan,%20I%20have%20a%20question%20regarding%20your%20heating/plumbing%20services...`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-teal-400 hover:text-teal-300 font-bold rounded-xl text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageSquare size={13} />
                Ask on WhatsApp
              </a>
            </div>

          </div>
        </section>

        {/* 7. Contact Info & Form */}
        <Contact />

      </main>

      {/* Footer bar */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons for Mobile on scroll */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-30 flex flex-col gap-3"
            id="floating-ctas-container"
          >
            {/* Phone Button */}
            <a
              id="floating-phone-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-teal-400 shadow-xl border border-slate-800 flex items-center justify-center transition-all duration-300"
              aria-label="Call Trevelyan"
            >
              <Phone size={20} />
            </a>

            {/* WhatsApp Button with Pulsing light ripple */}
            <a
              id="floating-whatsapp-btn"
              href={`https://wa.me/${cleanPhone}?text=Hi%20Trevelyan,%20I'm%20visiting%20your%20website%20and%20need%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 rounded-full bg-teal-500 text-slate-950 shadow-xl flex items-center justify-center hover:bg-teal-400 transition-all duration-300"
              aria-label="WhatsApp Chat"
            >
              <span className="absolute inset-0 rounded-full bg-teal-500/40 animate-ping opacity-75 pointer-events-none" />
              <MessageSquare size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Free Quote Popup Form Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
