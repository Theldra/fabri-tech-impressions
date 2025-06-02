import React from 'react';
import { FaCog, FaLeaf, FaTractor } from 'react-icons/fa';

const AboutProduct = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Our Products</h1>

        {/* Product Overview */}
        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Innovation in Agriculture</h2>
          <p className="text-gray-600 mb-6">
            Our agricultural machinery represents a fusion of traditional farming wisdom 
            and modern engineering. Each product is crafted with precision and care, 
            designed specifically for African agricultural conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <FaCog className="text-3xl text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Durable Design</h3>
              <p className="text-gray-600">Built to withstand demanding farming conditions</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <FaLeaf className="text-3xl text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">Made with locally sourced materials</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <FaTractor className="text-3xl text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Efficient</h3>
              <p className="text-gray-600">Designed for maximum agricultural productivity</p>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="/images/product-tech.jpg" 
              alt="Product Technology" 
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="font-semibold mb-3">Advanced Engineering</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Precision metal fabrication</li>
                <li>• Optimized for small-holder farmers</li>
                <li>• Easy maintenance design</li>
                <li>• Adaptable to various soil conditions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutProduct;