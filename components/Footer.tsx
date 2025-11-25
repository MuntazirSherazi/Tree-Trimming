import React from 'react';
import { Sprout, Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sprout className="text-forest-500" size={32} />
              <span className="text-2xl font-serif font-bold text-white">Canopy Care</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Professional tree care services committed to safety, sustainability, and the beauty of your landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-forest-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-forest-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-forest-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigateTo('services')} className="hover:text-forest-500 transition-colors">Tree Trimming</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-forest-500 transition-colors">Hazardous Removal</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-forest-500 transition-colors">Stump Grinding</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-forest-500 transition-colors">Plant Health Care</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigateTo('about')} className="hover:text-forest-500 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('gallery')} className="hover:text-forest-500 transition-colors">Project Gallery</button></li>
              <li><button onClick={() => navigateTo('faq')} className="hover:text-forest-500 transition-colors">FAQ</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-forest-500 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Emergency 24/7</h4>
            <p className="text-sm mb-4">
              Storm damage? Downed tree? We are available around the clock.
            </p>
            <a href="tel:+15551234567" className="text-2xl font-bold text-forest-500 hover:text-white transition-colors">
              (555) 123-4567
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Canopy Care Tree Services. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Certified Arborist #PN-1234A</p>
        </div>
      </div>
    </footer>
  );
};