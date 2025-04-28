import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Plus, X, ChevronRight, Star, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({...food, quantity});
    
    setTimeout(() => {
      setIsAdding(false);
      setShowDetails(false);
      setQuantity(1);
    }, 500);
  };

  const handleQuantityChange = (value) => {
    const newQty = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQty);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
        onClick={() => setShowDetails(true)}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={food.image}
            alt={food.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {food.popular && (
            <div className="absolute left-0 top-3 rounded-r-full bg-[#E05D0C] px-4 py-1 text-xs font-semibold text-white">
              Popular
            </div>
          )}
          {food.veg && (
            <div className="absolute right-3 top-3 h-5 w-5 rounded-sm border border-green-500 p-1">
              <div className="h-full w-full rounded-full bg-green-500"></div>
            </div>
          )}
          {!food.veg && (
            <div className="absolute right-3 top-3 h-5 w-5 rounded-sm border border-red-500 p-1">
              <div className="h-full w-full rounded-full bg-red-500"></div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-[#1E293B]">{food.name}</h3>
          <p className="mb-3 text-sm text-gray-600 line-clamp-2">{food.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#0e9f89]">₹{food.price}</span>
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
              className="flex items-center space-x-1 rounded-full bg-[#FFF8E8] px-3 py-1 text-sm font-medium text-[#E05D0C] border border-[#E05D0C] transition-colors hover:bg-[#E05D0C] hover:text-white"
            >
              <ChevronRight size={16} />
              <span>View</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Item Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setShowDetails(false)}
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-1 text-[#1E293B] hover:bg-white"
                >
                  <X size={20} />
                </button>
                {food.veg ? (
                  <div className="absolute left-3 bottom-3 flex items-center space-x-2 bg-white/80 px-2 py-1 rounded-md">
                    <div className="h-4 w-4 rounded-sm border border-green-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-medium text-green-600">Pure Veg</span>
                  </div>
                ) : (
                  <div className="absolute left-3 bottom-3 flex items-center space-x-2 bg-white/80 px-2 py-1 rounded-md">
                    <div className="h-4 w-4 rounded-sm border border-red-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-xs font-medium text-red-600">Non-Veg</span>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-[#1E293B]">{food.name}</h2>
                  <div className="flex items-center bg-[#0e9f89] text-white px-2 py-1 rounded text-sm">
                    <Star size={14} className="mr-1 fill-white" />
                    <span>{food.rating || "4.5"}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{food.description}</p>
                
                {food.ingredients && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[#1E293B] mb-1">Ingredients:</h3>
                    <p className="text-sm text-gray-500">{food.ingredients}</p>
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xl font-bold text-[#0e9f89]">₹{food.price}</span>
                  <div className="flex items-center border border-gray-200 rounded-full">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        quantity <= 1 ? 'text-gray-300' : 'text-[#1E293B] hover:bg-gray-100'
                      }`}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        quantity >= 10 ? 'text-gray-300' : 'text-[#1E293B] hover:bg-gray-100'
                      }`}
                      disabled={quantity >= 10}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`w-full flex items-center justify-center space-x-2 rounded-lg py-3 text-white font-medium transition-all ${
                    isAdding ? 'bg-[#0E9F89]' : 'bg-[#E05D0C] hover:bg-[#B91C1C]'
                  }`}
                >
                  {isAdding ? (
                    'Added to Cart!'
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      <span>Add {quantity} to Cart • ₹{food.price * quantity}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FoodCard;