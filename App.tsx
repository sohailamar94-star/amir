
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { FeaturedSection } from './components/FeaturedSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import type { Product } from './types';
import { generateProductDescriptions } from './services/geminiService';

const initialProducts: Product[] = [
  { id: 1, name: 'Lumin-X Facial Cleanser', category: 'Skincare', price: 129.99, imageUrl: 'https://picsum.photos/seed/techbeauty1/400/400', description: 'Loading description...' },
  { id: 2, name: 'AuraGlow Smart Mirror', category: 'Gadgets', price: 349.99, imageUrl: 'https://picsum.photos/seed/techbeauty2/400/400', description: 'Loading description...' },
  { id: 3, name: 'Cryo-Sculpt Pro', category: 'Devices', price: 499.00, imageUrl: 'https://picsum.photos/seed/techbeauty3/400/400', description: 'Loading description...' },
  { id: 4, name: 'Hydro-Pulse Serum Infuser', category: 'Skincare', price: 189.50, imageUrl: 'https://picsum.photos/seed/techbeauty4/400/400', description: 'Loading description...' },
  { id: 5, name: 'SonicPeel Exfoliator', category: 'Devices', price: 215.00, imageUrl: 'https://picsum.photos/seed/techbeauty5/400/400', description: 'Loading description...' },
  { id: 6, name: 'AI Skin Tone Analyzer', category: 'Gadgets', price: 89.99, imageUrl: 'https://picsum.photos/seed/techbeauty6/400/400', description: 'Loading description...' },
  { id: 7, name: 'NanoMist Hydration Spray', category: 'Skincare', price: 75.00, imageUrl: 'https://picsum.photos/seed/techbeauty7/400/400', description: 'Loading description...' },
  { id: 8, name: 'LED Therapy Mask', category: 'Devices', price: 299.99, imageUrl: 'https://picsum.photos/seed/techbeauty8/400/400', description: 'Loading description...' },
];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const fetchDescriptions = async () => {
      try {
        const productNames = initialProducts.map(p => p.name);
        const descriptions = await generateProductDescriptions(productNames);
        
        setProducts(prevProducts =>
          prevProducts.map(p => ({
            ...p,
            description: descriptions[p.name] || p.description,
          }))
        );
      } catch (error) {
        console.error("Error fetching product descriptions:", error);
        setProducts(prevProducts =>
          prevProducts.map(p => ({
            ...p,
            description: 'Experience the cutting edge of beauty technology.',
          }))
        );
      }
    };

    fetchDescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#10101A] text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
        <ProductGrid products={products} />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
