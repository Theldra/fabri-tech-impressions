import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 h-screen">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Innovative Agricultural Solutions
          </h1>
          <p className="text-xl mb-8">
            Empowering farmers with sustainable metal fabrication and agricultural technology
          </p>
          <div className="space-x-4">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;