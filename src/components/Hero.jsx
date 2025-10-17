import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Top Content */}
      <div className="max-w-7xl relative font-inter w-full flex flex-col md:flex-row md:gap-10 items-center max-lg:mt-20 mt-15 pb-10 pt-10 px-6 md:px-2">
        {/* Left Section */}

        <div className="w-full md:w-7/12 flex flex-col mb-6 md:mb-0">
          <h1 className="text-3xl  font-inter uppercase sm:text-4xl md:text-5xl font-semibold text-neutral-800 leading-[1.2] mb-4 flex flex-col items-start">
            {/* First part of the text with video inline */}
            <span className="flex font-inter items-center space-x-3">
              <span className=" font-inter">Find the</span>

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-32 h-12 md:w-40 max-lg:hidden md:h-16 object-cover rounded-full"
              >
                <source
                  src="https://www.pexels.com/download/video/11652280/"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
             
              <span className="bg-gradient-to-l font-inter from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Perfect
              </span>
            </span>

            {/* Second part of the text */}
            <span className="mt-2  font-inter">
              <span className="bg-gradient-to-l font-inter from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Space
              </span>{" "}
              for You
            </span>
          </h1>

          <button className="text-white bg-neutral-800 px-4 py-2 w-fit text-xs mt-2 hover:bg-neutral-900 transition">
            Book a Call
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-5/12 flex items-start md:items-center text-neutral-400">
          <p className="text-sm sm:text-base">
            Explore premium homes and apartments tailored for you. At{" "}
            <span className="font-semibold">DreamSpace Realty</span>, we help
            you find your perfect home quickly and easily. From cozy apartments
            to luxurious estates, your dream home is just a click away.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-7xl rounded-xl h-[40vh] sm:h-[50vh] md:h-[60vh] mt-6">
        <video
          className="w-full h-full rounded-md object-cover"
          src="https://www.pexels.com/download/video/2325093/" // Replace with your real estate video
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Hero;
