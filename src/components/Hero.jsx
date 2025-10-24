import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiHomeSmile2Line, RiMapPinLine, RiStarFill } from "react-icons/ri";
import { MdApartment, MdVilla, MdBusiness, MdBed, MdBathtub, MdSquareFoot } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  const [currentProperty, setCurrentProperty] = useState(0);

  const propertyTypes = [
    { icon: <MdApartment />, label: "Apartments", count: "150+" },
    { icon: <MdVilla />, label: "Villas", count: "80+" },
    { icon: <MdBusiness />, label: "Commercial", count: "45+" },
  ];

  const featuredProperties = [
    {
      name: "Modern Downtown Loft",
      location: "Manhattan, NY",
      price: "$1,250,000",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80"
    },
    {
      name: "Luxury Beach Villa",
      location: "Miami, FL",
      price: "$3,800,000",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80"
    },
    {
      name: "Urban Penthouse",
      location: "Los Angeles, CA",
      price: "$2,100,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80"
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 lg:pt-0">
      

      {/* Main Content */}
      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg border border-neutral-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-700">Premium Properties Available</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Discover Your
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
                Dream Home
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 text-neutral-700">
                Today
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-xl">
              Experience luxury living with our curated collection of premium properties. 
              From modern apartments to stunning villas, find your perfect space with{" "}
              <span className="font-semibold text-neutral-800">DreamSpace Realty</span>.
            </p>

            {/* Featured Property Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-neutral-200"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProperty}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5"
                >
                  {/* Property Image */}
                  <div className="relative w-full sm:w-40 h-32 sm:h-full rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={featuredProperties[currentProperty].image}
                      alt={featuredProperties[currentProperty].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] sm:text-xs font-bold text-neutral-900">
                      Featured
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-neutral-900 mb-1">
                            {featuredProperties[currentProperty].name}
                          </h3>
                          <div className="flex items-center gap-1 text-neutral-600">
                            <HiLocationMarker className="text-orange-500 text-xs sm:text-sm" />
                            <span className="text-xs sm:text-sm">
                              {featuredProperties[currentProperty].location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-gradient-to-r from-purple-100 to-orange-100 px-2 py-1 rounded-full">
                          <RiStarFill className="text-orange-500 text-xs" />
                          <span className="text-xs font-semibold text-neutral-900">
                            {featuredProperties[currentProperty].rating}
                          </span>
                        </div>
                      </div>

                      {/* Property Stats */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm text-neutral-600">
                        <div className="flex items-center gap-1">
                          <MdBed className="text-neutral-500" />
                          <span>{featuredProperties[currentProperty].beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdBathtub className="text-neutral-500" />
                          <span>{featuredProperties[currentProperty].baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdSquareFoot className="text-neutral-500" />
                          <span>{featuredProperties[currentProperty].sqft} sqft</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] sm:text-xs text-neutral-500 mb-0.5">Starting from</p>
                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                          {featuredProperties[currentProperty].price}
                        </p>
                      </div>
                      <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500 text-white text-xs sm:text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 pb-4 px-4">
                {featuredProperties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProperty(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentProperty === index
                        ? "w-8 bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500"
                        : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    aria-label={`View property ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-scroll indicator */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-neutral-600 flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Properties
              </div>
            </motion.div>

            {/* Property Types */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-4">
              {propertyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-neutral-200 text-center cursor-pointer hover:shadow-xl transition-all"
                >
                  <div className="text-2xl sm:text-3xl text-neutral-700 mb-1 sm:mb-2 flex justify-center">
                    {type.icon}
                  </div>
                  <p className="text-[10px] sm:text-xs font-semibold text-neutral-800">{type.label}</p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1">{type.count}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2"
          >
            {/* Main Video/Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 right-0 w-full h-[65%] sm:h-[70%] rounded-xl sm:rounded-xl overflow-hidden shadow-2xl border-2 sm:border-0 border-white"
            >
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80"
                />
                
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Badge on Video */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl"
              >
                <p className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                  Featured
                </p>
              </motion.div>
            </motion.div>

            {/* Small Video Card 1 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute bottom-20 sm:bottom-24 left-0 w-36 h-24 sm:w-48 sm:h-32 rounded-xl sm:rounded-xl overflow-hidden shadow-xl border-2 sm:border- border-white cursor-pointer"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://www.pexels.com/download/video/11652280/"
                  type="video/mp4"
                />
              </video>
            </motion.div>

            {/* Small Image Card 2 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute bottom-0 right-8 sm:right-12 w-32 h-32 sm:w-40 sm:h-40 rounded-xl sm:rounded-xl overflow-hidden shadow-xl border-2 sm:border-2 border-white cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80"
                alt="Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2 sm:p-3">
                <p className="text-white text-[10px] sm:text-xs font-semibold">Luxury Villa</p>
              </div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="absolute top-1/2 -left-4 sm:-left-8 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-neutral-200"
            >
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                500+
              </p>
              <p className="text-[10px] sm:text-xs text-neutral-600 font-medium whitespace-nowrap">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
