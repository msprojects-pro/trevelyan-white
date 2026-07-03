/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  category: 'heating' | 'plumbing' | 'cooling' | 'renewables' | 'design';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'heating' | 'plumbing' | 'cooling' | 'renewables';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  date: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  details: string;
}
