import React from 'react';
import { motion } from 'motion/react';
import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: "500+", label: "Happy Clients" },
    { icon: <FaAward />, number: "15+", label: "Years Experience" },
    { icon: <FaHandshake />, number: "1000+", label: "Properties Sold" },
    { icon: <FaCheckCircle />, number: "98%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Trust & Transparency",
      description: "We believe in honest communication and transparent dealings with all our clients."
    },
    {
      title: "Excellence",
      description: "Committed to delivering exceptional service and exceeding expectations every time."
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge technology to make your property search effortless."
    },
    {
      title: "Client-Centric",
      description: "Your dreams and goals are at the heart of everything we do."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">
            Who We Are
          </p>
          <h1 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-neutral-800">
            About Us
          </h1>
          <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 mt-2 sm:mt-3"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Left - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 overflow-visible"
          >
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://www.pexels.com/download/video/3129957/"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl z-10"
            >
              <div className="text-center">
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  15+
                </p>
                <p className="text-[9px] sm:text-xs text-neutral-600 font-semibold mt-0.5 sm:mt-1 whitespace-nowrap">
                  Years of Trust
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-2 mt-6 lg:mt-0"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-800 mb-3 sm:mb-4">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Real Estate
              </span>
            </h2>
            
            <p className="text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              At <span className="font-semibold text-neutral-800">DreamSpace Realty</span>, 
              we're more than just a real estate company. We're dream makers, turning 
              your vision of the perfect home into reality.
            </p>
            
            <p className="text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              With over 15 years of experience in the industry, we've helped thousands 
              of families find their dream homes. Our dedicated team of professionals 
              combines market expertise with personalized service to ensure your 
              real estate journey is smooth and successful.
            </p>

            <p className="text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6">
              Whether you're buying your first home, upgrading to a larger space, or 
              investing in real estate, we're here to guide you every step of the way.
            </p>

            <button className="text-white bg-neutral-800 px-4 sm:px-6 py-2 sm:py-3 w-fit text-xs sm:text-sm hover:bg-neutral-900 transition-all duration-300 rounded">
              Learn More About Us
            </button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 text-center border border-neutral-100"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl text-neutral-800 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text mb-1">
                {stat.number}
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Values Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">
              What Drives Us
            </p>
            <h2 className="font-inter font-bold text-xl sm:text-2xl lg:text-3xl uppercase text-neutral-800">
              Our Core Values
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 mt-2 sm:mt-3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-neutral-50 to-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                  <FaCheckCircle className="text-white text-base sm:text-lg lg:text-xl" />
                </div>
                <h3 className="font-inter text-base sm:text-lg font-semibold text-neutral-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl h-[250px] sm:h-[350px] md:h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">
                Meet Our Expert Team
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm lg:text-base max-w-2xl">
                Dedicated professionals committed to making your real estate dreams come true
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;