import React from 'react';
import { Contact } from '../components/Contact';
import { MapPin, Clock, Calendar } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
        <div className="bg-gray-900 py-16 md:py-24 text-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Ready to transform your landscape? Get in touch for a free estimate.
                </p>
            </div>
        </div>

        {/* Info Cards */}
        <div className="container mx-auto px-6 md:px-12 -mt-12 relative z-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <div className="p-4 bg-forest-50 rounded-full mb-4 text-forest-600">
                        <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Service Area</h3>
                    <p className="text-gray-600 text-sm">Portland Metro, Beaverton, Lake Oswego, Tigard, and Tualatin.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <div className="p-4 bg-forest-50 rounded-full mb-4 text-forest-600">
                        <Clock size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <div className="p-4 bg-forest-50 rounded-full mb-4 text-forest-600">
                        <Calendar size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Emergency</h3>
                    <p className="text-gray-600 text-sm">Available 24/7 for storm damage and hazardous situations.</p>
                </div>
            </div>
        </div>

        {/* Contact form with no bottom padding to flush with footer */}
        <div className="pb-0">
            <Contact />
        </div>
    </div>
  );
};