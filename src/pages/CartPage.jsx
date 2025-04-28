import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, AlertCircle, Check, ArrowLeft, Trash2, Gift, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import item10 from '../assets/item10.png';
import item4 from '../assets/item4.png';
const CartPage = () => {
  const { cartItems, clearCart, updateQuantity } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate cart totals
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFees = {
    standard: 40,
    express: 80,
    pickup: 0
  };
  const deliveryFee = deliveryFees[deliveryOption];
  const gstRate = 0.05;
  const gst = subtotal * gstRate;
  const discount = promoApplied ? promoDiscount : 0;
  const finalTotal = subtotal + deliveryFee + gst - discount;

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome20') {
      setPromoApplied(true);
      setPromoDiscount(subtotal * 0.2); // 20% discount
      setErrorMessage('');
    } else if (promoCode.toLowerCase() === 'first50') {
      setPromoApplied(true);
      setPromoDiscount(50); // ₹50 off
      setErrorMessage('');
    } else {
      setPromoApplied(false);
      setPromoDiscount(0);
      setErrorMessage('Invalid promo code. Try WELCOME20 for 20% off.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setOrderPlaced(false);
      }, 5000);
    }, 2000);
  };

  // Reset promo when cart changes
  useEffect(() => {
    if (cartItems.length === 0) {
      setPromoApplied(false);
      setPromoDiscount(0);
      setPromoCode('');
    }
  }, [cartItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Estimated delivery times based on option
  const deliveryTimes = {
    standard: '30-45 min',
    express: '15-20 min',
    pickup: '10-15 min'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-24 px-4 min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1e293b] flex items-center">
          <ShoppingBag className="mr-3 text-[#E05D0C]" size={32} />
          Your Cart
        </h1>

        <AnimatePresence>
          {orderPlaced && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-5 rounded-lg flex items-start md:items-center shadow-md"
            >
              <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Check size={24} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-lg">Order placed successfully!</p>
                <p className="text-green-600">Thank you for ordering with TastyBites. Your delicious food is on its way!</p>
              </div>
            </motion.div>
          )}

          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 bg-red-50 border border-red-200 text-red-700 px-6 py-5 rounded-lg flex items-start md:items-center shadow-md"
            >
              <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <div>
                <p className="text-red-600">{errorMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {cartItems.length === 0 && !orderPlaced ? (
          <motion.div 
            variants={itemVariants}
            className="text-center py-16 bg-white rounded-xl shadow-md border border-gray-100"
          >
            <div className="bg-[#FFF8E8] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-[#E05D0C] opacity-70" />
            </div>
            <h2 className="text-2xl font-semibold text-[#1e293b] mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added any items to your cart yet. Explore our delicious menu and add your favorites!</p>
            <Link 
              to="/menu" 
              className="inline-flex items-center bg-[#E05D0C] hover:bg-[#d15208] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <ArrowLeft size={18} className="mr-2" />
              Browse Menu
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-[#1e293b]">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in cart
                </h2>
                {cartItems.length > 0 && (
                  <button 
                    onClick={clearCart}
                    className="flex items-center text-[#B91C1C] hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} className="mr-1" />
                    <span className="text-sm">Clear Cart</span>
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </div>

              {/* Recommended items - only show if cart has items */}
              {cartItems.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="mt-8 p-6 bg-[#FFF8E8] rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-medium text-[#1e293b] mb-4">Frequently Bought Together</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border border-gray-100">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={item4}
                          alt="Masala Fries" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1e293b]">Masala Fries</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[#0e9f89] font-medium">₹149</span>
                          <button 
                            onClick={() => {
                              const existingItem = cartItems.find(item => item.id === 4);
                              if (existingItem) {
                                updateQuantity(4, existingItem.quantity + 1);
                              } else {
                                // This would normally use addToCart from context
                                // For demo purposes, we're just showing the button
                              }
                            }}
                            className="text-xs bg-[#E05D0C] text-white px-2 py-1 rounded hover:bg-[#d15208] transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border border-gray-100">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={item10}
                          alt="Chocolate Oreo Shake" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1e293b]">Chocolate Oreo Shake</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[#0e9f89] font-medium">₹159</span>
                          <button 
                            onClick={() => {
                              const existingItem = cartItems.find(item => item.id === 10);
                              if (existingItem) {
                                updateQuantity(10, existingItem.quantity + 1);
                              } else {
                                // This would normally use addToCart from context
                                // For demo purposes, we're just showing the button
                              }
                            }}
                            className="text-xs bg-[#E05D0C] text-white px-2 py-1 rounded hover:bg-[#d15208] transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
            
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24"
              >
                {/* Delivery Options */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-4">
                  <h2 className="text-lg font-medium mb-4 text-[#1e293b]">Delivery Options</h2>
                  
                  <div className="space-y-3">
                    <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${deliveryOption === 'standard' ? 'border-[#0e9f89] bg-[#0e9f89]/5' : 'border-gray-200'}`}>
                      <input 
                        type="radio" 
                        name="deliveryOption" 
                        value="standard"
                        checked={deliveryOption === 'standard'}
                        onChange={() => setDeliveryOption('standard')}
                        className="mr-3 text-[#0e9f89] focus:ring-[#0e9f89]"
                      />
                      <div className="flex-grow">
                        <div className="font-medium text-[#1e293b]">Standard Delivery</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" /> {deliveryTimes.standard}
                        </div>
                      </div>
                      <div className="text-[#1e293b] font-medium">₹40</div>
                    </label>
                    
                    <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${deliveryOption === 'express' ? 'border-[#0e9f89] bg-[#0e9f89]/5' : 'border-gray-200'}`}>
                      <input 
                        type="radio" 
                        name="deliveryOption" 
                        value="express"
                        checked={deliveryOption === 'express'}
                        onChange={() => setDeliveryOption('express')}
                        className="mr-3 text-[#0e9f89] focus:ring-[#0e9f89]"
                      />
                      <div className="flex-grow">
                        <div className="font-medium text-[#1e293b]">Express Delivery</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" /> {deliveryTimes.express}
                        </div>
                      </div>
                      <div className="text-[#1e293b] font-medium">₹80</div>
                    </label>
                    
                    <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${deliveryOption === 'pickup' ? 'border-[#0e9f89] bg-[#0e9f89]/5' : 'border-gray-200'}`}>
                      <input 
                        type="radio" 
                        name="deliveryOption" 
                        value="pickup"
                        checked={deliveryOption === 'pickup'}
                        onChange={() => setDeliveryOption('pickup')}
                        className="mr-3 text-[#0e9f89] focus:ring-[#0e9f89]"
                      />
                      <div className="flex-grow">
                        <div className="font-medium text-[#1e293b]">Store Pickup</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" /> {deliveryTimes.pickup}
                        </div>
                      </div>
                      <div className="text-green-600 font-medium">Free</div>
                    </label>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-4">
                  <h2 className="text-lg font-medium mb-4 text-[#1e293b]">Promo Code</h2>
                  
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e9f89] focus:border-transparent"
                      disabled={promoApplied}
                    />
                    <button 
                      onClick={promoApplied ? () => {
                        setPromoApplied(false);
                        setPromoDiscount(0);
                        setPromoCode('');
                      } : applyPromoCode}
                      className={`px-2 py-2 rounded-lg font-medium transition-colors ${
                        promoApplied 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-[#0e9f89] text-white hover:bg-[#0c8a77]'
                      }`}
                    >
                      {promoApplied ? 'Remove' : 'Apply'}
                    </button>
                  </div>
                  
                  {promoApplied && (
                    <div className="mt-3 flex items-center text-green-600 text-sm">
                      <Gift size={16} className="mr-2" />
                      <span>Promo code applied: {promoDiscount.toFixed(2)} off</span>
                    </div>
                  )}
                  
                  <div className="mt-3 text-xs text-gray-500">
                    Try "WELCOME20" for 20% off or "FIRST50" for ₹50 off
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-[#FFF8E8] rounded-xl p-6 shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-200 text-[#1e293b]">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[#1e293b]">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#1e293b]">
                      <span>Delivery Fee</span>
                      <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-[#1e293b]">
                      <span>GST (5%)</span>
                      <span>₹{gst.toFixed(2)}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4 mb-6">
                    <span className="text-[#1e293b]">Total</span>
                    <span className="text-[#E05D0C]">₹{finalTotal.toFixed(2)}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut || cartItems.length === 0}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center ${
                      isCheckingOut || cartItems.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#E05D0C] hover:bg-[#d15208]'
                    }`}
                  >
                    {isCheckingOut ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                  
                  {cartItems.length > 0 && (
                    <div className="mt-4 flex items-start text-xs text-gray-500">
                      <AlertCircle size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                      <p>This is a demo checkout. No actual payment will be processed.</p>
                    </div>
                  )}

                  {cartItems.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link 
                        to="/menu" 
                        className="w-full flex items-center justify-center text-[#0e9f89] hover:text-[#0c8a77] font-medium transition-colors"
                      >
                        <ArrowLeft size={16} className="mr-2" />
                        Continue Shopping
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;