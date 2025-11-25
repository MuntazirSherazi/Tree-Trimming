import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        q: "When is the best time to prune my trees?",
        a: "Generally, late winter (dormancy) is the best time for major pruning. However, dead wood can be removed anytime. Some species like Maples or Birches should be pruned in mid-summer to avoid excessive sap bleeding."
    },
    {
        q: "Do I need a permit to remove a tree?",
        a: "It depends on your local municipality and the size/location of the tree. In many cities, trees over a certain diameter require a permit. We handle all permit applications as part of our removal service."
    },
    {
        q: "Are you insured?",
        a: "Yes, absolutely. We carry $2 million in General Liability insurance and full Workers' Compensation for all employees. We are happy to provide a certificate of insurance upon request."
    },
    {
        q: "How much does tree removal cost?",
        a: "Cost varies wildly based on tree size, location, access (can we use a bucket truck or must we climb?), and risk factors. We provide free, no-obligation written estimates after an on-site assessment."
    },
    {
        q: "Do you offer emergency services?",
        a: "Yes, we have a 24/7 emergency response team for storm damage, fallen trees blocking driveways, or hazardous situations threatening your home."
    },
    {
        q: "What happens to the wood and brush?",
        a: "We chip brush into mulch which is recycled. Larger wood is either hauled away for lumber/firewood or can be cut into 16-inch rounds and left for you if requested."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-24 pb-12">
            <div className="bg-forest-50 py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-forest-600 shadow-sm">
                        <HelpCircle size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Common questions about tree care, our process, and what you can expect.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                                {openIndex === idx ? <Minus className="text-forest-500" /> : <Plus className="text-gray-400" />}
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};