import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Calculator, AlertCircle } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Calculator State
  const [service, setService] = useState('trimming');
  const [size, setSize] = useState('medium');
  const [access, setAccess] = useState('easy');
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  useEffect(() => {
    calculateEstimate();
  }, [service, size, access]);

  const calculateEstimate = () => {
    let baseMin = 0;
    let baseMax = 0;

    // Base rates based on size
    switch (size) {
      case 'small': // Under 15ft
        baseMin = 200;
        baseMax = 350;
        break;
      case 'medium': // 15-30ft
        baseMin = 400;
        baseMax = 700;
        break;
      case 'large': // 30-60ft
        baseMin = 850;
        baseMax = 1500;
        break;
      case 'giant': // 60ft+
        baseMin = 1800;
        baseMax = 3500;
        break;
    }

    // Service Multipliers
    if (service === 'removal') {
      baseMin *= 1.4;
      baseMax *= 1.5;
    } else if (service === 'stump') {
      // Stump grinding is significantly cheaper
      baseMin = baseMin * 0.4;
      baseMax = baseMax * 0.4;
    }

    // Access Multipliers
    if (access === 'hard') {
      baseMin *= 1.25;
      baseMax *= 1.4;
    }

    // Round to nearest 10
    setEstimate({
      min: Math.round(baseMin / 10) * 10,
      max: Math.round(baseMax / 10) * 10
    });
  };

  return (
    <div className="relative min-h-[850px] md:min-h-[750px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-0">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
              <span className="text-white text-xs md:text-sm font-medium tracking-wider uppercase">Serving the Greater Valley Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Expert Tree Care <br className="hidden lg:block" /> for Your Home
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              Certified arborists dedicated to the health, safety, and beauty of your landscape. Fully insured with competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigateTo('contact')} 
                className="px-8 py-4 bg-forest-600 hover:bg-forest-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-forest-900/20"
              >
                Get a Free Estimate <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+15551234567" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} /> (555) 123-4567
              </a>
            </div>
          </div>

          {/* Right Side: Calculator */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                <div className="bg-forest-100 p-2 rounded-lg">
                  <Calculator className="text-forest-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Instant Price Estimator</h3>
                  <p className="text-xs text-gray-500">Based on local market rates</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['trimming', 'removal', 'stump'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setService(type)}
                        className={`py-2 px-1 text-xs md:text-sm rounded-lg border transition-all ${
                          service === type 
                          ? 'bg-forest-600 text-white border-forest-600 shadow-md' 
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-forest-300'
                        }`}
                      >
                        {type === 'stump' ? 'Stump Grind' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tree Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tree Size (Height)</label>
                  <select 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                  >
                    <option value="small">Small (Under 15ft) - Ornamental</option>
                    <option value="medium">Medium (15-30ft) - Standard Home Tree</option>
                    <option value="large">Large (30-60ft) - Mature Tree</option>
                    <option value="giant">Giant (60ft+) - Old Growth / Complex</option>
                  </select>
                </div>

                {/* Access */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accessibility</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="access" 
                        checked={access === 'easy'} 
                        onChange={() => setAccess('easy')}
                        className="w-4 h-4 text-forest-600 focus:ring-forest-500" 
                      />
                      <span className="text-sm text-gray-600">Open Yard</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="access" 
                        checked={access === 'hard'} 
                        onChange={() => setAccess('hard')}
                        className="w-4 h-4 text-forest-600 focus:ring-forest-500" 
                      />
                      <span className="text-sm text-gray-600">Near Structure/Fence</span>
                    </label>
                  </div>
                </div>

                {/* Result Area */}
                <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600 text-sm font-medium">Estimated Range:</span>
                    <span className="text-3xl font-bold text-forest-700 font-serif">
                      ${estimate.min} - ${estimate.max}
                    </span>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg flex gap-2 items-start">
                    <AlertCircle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-yellow-800 leading-tight">
                      *Rough estimate only. Final price depends on specific hazards and hauling needs.
                    </p>
                  </div>

                  <button 
                    onClick={() => navigateTo('contact')}
                    className="w-full mt-4 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Lock in this Price <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};