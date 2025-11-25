import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "The team was incredible. They took down a massive oak tree that was leaning over our garage. Not a single branch touched the roof. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Property Manager",
    content: "Canopy Care handles all our commercial properties. They are reliable, professional, and always leave the site cleaner than they found it.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Homeowner",
    content: "I appreciate that they have an arborist on staff who actually cares about saving trees, not just cutting them down. They saved our sick Maple!",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-wood-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
                <h2 className="text-wood-600 font-semibold uppercase tracking-wider text-sm mb-3">Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">What Our Clients Say</h3>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <span className="text-gray-600 font-medium">5.0 Average Rating</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-8 right-8 text-wood-300/30" size={48} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{t.content}"</p>
              <div>
                <p className="font-bold text-gray-900 font-serif">{t.name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
