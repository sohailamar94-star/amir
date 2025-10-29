
import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  {
    quote: "The AuraGlow Smart Mirror has completely transformed my makeup routine. The AI skin analysis is a game-changer!",
    name: "Jessica L.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "I was skeptical about the Cryo-Sculpt Pro, but the results are undeniable. My skin feels tighter and more refreshed.",
    name: "Michael B.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    quote: "Finally, tech that understands beauty. The product quality and customer service are both top-notch. Highly recommend!",
    name: "Samantha K.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, rating, avatar }) => (
  <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 text-center flex flex-col items-center">
    <img src={avatar} alt={name} className="w-16 h-16 rounded-full mb-4 border-2 border-purple-500" />
    <div className="flex justify-center mb-4 text-yellow-400">
      {Array.from({ length: rating }).map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-gray-300 italic mb-4 flex-grow">"{quote}"</p>
    <cite className="font-semibold text-white not-italic">- {name}</cite>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#10101A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Loved by Innovators
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            See what our customers are saying about the future of beauty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
