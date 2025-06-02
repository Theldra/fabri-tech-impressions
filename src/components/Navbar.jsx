import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop';
import logo from '../assets/images/fab-logo.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollToTop();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'About', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            data-aos="fade-right"
          >
            <img 
              src={logo} 
              alt="Fabri-Tech Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-blue-600">
              Fabri-Tech Impressions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex space-x-8"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                data-aos="fade-down"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-aos="fade-left"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
                data-aos="fade-right"
                data-aos-delay={`${index * 100}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;