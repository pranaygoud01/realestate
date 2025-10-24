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
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "Property Search",
      description: "Find your dream property with our advanced search tools and extensive database of listings.",
      video: propertysearch,
      icon: <RiSearchLine />,
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-600",
      count: "01"
    },
    {
      title: "Property Management",
      description: "Professional management services for property owners and investors.",
      video: propertymanagement,
      icon: <RiBuilding2Line />,
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
      borderColor: "border-emerald-600",
      count: "02"
    },
    {
      title: "Investment Advisory",
      description: "Expert guidance on real estate investments and market analysis.",
      video: propertyinvestment,
      icon: <RiBarChartBoxLine />,
      color: "bg-amber-600",
      lightColor: "bg-amber-50",
      borderColor: "border-amber-600",
      count: "03"
    },
    {
      title: "Personalized Support",
      description: "Dedicated support throughout your real estate journey.",
      video: personal,
      icon: <RiCustomerService2Line />,
      color: "bg-rose-600",
      lightColor: "bg-rose-50",
      borderColor: "border-rose-600",
      count: "04"
    },
  ];

  const stats = [
    { icon: <MdTrendingUp />, value: "250%", label: "Growth Rate", color: "text-blue-600" },
    { icon: <MdSecurity />, value: "100%", label: "Secure", color: "text-emerald-600" },
    { icon: <MdSpeed />, value: "24/7", label: "Support", color: "text-amber-600" },
    { icon: <MdVerified />, value: "5000+", label: "Properties", color: "text-rose-600" }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </motion.div>
          
          <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight">
            Premium Real Estate
            <br />
            <span className="text-slate-400">Solutions</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Experience excellence in every interaction. Our comprehensive services are designed to exceed your expectations.
          </p>
        </motion.div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-14 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Video Background with Overlay */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/50"></div>
                
                {/* Floating Number Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center"
                >
                  <span className="text-white font-bold text-sm sm:text-base">{service.count}</span>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${service.color} rounded-xl flex items-center justify-center text-white text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="font-inter text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Action Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 text-slate-900 font-semibold text-xs sm:text-sm group/link`}
                >
                  <span>Explore</span>
                  <RiArrowRightLine className="text-base transition-transform group-hover/link:translate-x-1" />
                </motion.button>
              </div>

              {/* Accent Border on Hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </motion.div>
          ))}
        </div>

        {/* Modern Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Trusted by Thousands
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`text-5xl sm:text-6xl ${stat.color} mb-4 flex justify-center`}
                >
                  {stat.icon}
                </motion.div>
                <p className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-medium uppercase tracking-wide">
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
