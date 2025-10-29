
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161625] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About & Logo */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              TechBeauty
            </h3>
            <p className="text-gray-400 text-sm">Pioneering the next wave of beauty technology.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skincare Devices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Gadgets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Join Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest on new products and exclusive offers.</p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold px-4 py-2 rounded-r-md"
                >
                  &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechBeauty Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
