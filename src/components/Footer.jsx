import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold">
              Tasty<span className="text-[#E05D0C]">Bites</span>
            </h2>
            <p className="mb-4 text-[#FFF8E8]/80">
              Bringing the authentic flavors of Hyderabad to your doorstep. 
              Quality ingredients, passionate cooking, and timely delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FFF8E8]/70 hover:text-[#E05D0C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-[#E05D0C]" />
                <span className="text-[#FFF8E8]/70">
                  123 Jubilee Hills, Hyderabad, Telangana 500033
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#E05D0C]" />
                <span className="text-[#FFF8E8]/70">+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#E05D0C]" />
                <span className="text-[#FFF8E8]/70">info@tastybites.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-[#FFF8E8]/70">
                <span>Monday - Friday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-[#FFF8E8]/70">
                <span>Saturday - Sunday</span>
                <span>10:00 AM - 12:00 AM</span>
              </li>
            </ul>
            <div className="mt-4 rounded-md bg-[#E05D0C] px-4 py-2 text-sm font-medium text-white hover:bg-[#B91C1C] transition-colors cursor-pointer text-center">
              Order Online Now!
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-[#FFF8E8]/50">
            &copy; {new Date().getFullYear()} TastyBites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;