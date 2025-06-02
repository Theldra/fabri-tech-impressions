import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FaCheckCircle className="text-6xl text-green-500 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link
          to="/orders"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          View Order
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;