import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-forest-900 text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-forest-300 font-semibold uppercase tracking-wider text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 md:mb-8">Ready to Sprout Your Project?</h3>
            <p className="text-forest-100 text-lg mb-12 leading-relaxed max-w-md">
              Contact us today for a free on-site consultation. We offer competitive pricing and unmatched expertise.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm shrink-0">
                  <Phone className="text-forest-300" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-forest-100">(555) 123-4567</p>
                  <p className="text-sm text-forest-300 mt-1">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm shrink-0">
                  <Mail className="text-forest-300" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-forest-100">hello@canopycare.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm shrink-0">
                  <MapPin className="text-forest-300" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Service Area</h4>
                  <p className="text-forest-100">Portland, Beaverton, Lake Oswego,<br/> and surrounding areas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-6 md:p-12 text-gray-900 shadow-2xl">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h4>
                <p className="text-gray-600">Our team will review your details and contact you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')} 
                  className="mt-8 text-forest-600 font-semibold hover:text-forest-700"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Request a Free Quote</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service Needed</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all text-gray-600">
                    <option>Tree Trimming</option>
                    <option>Tree Removal</option>
                    <option>Stump Grinding</option>
                    <option>Plant Health Assessment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message / Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all" placeholder="Tell us about your trees..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full py-4 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-lg transition-colors shadow-lg disabled:opacity-70 disabled:cursor-wait mt-2"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};