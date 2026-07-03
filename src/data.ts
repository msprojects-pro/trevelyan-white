/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: 'Trevelyan White Plumbing, Heating and Cooling',
  shortName: 'Trevelyan White',
  tagline: 'If it heats, or cools I do it.',
  description: 'Bespoke Heating system design and installation, Hot water systems, Boiler breakdowns, diagnosis and repair. Natural Gas, LPG, Oil, Heatpumps, Renewables and Air Conditioning specialist.',
  phone: '+44 7533 709114',
  phoneDisplay: '+44 (0) 7533 709114',
  email: 'Tpwoateswhite@gmail.com',
  location: 'Penzance, Cornwall, United Kingdom',
  coverage: 'Serving Penzance, St Ives, Hayle, Helston, and surrounding West Cornwall areas.',
  workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM (Emergency 24/7 Breakdown Coverage)',
  credentials: [
    'Fully Qualified Plumbing & Heating Engineer',
    'Gas Safe Registered Specialist (Natural Gas & LPG)',
    'OFTEC Oil Heating Registered',
    'F-Gas Air Conditioning Specialist',
    'MCS Heat Pumps & Renewables Installer',
    'Fully Insured up to £5 Million Public Liability',
  ],
  heroBgUrl: '/images/modern_boiler_heating_system.jpg'
};

export const SERVICES: Service[] = [
  {
    id: 'boiler-services',
    title: 'Boiler Installation, Servicing & Repairs',
    description: 'Expert diagnostics, regular servicing, and high-efficiency gas, oil, and LPG boiler replacements with full warranties.',
    longDescription: 'A modern boiler is the heart of your home. We provide thorough annual servicing to keep your warranty valid and your home safe, fast diagnostic repairs when things go wrong, and expert advice on choosing a new, high-efficiency system when it is time for an upgrade. We work with leading brands such as Worcester Bosch, Vaillant, and Baxi.',
    iconName: 'Flame',
    category: 'heating'
  },
  {
    id: 'central-heating',
    title: 'Central Heating Systems',
    description: 'Full central heating installation, radiator replacements, power flushing, and smart thermostat integrations.',
    longDescription: 'Whether you want to upgrade your radiators, convert to a combi system, or clear years of sludge from your pipes with a full system power flush, we deliver outstanding results. We design energy-efficient heating circuits that guarantee even heat distribution and reduce your fuel bills.',
    iconName: 'Radiator',
    category: 'heating'
  },
  {
    id: 'hot-water',
    title: 'Hot Water Systems',
    description: 'Unvented hot water cylinders, direct/indirect systems, and traditional gravity-fed hot water solutions.',
    longDescription: 'Enjoy high-pressure hot water in every shower with a modern unvented hot water cylinder. We design and install bespoke cylinders sized perfectly for your family needs, ensuring rapid reheat times and exceptional thermal insulation.',
    iconName: 'Droplet',
    category: 'plumbing'
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps & Renewables',
    description: 'Eco-friendly Air Source Heat Pump (ASHP) design and installation tailored for West Cornwall coastal climates.',
    longDescription: 'Future-proof your home and reduce your carbon footprint with an Air Source Heat Pump. We specialize in MCS-compliant heat pump design, surveying your home’s insulation, specifying the correct unit, and installing underfloor heating or low-temperature radiators for maximum comfort.',
    iconName: 'Leaf',
    category: 'renewables'
  },
  {
    id: 'air-conditioning',
    title: 'Air Conditioning Installation',
    description: 'Quiet, energy-efficient split-system air conditioning for year-round heating and cooling comfort.',
    longDescription: 'If it heats or cools, we do it! Our F-Gas certified installations bring quiet, powerful air conditioning to bedrooms, living spaces, offices, and conservatories. Modern AC units are highly efficient heat pumps, meaning they can provide energy-saving heat in winter and crisp cooling in summer.',
    iconName: 'Wind',
    category: 'cooling'
  },
  {
    id: 'gas-lpg-oil',
    title: 'Gas, LPG & Oil Systems',
    description: 'Certified safe works on off-grid heating systems, gas cookers, fires, LPG conversions, and domestic oil tanks.',
    longDescription: 'Living in Cornwall often means being off the gas grid. We are fully certified to work with Liquefied Petroleum Gas (LPG) and domestic Oil installations, including boiler repairs, tank safety inspections, oil line installations, and system safety certifications.',
    iconName: 'ShieldAlert',
    category: 'heating'
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing & Breakdowns',
    description: 'Rapid response for burst pipes, leaks, blocked systems, and heating breakdowns in West Cornwall.',
    longDescription: 'We understand that heating failures and water leaks are highly stressful. Our local response team prioritizes emergency call-outs in Penzance and surrounding areas, acting quickly to trace the leak, isolate water supplies, and repair your heating or water lines immediately.',
    iconName: 'Wrench',
    category: 'plumbing'
  },
  {
    id: 'bespoke-design',
    title: 'Bespoke Heating & System Design',
    description: 'Custom heating design layouts using full heat-loss calculations to build perfectly sized, high-performance systems.',
    longDescription: 'No two properties are identical. We provide full heat-loss assessments based on room sizes, glazing, and insulation. We design complete systems from scratch, ensuring your boiler, heat pump, cylinder, and radiators work in perfect synergy for premium, quiet efficiency.',
    iconName: 'Layers',
    category: 'design'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'High-Efficiency Boiler Installation',
    description: 'Neat wall-mounted gas boiler installation with custom copper manifolds and magnetic system filter.',
    category: 'heating',
    imageUrl: '/images/modern_boiler_heating_system.jpg'
  },
  {
    id: 'proj-2',
    title: 'Air Source Heat Pump Setup',
    description: 'Sleek outdoor heat pump installation with weatherproof anti-vibration mounting and tidy insulated copper runs.',
    category: 'renewables',
    imageUrl: '/images/heat_pump_installation.jpg'
  },
  {
    id: 'proj-3',
    title: 'Bespoke Copper Pipework Layout',
    description: 'Precision-engineered hot water cylinder manifold showing immaculate parallel copper soldering lines.',
    category: 'plumbing',
    imageUrl: 'https://picsum.photos/seed/copperpipe/800/600'
  },
  {
    id: 'proj-4',
    title: 'Multi-Split AC System',
    description: 'Premium dual-room air conditioning split installation providing whisper-quiet heating and cooling.',
    category: 'cooling',
    imageUrl: 'https://picsum.photos/seed/aircon/800/600'
  },
  {
    id: 'proj-5',
    title: 'Unvented Hot Water Cylinder Upgrade',
    description: 'High-performance 250L unvented hot water cylinder installation for high-pressure multi-bathroom supply.',
    category: 'plumbing',
    imageUrl: 'https://picsum.photos/seed/cylinder/800/600'
  },
  {
    id: 'proj-6',
    title: 'Modern Underfloor Heating Manifold',
    description: 'Multi-zone hydronic underfloor heating layout connected to a high-efficiency heat pump controller.',
    category: 'renewables',
    imageUrl: 'https://picsum.photos/seed/underfloor/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    location: 'Penzance',
    content: 'Trevelyan did a fantastic job designing and installing our bespoke central heating system. The copper pipework is literally a work of art, and our heating bills have dropped dramatically. He is professional, incredibly clean, and clearly takes pride in his craftsmanship!',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 'test-2',
    name: 'Mark & Angela Thompson',
    location: 'St Ives',
    content: 'Our boiler broke down in the middle of a cold spell. Trevelyan responded immediately, diagnosed the faulty gas valve, and had the replacement part installed the same afternoon. Honest pricing and outstanding service. We will use him for all future heating work.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 'test-3',
    name: 'Robert Harris',
    location: 'Marazion',
    content: 'We wanted an environmentally friendly heating solution and commissioned Trevelyan for an Air Source Heat Pump installation. From heat loss calculations to final balancing, his depth of knowledge is incredible. Very neat installation and fully MCS compliant.',
    rating: 5,
    date: 'April 2026'
  },
  {
    id: 'test-4',
    name: 'Emma Pengelly',
    location: 'Hayle',
    content: 'Excellent service installing an air conditioning unit in our sunny conservatory. It keeps the space perfect in summer and adds cheap heat in winter. Trevelyan was polite, left the room immaculate, and even got along wonderfully with our dogs!',
    rating: 5,
    date: 'June 2026'
  }
];

export const FAQS = [
  {
    question: 'Are you fully qualified and insured?',
    answer: 'Yes, absolutely. We are fully qualified plumbing, heating, and cooling specialists holding all relevant Gas Safe (Natural Gas & LPG), OFTEC (Oil), MCS (Renewables), and F-Gas (Air Conditioning) registrations. We carry comprehensive public liability insurance up to £5 Million for your complete peace of mind.'
  },
  {
    question: 'Which areas in Cornwall do you cover?',
    answer: 'We are based in Penzance and primarily cover West Cornwall, including Penzance, St Ives, Marazion, Hayle, Helston, St Just, Land’s End, and all surrounding rural communities.'
  },
  {
    question: 'Do you offer emergency breakdown services?',
    answer: 'Yes, we understand that boiler failures and burst pipes require quick attention. We offer prioritized emergency breakdown diagnostics and repairs in the Penzance and West Cornwall area.'
  },
  {
    question: 'Can you design a custom heating system for an older Cornish stone cottage?',
    answer: 'Bespoke design is our specialty! Traditional Cornish stone cottages have unique heat-loss profiles and damp-prevention requirements. We perform rigorous thermal assessments and custom-size radiators, pipe runs, and boiler/heat pump outputs to ensure high efficiency without compromising the structure of your historic property.'
  }
];
