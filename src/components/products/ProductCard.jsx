import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            GH₵{product.price.toFixed(2)}
          </span>
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;