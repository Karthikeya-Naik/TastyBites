import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown, Star, CircleDollarSign } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import foodData from '../data/foodData';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(foodData);
  const [showFilters, setShowFilters] = useState(false);
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'biryani', name: 'Biryani' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'burger', name: 'Burgers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'starters', name: 'Starters' },
  ];
  
  // Count active filters
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (dietaryFilter !== 'all') count++;
    if (priceRange[0] > 0 || priceRange[1] < 1000) count++;
    if (ratingFilter > 0) count++;
    if (sortBy !== 'relevance') count++;
    setActiveFiltersCount(count);
  }, [selectedCategory, dietaryFilter, priceRange, ratingFilter, sortBy]);
  
  // Filter items when filters change
  useEffect(() => {
    let filtered = foodData;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by dietary preference
    if (dietaryFilter === 'veg') {
      filtered = filtered.filter(item => item.veg === true);
    } else if (dietaryFilter === 'nonveg') {
      filtered = filtered.filter(item => item.veg === false);
    }
    
    // Filter by price range
    filtered = filtered.filter(item => 
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    // Filter by rating
    if (ratingFilter > 0) {
      filtered = filtered.filter(item => (item.rating || 4.5) >= ratingFilter);
    }
    
    // Sort items
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, dietaryFilter, priceRange, ratingFilter, sortBy]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const filterVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setDietaryFilter('all');
    setPriceRange([0, 1000]);
    setRatingFilter(0);
    setSortBy('relevance');
  };
  
  return (
    <div className="min-h-screen pt-15 bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Explore Our Menu
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            Discover our range of authentic Hyderabadi dishes and fusion creations, 
            made with love and the finest ingredients.
          </motion.p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Button */}
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 md:w-72">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E05D0C] text-xs text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-gray-300 py-2 pl-3 pr-8 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-sm"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="popular">Popular First</option>
            </select>
          </div>
        </div>
        
        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={resetFilters}
                      className="text-sm text-[#E05D0C] hover:text-[#B91C1C]"
                    >
                      Reset All
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="grid gap-6 pt-4 md:grid-cols-3">
                  {/* Category Filter */}
                  <div>
                    <h4 className="mb-3 flex items-center text-sm font-medium text-gray-700">
                      Category
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-[#E05D0C] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Dietary Preference */}
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-gray-700">Dietary Preference</h4>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setDietaryFilter('all')}
                        className={`rounded-md px-3 py-1 text-sm font-medium ${
                          dietaryFilter === 'all'
                            ? 'bg-[#E05D0C] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setDietaryFilter('veg')}
                        className={`flex items-center space-x-1 rounded-md px-3 py-1 text-sm font-medium ${
                          dietaryFilter === 'veg'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="h-2 w-2 rounded-full bg-green-500 border border-green-600"></div>
                        <span>Vegetarian</span>
                      </button>
                      <button
                        onClick={() => setDietaryFilter('nonveg')}
                        className={`flex items-center space-x-1 rounded-md px-3 py-1 text-sm font-medium ${
                          dietaryFilter === 'nonveg'
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="h-2 w-2 rounded-full bg-red-500 border border-red-600"></div>
                        <span>Non-Vegetarian</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h4 className="mb-3 flex items-center space-x-1 text-sm font-medium text-gray-700">
                      <CircleDollarSign size={16} className="text-[#E05D0C]" />
                      <span>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</span>
                    </h4>
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="mb-2 w-full cursor-pointer appearance-none rounded-full h-1 bg-gray-200 accent-[#E05D0C]"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full cursor-pointer appearance-none rounded-full h-1 bg-gray-200 accent-[#E05D0C]"
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>₹0</span>
                        <span>₹500</span>
                        <span>₹1000</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating Filter */}
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-gray-700">Minimum Rating</h4>
                    <div className="flex space-x-3">
                      {[0, 3, 3.5, 4, 4.5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setRatingFilter(rating)}
                          className={`flex items-center space-x-1 rounded-md px-3 py-1 text-sm font-medium ${
                            ratingFilter === rating
                              ? 'bg-[#0e9f89] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {rating === 0 ? (
                            <span>Any</span>
                          ) : (
                            <div className="flex items-center">
                              <span>{rating}+</span>
                              <Star size={14} className="ml-1 fill-current" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="rounded-lg bg-[#E05D0C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#B91C1C] transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Active Filters Summary */}
        {activeFiltersCount > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                <span>Category: {categories.find(c => c.id === selectedCategory)?.name}</span>
                <X size={14} />
              </button>
            )}
            
            {dietaryFilter !== 'all' && (
              <button
                onClick={() => setDietaryFilter('all')}
                className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                <span>Dietary: {dietaryFilter === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</span>
                <X size={14} />
              </button>
            )}
            
            {(priceRange[0] > 0 || priceRange[1] < 1000) && (
              <button
                onClick={() => setPriceRange([0, 1000])}
                className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                <span>Price: ₹{priceRange[0]} - ₹{priceRange[1]}</span>
                <X size={14} />
              </button>
            )}
            
            {ratingFilter > 0 && (
              <button
                onClick={() => setRatingFilter(0)}
                className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                <span>Rating: {ratingFilter}+ <Star size={12} className="inline fill-current" /></span>
                <X size={14} />
              </button>
            )}
            
            {sortBy !== 'relevance' && (
              <button
                onClick={() => setSortBy('relevance')}
                className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                <span>Sort: {sortBy.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                <X size={14} />
              </button>
            )}
          </div>
        )}
        
        {/* Quick Category Filters */}
        <div className="no-scrollbar mb-6 flex overflow-x-auto pb-2 space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#E05D0C] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">{filteredItems.length}</span> items
          </p>
        </div>
        
        {/* Menu Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  className="h-full"
                >
                  <FoodCard food={item} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <div className="mx-auto mb-4 h-16 w-16 text-gray-400">
                  <Search size={64} className="h-full w-full" />
                </div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">No items found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 rounded-lg bg-[#E05D0C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#B91C1C] transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;