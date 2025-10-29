
import React from 'react';

const FeatureCard: React.FC<{ title: string; subtitle: string; imageUrl: string }> = ({ title, subtitle, imageUrl }) => (
    <div className="relative rounded-lg overflow-hidden group h-80">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-gray-300 mt-1">{subtitle}</p>
            <a href="#" className="mt-4 inline-block text-white font-semibold border-b-2 border-pink-500 group-hover:border-purple-400 transition-colors">
                Shop Now &rarr;
            </a>
        </div>
    </div>
);

export const FeaturedSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#161625]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                       Innovation in Every Device
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                       Explore our curated categories of next-generation beauty tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <FeatureCard 
                        title="Smart Skincare Devices"
                        subtitle="AI-powered analysis and treatment."
                        imageUrl="https://picsum.photos/seed/feature1/800/600"
                   />
                    <FeatureCard 
                        title="Intelligent Gadgets"
                        subtitle="Elevate your routine with smart tools."
                        imageUrl="https://picsum.photos/seed/feature2/800/600"
                   />
                </div>
            </div>
        </section>
    );
};
