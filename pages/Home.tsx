import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Stats } from '../components/Stats';
import { Process } from '../components/Process';
import { Award, Clock, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const FAQPreview = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);
    const { navigateTo } = useNavigation();

    const faqs = [
        { q: "Do you offer free estimates?", a: "Yes! We provide free, no-obligation on-site estimates for all our services." },
        { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and carry comprehensive liability and workers' comp insurance." },
        { q: "What areas do you serve?", a: "We serve the entire Greater Valley area, including metro and suburban neighborhoods." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-forest-600 font-semibold uppercase tracking-wider text-sm mb-3">FAQ</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Common Questions</h3>
                        <p className="text-gray-600 text-lg mb-8">
                            Have a question about your trees? Here are a few things we get asked often.
                        </p>
                        <button 
                            onClick={() => navigateTo('faq')}
                            className="text-forest-600 font-semibold hover:text-forest-800 flex items-center gap-2"
                        >
                            View all FAQs <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                <button 
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="flex items-center justify-between w-full text-left py-2 group"
                                >
                                    <span className="font-bold text-gray-900 text-lg group-hover:text-forest-600 transition-colors">{faq.q}</span>
                                    {openIndex === idx ? <ChevronUp className="text-forest-500" /> : <ChevronDown className="text-gray-400" />}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-32 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Home: React.FC = () => {
    const { navigateTo } = useNavigation();

  return (
    <>
      <Hero />
      <Stats />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest-100 rounded-full z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-wood-100 rounded-full z-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Arborist checking tree health" 
                        className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border-l-4 border-forest-500 hidden md:block">
                        <p className="font-serif text-lg font-bold text-gray-900 mb-2">20+ Years Experience</p>
                        <p className="text-gray-600 text-sm">Serving the community with dedication and expertise since 2005.</p>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-forest-600 font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Canopy Care</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Rooted in Excellence</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        We don't just cut trees; we care for them. Our holistic approach ensures the longevity of your landscape and the safety of your home.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-4 group">
                            <div className="bg-forest-50 p-3 rounded-lg h-fit group-hover:bg-forest-100 transition-colors">
                                <Award className="text-forest-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-1">ISA Certified Arborists</h4>
                                <p className="text-gray-600">Our team leads are fully certified, ensuring industry-standard care for your trees.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 group">
                            <div className="bg-forest-50 p-3 rounded-lg h-fit group-hover:bg-forest-100 transition-colors">
                                <Clock className="text-forest-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-1">Reliable & Punctual</h4>
                                <p className="text-gray-600">We respect your time. We show up when we say we will and finish on schedule.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 group">
                            <div className="bg-forest-50 p-3 rounded-lg h-fit group-hover:bg-forest-100 transition-colors">
                                <Leaf className="text-forest-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-1">Eco-Friendly Disposal</h4>
                                <p className="text-gray-600">100% of our green waste is recycled into mulch or lumber. Nothing goes to the landfill.</p>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigateTo('about')}
                        className="mt-10 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Learn More About Us
                    </button>
                </div>
            </div>
        </div>
      </section>

      <Services limit={3} bgClass="bg-forest-50" />
      <Process />
      <Testimonials />
      <FAQPreview />
      <Contact />
    </>
  );
};