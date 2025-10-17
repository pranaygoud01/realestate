import React from 'react';
import { motion } from 'framer-motion';
import propertysearch from '../assets/property-search.mp4';
import propertymanagement from '../assets/Property-management.mp4';
import propertyinvestment from '../assets/Property-Investment.mp4';
import personal from "../assets/personal.mp4";
const ServiceCard = ({ title, description, video, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow hover:shadow-xl  min-h-[280px] sm:min-h-[300px]"
    >
      {/* Center video wrapper */}
      <div className="hidden sm:block">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,
            transition: { duration: 0.5, delay: index * 0.1 + 0.2 }
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <video
            className="w-full h-36 lg:h-40 mb-6 object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      <div className="block sm:hidden">
        <div className="flex justify-center">
          <video
            className="w-8/12 h-40 mb-4 object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="hidden sm:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 + 0.3 }
          }}
          viewport={{ once: true }}
        >
          <h3 className="font-inter text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-800">
            {title}
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="block sm:hidden">
        <h3 className="font-inter text-lg font-semibold mb-2 text-neutral-800">
          {title}
        </h3>
        <p className="text-neutral-500 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};


const Services = () => {
  const services = [
    {
      title: "Property Search",
      description:
        "Find your dream property with our advanced search tools and extensive database of listings.",
      video: propertysearch,
    },
    {
      title: "Property Management",
      description:
        "Professional management services for property owners and investors.",
      video: propertymanagement,
    },
    {
      title: "Investment Advisory",
      description:
        "Expert guidance on real estate investments and market analysis.",
      video: propertyinvestment,
    },
    {
      title: "Personalized Support",
      description:
        "Dedicated support throughout your real estate journey.",
      video: personal,
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="max-w-7xl w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">
            Discover
          </p>
          <h1 className="font-inter font-bold text-3xl sm:text-4xl uppercase text-neutral-800">
            Services
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 mt-2 sm:mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
