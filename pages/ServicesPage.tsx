import React from 'react';
import { Services } from '../components/Services';
import { ClipboardList, MessageSquare, Trees, CheckCircle } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const ServicesPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-0 pb-12">
       {/* Hero-style Header */}
       <div className="relative py-24 md:py-32 bg-forest-900 flex items-center justify-center overflow-hidden mt-20 md:mt-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          ></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Expert Tree Services</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Professional care tailored to the specific needs of your landscape. From pruning to removals, we do it all.
              </p>
          </div>
      </div>

      <Services bgClass="bg-white" />

      {/* Process Section */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="text-forest-300 font-semibold uppercase tracking-wider text-sm mb-3">How We Work</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold">The Canopy Care Process</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-forest-700 -z-10 translate-y-4"></div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-forest-800 z-10 relative">
                        <MessageSquare size={28} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">1. Consultation</h4>
                    <p className="text-forest-200 text-sm leading-relaxed">Contact us to schedule a visit. We listen to your concerns and assess the site.</p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-forest-800 z-10 relative">
                        <ClipboardList size={28} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">2. Detailed Quote</h4>
                    <p className="text-forest-200 text-sm leading-relaxed">You receive a clear, itemized proposal via email within 24 hours.</p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-forest-800 z-10 relative">
                        <Trees size={28} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">3. The Work</h4>
                    <p className="text-forest-200 text-sm leading-relaxed">Our crew arrives on time, performs the work safely, and respects your property.</p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-forest-800 z-10 relative">
                        <CheckCircle size={28} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">4. Cleanup</h4>
                    <p className="text-forest-200 text-sm leading-relaxed">We process all debris. Your yard is often left cleaner than we found it.</p>
                </div>
            </div>

            <div className="text-center mt-16">
                <button 
                    onClick={() => navigateTo('contact')}
                    className="px-8 py-4 bg-white text-forest-900 font-bold rounded-lg hover:bg-forest-100 transition-colors"
                >
                    Start Your Project
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};