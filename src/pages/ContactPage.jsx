import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Building, 
  Globe 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('hyderabad');
  const [activeFaq, setActiveFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field if exists
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) return;
    
    // Simulate subscription
    setTimeout(() => {
      setSubscribed(true);
      setNewsletterEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1000);
  };

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

  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      title: 'Our Main Location',
      details: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033'
    },
    {
      id: 2,
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      title: 'Phone Number',
      details: '+91 40 6677 8899'
    },
    {
      id: 3,
      icon: <Mail className="w-5 h-5 text-orange-500" />,
      title: 'Email Address',
      details: 'hello@tastybites.in'
    },
    {
      id: 4,
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: 'Working Hours',
      details: 'Every day: 11:00 AM - 11:00 PM'
    }
  ];
  
  const locationTabs = [
    {
      id: 'hyderabad',
      name: 'Jubilee Hills',
      city: 'Hyderabad',
      address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
      phone: '+91 40 6677 8899'
    },
    {
      id: 'bangalore',
      name: 'Indiranagar',
      city: 'Bangalore',
      address: '12th Main Road, Indiranagar, Bangalore, Karnataka 560038',
      phone: '+91 80 4455 6677'
    },
    {
      id: 'mumbai',
      name: 'Bandra West',
      city: 'Mumbai',
      address: 'Linking Road, Bandra West, Mumbai, Maharashtra 400050',
      phone: '+91 22 3344 5566'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white overflow-hidden"
        style={{ marginTop: "0px", paddingTop: "64px" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('src/assets/contact.png')] opacity-30"></div>
          <div className="absolute -right-20 top-1/4 w-64 h-64 bg-[#E05D0C] rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-[#0e9f89] rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
              Let's Connect
            </motion.h1>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-[#E05D0C] mx-auto mb-8"></motion.div>
            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
              We're just a message away. Whether you have questions, feedback, or want to collaborate,
              our team is ready to assist you.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="#contact-form"
              className="inline-flex items-center rounded-full bg-[#E05D0C] hover:bg-[#c24c0a] px-8 py-3 font-medium text-white transition-colors duration-300"
            >
              Contact Us Now 
              <ChevronDown className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="white" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-16 -mt-8 relative z-20">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: info.id * 0.1 }}
                  className="bg-[#FFF8E8] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-50 p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800">{info.title}</h3>
                  </div>
                  <p className="text-gray-600">{info.details}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Form and Map Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                id="contact-form"
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-center"
                  >
                    <Check size={24} className="mr-3 text-green-500" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                        placeholder="What is this about?"
                      />
                      {formErrors.subject && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {formErrors.subject}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                      isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E05D0C] hover:bg-[#c24c0a] hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Locations</h2>
                
                {/* Location Tabs */}
                <div className="flex mb-4 border-b border-gray-200">
                  {locationTabs.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setActiveTab(location.id)}
                      className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === location.id 
                          ? 'text-[#E05D0C] border-b-2 border-[#E05D0C]' 
                          : 'text-gray-600 hover:text-[#E05D0C]'
                      }`}
                    >
                      {location.city}
                    </button>
                  ))}
                </div>
                
                {/* Map and Location Details */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gray-200">
                    {/* This would be replaced with an actual map component */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-4 text-[#E05D0C]" />
                        <p className="text-lg font-medium">{locationTabs.find(loc => loc.id === activeTab)?.name}</p>
                        <p>{locationTabs.find(loc => loc.id === activeTab)?.city}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <Building className="w-5 h-5 text-[#E05D0C] mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-800">Address</h3>
                        <p className="text-gray-600">{locationTabs.find(loc => loc.id === activeTab)?.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#E05D0C] mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-800">Phone</h3>
                        <p className="text-gray-600">{locationTabs.find(loc => loc.id === activeTab)?.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-[#0e9f89] text-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-semibold">Franchise Opportunities</h3>
                  </div>
                  <p className="mt-2 text-white text-opacity-90">
                    Interested in opening a TastyBites franchise in your city? 
                    Contact our business development team at 
                    <a href="mailto:franchise@tastybites.in" className="underline ml-1 hover:text-white">franchise@tastybites.in</a>
                  </p>
                </div>
              </motion.div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
                  <p className="text-white text-opacity-80 mb-4">
                    Stay updated with our new menu items, promotions, and events. Be the first to know about our seasonal specials!
                  </p>
                  
                  {subscribed ? (
                    <div className="flex items-center text-white bg-green-600 bg-opacity-20 rounded-lg p-4">
                      <Check className="h-5 w-5 mr-2" />
                      <span>Thank you for subscribing!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-3">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E05D0C]"
                        required
                      />
                      <button 
                        type="submit"
                        className="px-6 py-3 bg-[#E05D0C] hover:bg-[#c24c0a] rounded-lg font-medium transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
                
                <div className="hidden md:block">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 absolute -top-6 -left-6 bg-[#E05D0C] bg-opacity-20 rounded-full animate-pulse"></div>
                      <div className="w-40 h-40 absolute -bottom-6 -right-6 bg-[#0e9f89] bg-opacity-20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl relative z-10">
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square bg-white bg-opacity-20 rounded-md"></div>
                          ))}
                        </div>
                        <div className="h-8 bg-white bg-opacity-20 rounded-md mb-3"></div>
                        <div className="h-4 bg-white bg-opacity-20 rounded-md mb-2"></div>
                        <div className="h-4 bg-white bg-opacity-20 rounded-md mb-4"></div>
                        <div className="h-8 bg-[#E05D0C] rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;