import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8" data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-blue-600 mr-4" />
                  <span>+233 541053744</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-4" />
                  <span>contact@fabritech.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-4" />
                  <span>Ayigya, Kumasi, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded-lg h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;