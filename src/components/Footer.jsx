import React from 'react';
import { motion } from 'motion/react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Buy Property', href: '#buy' },
    { name: 'Sell Property', href: '#sell' },
    { name: 'Rent Property', href: '#rent' },
    { name: 'Property Management', href: '#management' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+1 (555) 123-4567' },
    { icon: <FaEnvelope />, text: 'info@dreamspace.com' },
    { icon: <FaMapMarkerAlt />, text: '123 Real Estate St, NY 10001' }
  ];

  return (
    <footer className="bg-white text-neutral-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <RiHomeSmile2Line className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="font-inter font-bold text-lg sm:text-xl text-neutral-800">DreamSpace</h3>
            </div>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We turn dreams into addresses.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-neutral-100 hover:bg-gradient-to-l hover:from-purple-500 hover:via-orange-500 hover:to-yellow-500 text-neutral-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-inter font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-neutral-800">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-600 hover:text-neutral-900 text-xs sm:text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-inter font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-neutral-800">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-neutral-600 hover:text-neutral-900 text-xs sm:text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-inter font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-neutral-800">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">
                      {contact.icon}
                    </span>
                  </div>
                  <span className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 pt-8 border-t border-neutral-200"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-inter font-semibold text-lg sm:text-xl mb-2 text-neutral-800">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm mb-4 sm:mb-6">
              Get the latest property updates and exclusive deals delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-6 py-2.5 sm:py-3 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-neutral-600 text-xs sm:text-sm text-center sm:text-left">
              © 2025 DreamSpace Realty. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;