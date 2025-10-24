import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RiSearchLine, RiBuilding2Line, RiBarChartBoxLine, RiCustomerService2Line, RiArrowRightLine } from 'react-icons/ri';
import { MdTrendingUp, MdSecurity, MdSpeed, MdVerified } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import propertysearch from '../assets/property-search.mp4';
import propertymanagement from '../assets/Property-management.mp4';
import propertyinvestment from '../assets/Property-Investment.mp4';
import personal from "../assets/personal.mp4";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Property Search",
      description: "Find your dream property with our advanced search tools and extensive database of listings.",
      video: propertysearch,
      icon: <RiSearchLine />,
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      count: "01"
    },
    {
      title: "Property Management",
      description: "Professional management services for property owners and investors.",
      video: propertymanagement,
      icon: <RiBuilding2Line />,
      gradient: "from-orange-500 via-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      count: "02"
    },
    {
      title: "Investment Advisory",
      description: "Expert guidance on real estate investments and market analysis.",
      video: propertyinvestment,
      icon: <RiBarChartBoxLine />,
      gradient: "from-yellow-500 via-amber-600 to-orange-600",
      bgGradient: "from-yellow-50 to-amber-50",
      count: "03"
    },
    {
      title: "Personalized Support",
      description: "Dedicated support throughout your real estate journey.",
      video: personal,
      icon: <RiCustomerService2Line />,
      gradient: "from-pink-500 via-rose-600 to-red-600",
      bgGradient: "from-pink-50 to-rose-50",
      count: "04"
    },
  ];

  const stats = [
    { icon: <MdTrendingUp />, value: "250%", label: "Growth Rate" },
    { icon: <MdSecurity />, value: "100%", label: "Secure" },
    { icon: <MdSpeed />, value: "24/7", label: "Support" },
    { icon: <MdVerified />, value: "5000+", label: "Properties" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header with Sparkle */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <HiSparkles className="text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Our Expertise</span>
          </div>
          
          <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4">
            Exceptional{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Services
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 1 150 1 200 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="50%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EAB308" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of real estate solutions designed to make your property journey seamless and successful
          </p>
        </motion.div>

        {/* Services Grid - Bento Box Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-xl ${
                index === 0 || index === 3 ? 'md:row-span-1' : ''
              }`}
            >
              {/* Background Video */}
              <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} mix-blend-multiply opacity-40 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full"
                  >
                    <span className="text-white font-bold text-sm">{service.count}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`text-4xl sm:text-5xl p-3 sm:p-4 bg-gradient-to-r ${service.gradient} rounded-2xl text-white shadow-2xl`}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Bottom Section */}
                <div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="font-inter text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm group/btn"
                  >
                    <span>Learn More</span>
                    <RiArrowRightLine className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-white/50 transition-all duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl text-white mb-3 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-white/90 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
