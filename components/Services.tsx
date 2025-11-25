import React from 'react';
import { Trees, Axe, Zap, Sprout, ShieldCheck, Leaf } from 'lucide-react';
import { Service } from '../types';
import { useNavigation } from '../contexts/NavigationContext';

const services: Service[] = [
  {
    id: 'trimming',
    title: 'Precision Trimming',
    description: 'Promote growth and structural integrity with expert pruning tailored to each species. We follow ANSI A300 standards.',
    icon: Trees
  },
  {
    id: 'removal',
    title: 'Safe Removal',
    description: 'Specialized equipment to remove hazardous or unwanted trees without damaging your property. Crane-assisted removal available.',
    icon: Axe
  },
  {
    id: 'stump',
    title: 'Stump Grinding',
    description: 'Complete removal of unsightly stumps, leaving your lawn smooth and ready for replanting or turf.',
    icon: Zap
  },
  {
    id: 'health',
    title: 'Plant Health Care',
    description: 'Diagnosis and treatment for diseases, pests, and soil nutrient deficiencies to save struggling trees.',
    icon: Sprout
  },
  {
    id: 'emergency',
    title: 'Emergency Storm Prep',
    description: '24/7 rapid response for storm-damaged trees that pose immediate risks to safety or structures.',
    icon: ShieldCheck
  },
  {
    id: 'planting',
    title: 'Tree Planting',
    description: 'Expert selection and planting of native species to ensure long-term survival and canopy growth.',
    icon: Leaf
  }
];

interface ServicesProps {
  limit?: number;
  bgClass?: string;
}

export const Services: React.FC<ServicesProps> = ({ limit, bgClass = "bg-forest-50" }) => {
  const { navigateTo } = useNavigation();
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-forest-600 font-semibold uppercase tracking-wider text-sm mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Comprehensive Care for Every Tree</h3>
          <p className="text-gray-600 text-lg">
            From routine maintenance to complex removals, our certified team handles it all with precision and respect for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-forest-100 group flex flex-col"
            >
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-600 transition-colors duration-300">
                <service.icon className="text-forest-600 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigateTo('services')}
              className="px-8 py-3 bg-white border border-forest-200 text-forest-700 font-semibold rounded-lg hover:bg-forest-50 transition-colors"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};