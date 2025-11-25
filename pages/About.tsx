import React from 'react';
import { Award, Shield, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="bg-forest-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Roots</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Founded with a passion for arboriculture and a commitment to preserving the urban canopy.
            </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Growing Strong Since 2005</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Canopy Care began as a small two-person operation in a beat-up pickup truck. Founder Elias Thorne realized that many tree services were quick to remove trees that could be saved with proper care. He set out to build a company that prioritized tree health and preservation.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Today, we are a team of 15 dedicated professionals, including 4 ISA Certified Arborists. We operate a fleet of state-of-the-art equipment designed to minimize impact on your property while handling the largest jobs safely.
                </p>
                <div className="p-6 bg-wood-50 rounded-xl border border-wood-100 italic text-wood-800">
                    "We don't just work on trees; we work for the people who live under them." — Elias Thorne, Founder
                </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg" alt="Team meeting" />
                <img src="https://images.unsplash.com/photo-1595115277732-23d24226a270?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-64 object-cover shadow-lg" alt="Arborist climbing" />
            </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-forest-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-600">
                        <Shield size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Safety First</h3>
                    <p className="text-gray-600 text-sm">We strictly adhere to ANSI Z133 safety standards. Your property and our team are protected.</p>
                </div>
                <div className="p-6 bg-forest-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-600">
                        <Award size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Excellence</h3>
                    <p className="text-gray-600 text-sm">Continuous training ensures our pruning techniques promote optimal tree health.</p>
                </div>
                <div className="p-6 bg-forest-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-600">
                        <Users size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Community</h3>
                    <p className="text-gray-600 text-sm">We sponsor local park cleanups and tree planting initiatives every year.</p>
                </div>
                <div className="p-6 bg-forest-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-600">
                        <Heart size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Integrity</h3>
                    <p className="text-gray-600 text-sm">Transparent pricing, honest assessments, and no hidden fees.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};