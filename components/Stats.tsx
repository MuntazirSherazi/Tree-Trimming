import React from 'react';
import { Calendar, Users, Trees, Award } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="bg-forest-800 py-16 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <Calendar size={32} className="text-forest-300" />
            </div>
            <div className="text-4xl font-bold font-serif mb-2">18+</div>
            <div className="text-forest-200 text-sm uppercase tracking-wide">Years Experience</div>
          </div>

          <div className="p-4">
            <div className="flex justify-center mb-4">
              <Trees size={32} className="text-forest-300" />
            </div>
            <div className="text-4xl font-bold font-serif mb-2">5k+</div>
            <div className="text-forest-200 text-sm uppercase tracking-wide">Trees Serviced</div>
          </div>

          <div className="p-4">
            <div className="flex justify-center mb-4">
              <Users size={32} className="text-forest-300" />
            </div>
            <div className="text-4xl font-bold font-serif mb-2">1,200+</div>
            <div className="text-forest-200 text-sm uppercase tracking-wide">Happy Clients</div>
          </div>

          <div className="p-4">
            <div className="flex justify-center mb-4">
              <Award size={32} className="text-forest-300" />
            </div>
            <div className="text-4xl font-bold font-serif mb-2">100%</div>
            <div className="text-forest-200 text-sm uppercase tracking-wide">Satisfaction Rate</div>
          </div>

        </div>
      </div>
    </section>
  );
};