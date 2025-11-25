import React from 'react';
import { Phone, ClipboardCheck, Axe, Smile } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-forest-600 font-semibold uppercase tracking-wider text-sm mb-3">Our Workflow</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Simple, Transparent Tree Care</h3>
            <p className="text-gray-600 text-lg">
                We've streamlined our process to make tree services hassle-free for homeowners.
            </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-0"></div>

            {[
                { 
                    icon: Phone, 
                    title: "Contact Us", 
                    desc: "Call or fill out our form. We'll respond within 24 hours." 
                },
                { 
                    icon: ClipboardCheck, 
                    title: "Free Estimate", 
                    desc: "An arborist visits your property to provide a detailed quote." 
                },
                { 
                    icon: Axe, 
                    title: "Expert Work", 
                    desc: "Our crew arrives on time and completes the job safely." 
                },
                { 
                    icon: Smile, 
                    title: "Enjoy", 
                    desc: "We clean up thoroughly, leaving your yard looking beautiful." 
                }
            ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-forest-50 mb-6 group-hover:border-forest-500 group-hover:scale-110 transition-all duration-300">
                        <step.icon size={32} className="text-forest-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};