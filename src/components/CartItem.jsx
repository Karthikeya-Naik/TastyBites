import { motion } from 'framer-motion';
import { Trash, Minus, Plus, Info } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [showConfirmRemove, setShowConfirmRemove] = useState(false);
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-col rounded-lg bg-white p-4 shadow-sm border-l-4 border-[#0e9f89]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded-md object-cover shadow-sm"
            />
            {item.veg && (
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-sm border border-green-500 flex items-center justify-center bg-white">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            )}
            {!item.veg && item.veg !== undefined && (
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-sm border border-red-500 flex items-center justify-center bg-white">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-base font-medium text-[#1E293B]">{item.name}</h3>
            <p className="text-sm text-gray-500">₹{item.price} each</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-medium text-[#0e9f89]">₹{item.price * item.quantity}</div>
          {!showConfirmRemove ? (
            <button
              onClick={() => setShowConfirmRemove(true)}
              className="flex items-center text-xs text-[#B91C1C] hover:text-red-700"
            >
              <Trash size={14} className="mr-1" /> Remove
            </button>
          ) : (
            <div className="flex items-center space-x-2 text-xs">
              <button 
                onClick={() => setShowConfirmRemove(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="font-medium text-[#B91C1C] hover:text-red-700"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Customizations and quantity selector */}
      <div className="mt-3 flex items-center justify-between">
        {item.customizations ? (
          <div className="flex items-start text-xs text-gray-500 max-w-[60%]">
            <Info size={14} className="mr-1 mt-0.5 min-w-4 text-[#E05D0C]" />
            <span>{item.customizations}</span>
          </div>
        ) : (
          <div></div>
        )}
        
        <div className="flex items-center border border-gray-200 rounded-full">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={`flex h-7 w-7 items-center justify-center rounded-full ${
              item.quantity <= 1 ? 'text-gray-300' : 'text-[#1E293B] hover:bg-gray-100'
            }`}
            disabled={item.quantity <= 1}
          >
            <Minus size={14} />
          </motion.button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className={`flex h-7 w-7 items-center justify-center rounded-full ${
              item.quantity >= 10 ? 'text-gray-300' : 'text-[#1E293B] hover:bg-gray-100'
            }`}
            disabled={item.quantity >= 10}
          >
            <Plus size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;