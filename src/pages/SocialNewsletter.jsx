import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const SocialNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setStatus("Thanks for subscribing! We'll keep you updated.");
    setEmail('');
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: 'https://facebook.com/fabritechimpressions',
      label: 'Facebook'
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/233541053744',
      label: 'WhatsApp'
    },
    {
      icon: <FaInstagram />,
      url: 'https://instagram.com/fabritechimpressions',
      label: 'Instagram'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/company/fabri-tech-impressions',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/fabritechgh',
      label: 'Twitter'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Newsletter Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates about our latest products, training programs, 
              and agricultural innovations.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
              {status && (
                <p className="text-green-600 text-sm">{status}</p>
              )}
            </form>
          </div>

          {/* Social Media Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for daily updates, success stories, and farming tips.
            </p>
            <div className="grid grid-cols-5 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-600 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNewsletter;