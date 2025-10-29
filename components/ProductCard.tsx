
import React from 'react';
import type { Product } from '../types';
import { CartIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden group border border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 truncate">{product.name}</h3>
        <p className="text-gray-400 text-sm h-10 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-purple-600 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-300 transform group-hover:scale-110">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
