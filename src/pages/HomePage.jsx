import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star, Clock, Award, Shield } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import FoodCard from '../components/FoodCard';
import foodData from '../data/foodData';
import tastybites from '../assets/TastyBites.png';
const HomePage = () => {
  // Get popular food items
  const popularItems = foodData.filter(item => item.popular).slice(0, 4);
  
  // Animation variants for staggered animations from bottom
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Fade in and rise up animation
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel - Fixed positioning with navbar */}
      <section className="relative" style={{ marginTop: "0px", paddingTop: "64px" }}>
        <HeroCarousel />
      </section>

      {/* Featured Categories */}
      <section className="bg-[#FFF8E8] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="mb-2 h-1 w-20 bg-[#E05D0C] mx-auto"></motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#1e293b] mb-3">
              Discover Our Menu Categories
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of authentic Hyderabadi cuisine and international favorites, 
              all prepared with the freshest ingredients and traditional spices.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Biryani", icon: "🍚", bg: "#E05D0C" },
              { name: "Curries", icon: "🍲", bg: "#0e9f89" },
              { name: "Tandoor", icon: "🔥", bg: "#B91C1C" },
              { name: "Desserts", icon: "🍰", bg: "#FFC252" }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              >
                <div 
                  className="h-32 flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: category.bg }}
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <Link to="/menu" className="text-white font-semibold">View Menu</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section with improved design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12 md:mb-0 md:w-1/2"
            >
              <div className="relative">
                <img 
                  src={tastybites}
                  alt="About TastyBites" 
                  className="rounded-xl shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 bg-[#E05D0C] rounded-xl -z-10"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#0e9f89] rounded-full -z-10 opacity-80"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants} className="mb-2 h-1 w-16 bg-[#E05D0C]"></motion.div>
              <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold text-[#1e293b]">
                Our Culinary Journey
              </motion.h2>
              <motion.p variants={itemVariants} className="mb-6 text-gray-700 leading-relaxed">
                Founded in the heart of Hyderabad, TastyBites brings the authentic flavors of the city's 
                diverse culinary traditions to food lovers everywhere. For over 15 years, we've been 
                perfecting our craft, blending traditional recipes with modern cooking techniques.
              </motion.p>
              <motion.p variants={itemVariants} className="mb-6 text-gray-700 leading-relaxed">
                Our team of expert chefs, led by renowned Hyderabadi cuisine specialist Chef Arjun Rao,
                use only the freshest ingredients and genuine spices to ensure every bite is 
                packed with flavor. We take pride in our heritage while embracing innovation.
              </motion.p>
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E8] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#E05D0C]" />
                  </div>
                  <span className="font-medium">15+ Years of Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E8] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#E05D0C]" />
                  </div>
                  <span className="font-medium">Award-Winning Recipes</span>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  to="/about" 
                  className="flex items-center font-medium text-[#0e9f89] hover:text-[#E05D0C] transition-colors"
                >
                  Learn More About Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12 text-center"
          >
            <motion.div variants={itemVariants} className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></motion.div>
            <motion.h2 variants={itemVariants} className="mb-2 text-3xl font-bold">Most Loved Dishes</motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              Our signature creations that have won the hearts of our customers
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {popularItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <FoodCard food={item} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link 
              to="/menu" 
              className="inline-flex items-center rounded-full bg-[#E05D0C] hover:bg-[#B91C1C] px-8 py-3 font-medium text-white transition-colors duration-300"
            >
              Explore Full Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12 text-center"
          >
            <motion.div variants={itemVariants} className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></motion.div>
            <motion.h2 variants={itemVariants} className="mb-2 text-3xl font-bold text-[#1e293b]">
              The TastyBites Experience
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
              We go beyond just delivering food – we create memorable dining experiences
            </motion.p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#FFF8E8]" />,
                title: "Express Delivery",
                description: "Hot and fresh food at your doorstep in 30 minutes or less, guaranteed.",
                color: "#E05D0C"
              },
              {
                icon: <Shield className="w-8 h-8 text-[#FFF8E8]" />,
                title: "Quality Assured",
                description: "Only the freshest ingredients and authentic spices make it to your plate.",
                color: "#0e9f89"
              },
              {
                icon: <Star className="w-8 h-8 text-[#FFF8E8]" />,
                title: "Chef Specialties",
                description: "Signature dishes crafted by our award-winning culinary team.",
                color: "#B91C1C"
              },
              {
                icon: <Download className="w-8 h-8 text-[#FFF8E8]" />,
                title: "Mobile App",
                description: "Order seamlessly through our app with exclusive app-only offers.",
                color: "#FFC252"
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-xl bg-white p-6 shadow-lg border-t-4"
                style={{ borderColor: feature.color }}
              >
                <div 
                  className="mb-5 h-16 w-16 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#1e293b]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12 text-center"
          >
            <motion.div variants={itemVariants} className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></motion.div>
            <motion.h2 variants={itemVariants} className="mb-2 text-3xl font-bold text-[#1e293b]">
              What Our Customers Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600">
              The proof is in the pudding (and our 4.8-star rating!)
            </motion.p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                image: "https://randomuser.me/api/portraits/women/67.jpg",
                text: "The biryani from TastyBites tastes exactly like what I used to have in Hyderabad. Authentic flavors and quick delivery make it my go-to for weekend meals."
              },
              {
                name: "Rahul Patel",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "The fusion pizzas are innovative and delicious. The butter chicken pizza is to die for! The packaging keeps everything fresh and hot."
              },
              {
                name: "Ankit Reddy",
                image: "https://randomuser.me/api/portraits/men/46.jpg",
                text: "The service is exceptional! My order was missing an item once, and they delivered it within 15 minutes with complimentary dessert. Customer for life!"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-xl bg-white p-6 shadow-lg border border-gray-100"
              >
                <div className="absolute -top-6 left-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-6 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#FFC252]" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-600">"{testimonial.text}"</p>
                <div className="font-medium text-[#1e293b]">- {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="bg-gradient-to-r from-[#E05D0C] to-[#B91C1C] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-white/80 mb-6 max-w-md">
              Get exclusive deals, track your delivery in real-time, and earn loyalty points with every order.
              Available for iOS and Android devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9,19.9l-3.5-3.5c-1,0.8-2.2,1.3-3.4,1.3c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5c0,1.3-0.5,2.5-1.3,3.4 l3.5,3.5L17.9,19.9z M11,16.4c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S8.8,16.4,11,16.4z"/>
                </svg>
                App Store
              </button>
              <button className="bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9,19.9l-3.5-3.5c-1,0.8-2.2,1.3-3.4,1.3c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5c0,1.3-0.5,2.5-1.3,3.4 l3.5,3.5L17.9,19.9z M11,16.4c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S8.8,16.4,11,16.4z"/>
                </svg>
                Google Play
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="w-48 h-80 mx-auto bg-black rounded-3xl border-4 border-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E05D0C]/50 to-[#0e9f89]/50 rounded-3xl"></div>
                <div className="p-3 text-center">
                  <div className="text-xl font-bold text-white mt-5">TastyBites</div>
                  <div className="text-xs text-white/70 mb-5">Food Delivery</div>
                  <div className="bg-white/20 h-32 rounded-lg mb-3"></div>
                  <div className="bg-white/20 h-8 rounded-lg mb-3"></div>
                  <div className="bg-white/20 h-8 rounded-lg mb-3"></div>
                  <div className="bg-[#E05D0C] h-10 rounded-lg font-medium flex items-center justify-center text-white">
                    Order Now
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFC252] rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#0e9f89] rounded-full -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="bg-[#1e293b] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold">Ready to Experience the Taste of Hyderabad?</h2>
            <p className="mb-8 text-lg text-gray-300">Order now and get 15% off on your first order with code: <span className="font-bold text-[#FFC252]">WELCOME15</span></p>
            <Link 
              to="/menu" 
              className="inline-flex items-center rounded-full bg-[#E05D0C] hover:bg-[#0e9f89] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
            >
              Order Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;