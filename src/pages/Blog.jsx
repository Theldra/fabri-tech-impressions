import React, { useState } from 'react';
import { FaCalendar, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialNewsletter from './SocialNewsletter';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: "Advancing Agriculture Through Innovation",
      date: "2025-05-15",
      excerpt: "Exploring how modern metal fabrication is transforming farming practices...",
      image: "/images/blog/innovation.jpg",
      category: "Technology"
    },
    {
      id: 2,
      title: "Women in Metal Fabrication",
      date: "2025-05-10",
      excerpt: "Breaking barriers and creating opportunities in the industry...",
      image: "/images/blog/women-empowerment.jpg",
      category: "Community"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="mb-8">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaCalendar className="mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <SocialNewsletter />
      </div>
    </div>
  );
};

export default Blog;