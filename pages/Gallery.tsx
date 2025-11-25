import React from 'react';

const projects = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Oak Preservation",
        desc: "Crown reduction on a historic White Oak to improve safety and longevity."
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1621258525752-257a44f33b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Storm Cleanup",
        desc: "Emergency removal of a fallen pine after a winter storm."
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1416879741263-d43a99a29698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Stump Grinding",
        desc: "Complete removal of a large stump to reclaim lawn space."
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1469521669194-babb45f2990e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Large Removal",
        desc: "Crane-assisted removal of a hazardous fir tree near a home."
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Ornamental Pruning",
        desc: "Fine pruning of a Japanese Maple for aesthetic shape."
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Hedge Trimming",
        desc: "Restoring privacy hedges to a clean, uniform shape."
    }
];

export const Gallery: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
        <div className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Work</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A collection of our recent projects showcasing precision, safety, and care.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                        <img 
                            src={project.url} 
                            alt={project.title} 
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-gray-200 text-sm">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};