import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Using more professional, high-quality food images
  const carouselImages = [
    {
      id: 1,
      url: hero1,
      alt: 'Authentic Hyderabadi Biryani served in traditional style',
      title: 'Authentic Hyderabadi Flavors',
      subtitle: 'Experience the royal taste of Hyderabad'
    },
    {
      id: 2,
      url: hero2,
      alt: 'Delicious pizza with fresh toppings',
      title: 'Gourmet Pizza',
      subtitle: 'Hand-crafted with premium ingredients'
    },
    {
      id: 3,
      url: hero3,
      alt: 'Juicy burger with fries',
      title: 'Signature Burgers',
      subtitle: 'Flame-grilled to perfection'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* This padding-top ensures the hero doesn't get hidden behind the navbar */}
      <div className="pt-16 md:pt-16 h-full bg-black bg-opacity-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 h-full w-full"
          >
            <div className="relative h-full w-full">
              <img 
                src={carouselImages[currentIndex].url}
                alt={carouselImages[currentIndex].alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.src = 'https://via.placeholder.com/1920x1080?text=Image+Load+Error';
                }}
              />
              
              {/* Improved overlay with gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-16">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {carouselImages[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
                >
                  {carouselImages[currentIndex].subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link
                    to="/menu"
                    className="bg-e53e3e hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 shadow-lg"
                  >
                    <span>Order Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Improved navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
        
        {/* Improved indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-e53e3e scale-125 shadow-md' : 'bg-white bg-opacity-50 hover:bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;