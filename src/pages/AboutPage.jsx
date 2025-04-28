import { motion } from 'framer-motion';
import { Award, Clock, Home, Users, ChefHat, MapPin, Star, Utensils, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import join from '../assets/join.png';
import commitment from '../assets/commitment.png';
import resto from '../assets/resto.png';
import passian from '../assets/passian.png';
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const stats = [
    {
      id: 1,
      icon: <Home className="w-8 h-8 text-orange-500" />,
      value: '15+',
      label: 'Cloud Kitchens in Hyderabad'
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: '10,000+',
      label: 'Happy Customers'
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      value: '30 min',
      label: 'Average Delivery Time'
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: '4.8',
      label: 'Customer Rating'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'TastyBites was founded in Banjara Hills with just one cloud kitchen serving select neighborhoods.'
    },
    {
      year: '2021',
      title: 'Expansion Begins',
      description: 'Added 5 more cloud kitchens and extended delivery to all major areas in Hyderabad.'
    },
    {
      year: '2022',
      title: 'Menu Innovation',
      description: 'Introduced fusion cuisine and expanded menu to include international favorites with an Indian twist.'
    },
    {
      year: '2023',
      title: 'Tech Integration',
      description: 'Launched our mobile app with real-time order tracking and personalized recommendations.'
    },
    {
      year: '2024',
      title: 'Sustainability Focus',
      description: 'Shifted to eco-friendly packaging and started sourcing ingredients from local farmers.'
    },
    {
      year: '2025',
      title: 'Regional Expansion',
      description: 'Expanded operations to Bangalore and Chennai, bringing authentic Hyderabadi flavors to new cities.'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Arjun Reddy',
      role: 'Founder & Head Chef',
      bio: 'With 15 years of culinary expertise in 5-star hotels across India, Arjun brings his passion for authentic Hyderabadi cuisine to TastyBites.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Operations Manager',
      bio: 'Previously leading logistics at a major food tech company, Priya ensures our delivery systems run flawlessly from order to doorstep.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      role: 'Executive Chef',
      bio: 'A culinary artist specializing in Hyderabadi biryani, Ravi has perfected traditional recipes while adding his innovative touch to every dish.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Anita Desai',
      role: 'Customer Experience Head',
      bio: 'Anita ensures every customer interaction exceeds expectations, from website navigation to post-delivery feedback.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Karthik Nair',
      role: 'Innovation Chef',
      bio: 'Specializing in fusion cuisine, Karthik creates exciting new flavor combinations that blend global techniques with local ingredients.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Lakshmi Rao',
      role: 'Nutrition Expert',
      bio: 'Lakshmi ensures our menu caters to all dietary needs while maintaining the authentic flavors that make our food special.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Cloud Kitchen',
      organization: 'Hyderabad Food Awards'
    },
    {
      year: '2022',
      title: 'Most Innovative Menu',
      organization: 'South Indian Culinary Association'
    },
    {
      year: '2024',
      title: 'Excellence in Food Delivery',
      organization: 'Restaurant Technology Awards'
    },
    {
      year: '2023',
      title: 'Best Biryani in the City',
      organization: 'Times Food Guide'
    }
  ];

  const values = [
    {
      icon: <Award className="text-orange-500 w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on ingredients or preparation methods. Each dish is crafted with care and attention to detail."
    },
    {
      icon: <Users className="text-orange-500 w-8 h-8" />,
      title: "Community Focus",
      description: "We're proud to be part of Hyderabad's vibrant food scene and strive to give back to our community."
    },
    {
      icon: <Clock className="text-orange-500 w-8 h-8" />,
      title: "Reliable Service",
      description: "We understand that timely delivery is as important as tasty food. We promise both, every single time."
    },
    {
      icon: <ChefHat className="text-orange-500 w-8 h-8" />,
      title: "Culinary Excellence",
      description: "Our chefs blend traditional techniques with modern innovations to create unforgettable dining experiences."
    },
    {
      icon: <Star className="text-orange-500 w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Every decision we make is guided by one question: Will this enhance our customers' experience?"
    },
    {
      icon: <TrendingUp className="text-orange-500 w-8 h-8" />,
      title: "Continuous Improvement",
      description: "We're always looking for ways to refine our recipes, improve our service, and grow our offerings."
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="pt-16 bg-white"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1e293b] py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={resto}
            alt="Restaurant interior"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-transparent to-[#1e293b]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-[#E05D0C]">
                <Utensils className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A journey that began with a passion for bringing the authentic flavors of Hyderabad 
              to your doorstep, one delicious meal at a time.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {['story', 'journey', 'team', 'values'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium transition-colors relative ${
                activeTab === tab ? 'text-[#E05D0C]' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#E05D0C]" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      {activeTab === 'story' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="h-1 w-20 bg-[#E05D0C] mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Passion to Plate</h2>
              <p className="text-gray-600 leading-relaxed">
                TastyBites was born from a simple yet powerful idea - to bring the rich culinary heritage of Hyderabad to food lovers across the city, without compromising on quality or authenticity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small cloud kitchen in Banjara Hills has now grown into a beloved food delivery brand with multiple locations throughout Hyderabad. Our success comes from our unwavering commitment to quality ingredients, traditional recipes with modern twists, and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each dish at TastyBites tells a story - of ancient spice routes, royal kitchens, and family traditions passed down through generations. We take pride in preserving these culinary treasures while making them accessible to a new generation of food enthusiasts.
              </p>
            </motion.div>

            <motion.div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-2xl relative z-10"
              >
                <img
                  src={passian}
                  alt="Restaurant kitchen"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#0e9f89] rounded-lg -z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFC252] rounded-full -z-0 opacity-50"></div>
            </motion.div>
          </div>

          {/* Founder's Message */}
          <div className="max-w-4xl mx-auto mt-24 px-6 py-12 bg-[#FFF8E8] rounded-xl relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Arjun Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold text-gray-800 mt-6 mb-6">A Message from Our Founder</h3>
            <p className="text-gray-600 italic text-center mb-6">
              "I grew up watching my mother and grandmother create magic in our family kitchen. The aroma of spices, the sizzling of the pans, and the joy on people's faces when they tasted our food - these memories shaped my culinary journey. With TastyBites, I wanted to share not just food, but the love and tradition that goes into every authentic Hyderabadi dish. Our mission is simple: to deliver happiness, one meal at a time."
            </p>
            <p className="text-right font-medium text-gray-800">- Arjun Reddy, Founder & Head Chef</p>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white py-16 my-16 rounded-xl"
          >
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">TastyBites by Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <motion.div 
                    key={stat.id} 
                    className="text-center"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards Section */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by industry experts and food critics
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#E05D0C]"
                >
                  <div className="text-3xl font-bold text-[#0e9f89] mb-2">{award.year}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Our Journey Section */}
      {activeTab === 'journey' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Culinary Journey</h2>
            <p className="text-gray-600">
              From a single kitchen to becoming one of Hyderabad's most loved food brands - here's our story year by year
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:ml-auto md:mr-1/2' : 'md:text-left md:pl-16 md:mr-auto md:ml-1/2'}`}
                style={{ maxWidth: "calc(50% - 32px)" }}
              >
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:-right-8' : 'left-0 md:-left-8'} mt-1.5 transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'} z-10`}>
                  <div className="w-16 h-16 rounded-full bg-[#E05D0C] flex items-center justify-center text-white font-bold shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="max-w-6xl mx-auto mt-24">
            <div className="text-center mb-12">
              <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey in Pictures</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Chef cooking" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Biryani preparation" />
                </motion.div>
              </div>
              <div className="grid gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1574586595103-6775e147e412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwaWNlJTIwbWFya2V0fGVufDB8fDB8fHww" alt="Spice market" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food delivery" />
                </motion.div>
              </div>
              <div className="grid gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1661582001283-cb723906b901?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjBpbmdyZWRpZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="Fresh ingredients" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Team meeting" />
                </motion.div>
              </div>
              <div className="grid gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Cloud kitchen" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg"
                >
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Mobile app" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Team Section */}
      {activeTab === 'team' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The talented individuals who work tirelessly to bring you the authentic flavors of Hyderabad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#E05D0C] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-[#1e293b] to-[#334155] text-white rounded-xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                <p className="mb-6 text-gray-300">
                  Passionate about food? Looking for an exciting career in the culinary world? 
                  We're always on the lookout for talented individuals to join our growing family.
                </p>
                <button className="bg-[#E05D0C] hover:bg-[#c04a08] transition-colors text-white font-medium px-6 py-3 rounded-md inline-block self-start">
                  View Open Positions
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src={join}
                  alt="Team cooking" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Our Values Section */}
      {activeTab === 'values' && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 py-12"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              The guiding principles that drive every decision we make and every dish we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-[#E05D0C]"
              >
                <div className="p-8">
                  <div className="bg-[#FFF8E8] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customer Stories */}
          <div className="max-w-6xl mx-auto mt-24">
            <div className="text-center mb-12">
              <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values in Action</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our commitment to our values translates into real experiences for our customers
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFF8E8] rounded-2xl p-8 mb-8 relative"
            >
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#E05D0C]" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Family enjoying food" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FFC252]" fill="#FFC252" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-600">5.0 Rating</span>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "We ordered food for a family gathering and everyone was impressed by both the quality and quantity. The biryani was authentic with perfectly cooked rice and tender meat. The delivery was exactly on time despite it being a rainy day. What truly stood out was how they accommodated our special requests for spice levels for different family members."
                  </p>
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800">Rahul Mehra</div>
                    <span className="mx-2 text-gray-500">•</span>
                    <div className="text-sm text-gray-600">Loyal customer since 2021</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0e9f89]/10 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-[#0e9f89]" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 order-2 md:order-1">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FFC252]" fill="#FFC252" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-600">5.0 Rating</span>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "As someone with dietary restrictions, finding good food delivery options is always challenging. The team at TastyBites went above and beyond to create a special version of their signature dishes that met my needs without compromising on flavor. Their attention to detail and commitment to customer satisfaction is unmatched."
                  </p>
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800">Priya Nair</div>
                    <span className="mx-2 text-gray-500">•</span>
                    <div className="text-sm text-gray-600">Regular customer</div>
                  </div>
                </div>
                <div className="md:col-span-1 order-1 md:order-2">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Chef preparing food" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sustainability Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto mt-24 bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Sustainability Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#E05D0C] rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Eco-friendly packaging made from biodegradable materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#E05D0C] rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Partnering with local farmers to reduce food miles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#E05D0C] rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Energy-efficient practices in all our kitchens</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#E05D0C] rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Food waste reduction programs and composting initiatives</span>
                  </li>
                </ul>
                <button className="mt-6 bg-white text-[#1e293b] hover:bg-gray-100 transition-colors font-medium px-6 py-3 rounded-md inline-block">
                  Learn More
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src={commitment} 
                  alt="Sustainable practices" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Location Section - Always Visible */}
      <div className="bg-gray-100 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our main kitchen or order online for delivery across Hyderabad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 relative">
                {/* This would be an actual map in production */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={40} className="mx-auto text-[#E05D0C]" />
                    <p className="mt-2 font-medium">Map Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Main Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="mt-1 text-[#E05D0C]" />
                    <span className="text-gray-700">
                      123 Jubilee Hills, Hyderabad, Telangana 500033
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-[#E05D0C]" />
                    <span className="text-gray-700">10:00 AM - 11:00 PM (Mon-Fri)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-[#E05D0C]" />
                    <span className="text-gray-700">10:00 AM - 12:00 AM (Sat-Sun)</span>
                  </div>
                </div>
                <button className="mt-6 bg-[#E05D0C] hover:bg-[#c04a08] transition-colors text-white font-medium px-6 py-3 rounded-md inline-block">
                  Get Directions
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery Areas</h3>
                <p className="text-gray-600 mb-6">
                  We currently deliver to the following areas in Hyderabad with an average delivery time of 30 minutes:
                </p>
                <div className="grid grid-cols-2 gap-y-3 mb-6">
                  {['Jubilee Hills', 'Banjara Hills', 'Hitech City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Ameerpet', 'Begumpet'].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#E05D0C]"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Don't see your area? Contact us to check if we can deliver to your location.
                </p>
                <button className="mt-2 bg-[#1e293b] hover:bg-[#334155] transition-colors text-white font-medium px-6 py-3 rounded-md inline-block">
                  Check Delivery Area
                </button>
              </div>
              <div className="h-48 bg-gradient-to-r from-[#E05D0C] to-[#FFC252] p-6 flex items-center justify-center text-center">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Order Now!</h4>
                  <p className="text-white mb-4">Get your favorite Hyderabadi dishes delivered hot to your doorstep</p>
                  <div className="text-2xl font-bold text-white">+91 9876543210</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section with Accordion */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "How do you ensure food quality during delivery?",
              answer: "We use specially designed insulated bags that keep hot food hot and cold food cold. All orders are prepared just before dispatch to ensure maximum freshness, and our average delivery time is under 30 minutes."
            },
            {
              question: "Do you cater to dietary restrictions?",
              answer: "Absolutely! We offer vegetarian, vegan, gluten-free, and low-calorie options. You can specify any dietary requirements or allergies in the special instructions section when placing your order."
            },
            {
              question: "What is your minimum order value?",
              answer: "Our minimum order value is ₹200 for delivery. We waive the delivery fee for orders above ₹500."
            },
            {
              question: "Do you offer bulk orders for events?",
              answer: "Yes, we specialize in catering for events of all sizes. Please contact us at least 24 hours in advance for bulk orders, and our team will help customize a menu based on your preferences and budget."
            },
            {
              question: "How can I provide feedback about my order?",
              answer: "Customer feedback is extremely important to us. You can rate your order through our app or website, or call our customer service line. We carefully review all feedback to continuously improve our service."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-white hover:bg-gray-50">
                  <span className="text-gray-800">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="bg-gray-50 px-4 py-3 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-2 h-1 w-16 bg-[#E05D0C] mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Foodie Community</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive offers, new menu updates, and food tips straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto border-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 text-white rounded-l-md outline-none focus:outline-none focus:ring-2 focus:ring-[#E05D0C]"
              />
              <button className="bg-[#E05D0C] hover:bg-[#c04a08] transition-colors text-white font-medium px-6 py-3 rounded-md sm:rounded-l-none">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              By subscribing, you agree to receive marketing emails from TastyBites. 
              Don't worry, we respect your privacy and won't share your information.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;