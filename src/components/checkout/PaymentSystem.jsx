import React, { useState } from 'react';
import { FaCreditCard, FaLock, FaMobile, FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PaymentSystem = ({ totalAmount }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    bankName: '',
    accountNumber: '',
    mobileNumber: '',
    network: ''
  });

  const paymentOptions = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <FaCreditCard />,
      description: 'Pay securely with your card'
    },
    {
      id: 'momo',
      name: 'Mobile Money',
      icon: <FaMobile />,
      description: 'MTN, Vodafone, or AirtelTigo'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <FaUniversity />,
      description: 'Direct bank transfer'
    }
  ];

  const bankDetails = {
    bankName: "Access Bank Ghana",
    accountName: "Fabri-Tech Impressions Ltd",
    accountNumber: "XXXX-XXXX-XXXX",
    swiftCode: "ABGHGHAC",
    branch: "Kumasi Branch"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Process payment based on method
      switch(paymentMethod) {
        case 'card':
          // Integrate with payment gateway (e.g., Stripe, Paystack)
          break;
        case 'momo':
          // Integrate with mobile money API
          break;
        case 'bank':
          // Generate reference number for bank transfer
          break;
        default:
          throw new Error('Please select a payment method');
      }
      
      // Navigate to success page after payment
      navigate('/payment-success');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Secure Payment</h2>
        <div className="flex items-center text-green-600">
          <FaLock className="mr-2" />
          <span>SSL Encrypted</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              paymentMethod === option.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => setPaymentMethod(option.id)}
          >
            <div className="flex items-center mb-2">
              {option.icon}
              <span className="ml-2 font-semibold">{option.name}</span>
            </div>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>

      {paymentMethod && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'momo' && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Mobile Network</label>
                <select className="w-full p-2 border rounded-lg" required>
                  <option value="">Select Network</option>
                  <option value="mtn">MTN Mobile Money</option>
                  <option value="vodafone">Vodafone Cash</option>
                  <option value="airteltigo">AirtelTigo Money</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="0XX XXX XXXX"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Bank Transfer Details</h3>
              {Object.entries(bankDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
              <p className="mt-4 text-sm text-gray-600">
                Please make the transfer and upload proof of payment below
              </p>
              <input
                type="file"
                accept="image/*,.pdf"
                className="mt-2 w-full"
                required
              />
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t">
            <div>
              <p className="text-gray-600">Total Amount:</p>
              <p className="text-2xl font-bold">GH₵ {totalAmount}</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-lg text-white ${
                loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Processing...' : 'Complete Payment'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentSystem;