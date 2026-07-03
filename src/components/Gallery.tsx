/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, Shield } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'heating' | 'plumbing' | 'cooling' | 'renewables'>('all');
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'heating', label: 'Boilers & Heating' },
    { value: 'plumbing', label: 'Plumbing & Hot Water' },
    { value: 'cooling', label: 'Air Conditioning' },
    { value: 'renewables', label: 'Heat Pumps & Renewables' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4" id="gallery-header">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase font-mono block">
            Craftsmanship in Action
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Our Portfolio of Completed Works
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-sans">
            Meticulous soldering, straight piping runs, and clean installations. We treat every plant room and cupboard with structural pride.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-10 md:mb-12" id="gallery-filters">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg text-xs font-mono border border-slate-100 mr-2">
            <Filter size={12} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-btn-${cat.value}`}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-slate-900 text-teal-300 shadow-sm border border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Showcase */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setLightboxProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-100 shadow-sm hover:shadow-xl cursor-pointer aspect-4/3"
                id={`project-card-${project.id}`}
              >
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70 opacity-90"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette and Content details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-sm text-[10px] font-bold text-teal-300 font-mono uppercase border border-slate-800 tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Hover Eye indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={16} />
                </div>

                {/* Project Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end">
                  <h3 className="font-bold text-base md:text-lg leading-tight font-sans text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 font-sans line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200" id="gallery-empty">
            <p className="text-slate-500 font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              id="lightbox-backdrop"
            />

            {/* Lightbox content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800"
              id="lightbox-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors p-2 rounded-full bg-slate-950/50 backdrop-blur-sm border border-slate-800 z-20"
                aria-label="Close Lightbox"
                id="close-lightbox-btn"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Area */}
                <div className="md:col-span-8 bg-slate-950 flex items-center justify-center aspect-video md:aspect-auto md:h-[500px]">
                  <img
                    src={lightboxProject.imageUrl}
                    alt={lightboxProject.title}
                    className="w-full h-full object-cover max-h-[500px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details Column */}
                <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between h-full bg-slate-900 text-white min-h-[180px] md:min-h-0 md:h-[500px]">
                  <div className="space-y-4">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-teal-300 font-mono uppercase tracking-wider">
                      {lightboxProject.category}
                    </span>
                    <h3 className="text-xl font-bold font-sans tracking-tight">
                      {lightboxProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {lightboxProject.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800 mt-6 flex items-start gap-2 text-xs text-slate-400">
                    <Shield className="text-teal-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Real project completed in Cornwall area. Flawless workmanship guaranteed.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
