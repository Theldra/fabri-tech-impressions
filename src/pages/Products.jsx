import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { FaFilter, FaSearch } from 'react-icons/fa';

const Products = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  
  const products = [
    {
      id: 1,
      name: "Multipurpose Farm Bike",
      description: "Heavy-duty cargo farm bike designed for agricultural use. Features include adjustable cargo bed, all-terrain tires, and durable metal framework.",
      price: 5000,
      category: "vehicles",
      image: "/images/farm-bike.jpg",
      specifications: {
        capacity: "500kg",
        engine: "250cc",
        fuelType: "Diesel"
      },
      inStock: true
    },
    {
      id: 2,
      name: "Advanced Maize Planter",
      description: "Precision planting machine for maize cultivation. Ensures optimal seed spacing and depth for maximum yield.",
      price: 3500,
      category: "planters",
      image: "/images/maize-planter.jpg",
      specifications: {
        rowCapacity: "4 rows",
        seedSpacing: "20-30cm",
        weight: "150kg"
      },
      inStock: true
    },
    // Add more products...
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Search and Filter Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="vehicles">Vehicles</option>
              <option value="planters">Planters</option>
              <option value="tools">Tools</option>
            </select>
          </div>
          
          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-4">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Products;