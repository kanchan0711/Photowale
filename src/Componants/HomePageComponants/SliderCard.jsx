import React from "react";
import introImg from "../../assets/intro.webp";

const SliderCard = ({ title }) => {
  return (

        <div className="max-w-sm bg-white shadow-sm mb-1">
          {/* Image */}
          <img
            className=" w-full h-60 object-cover"
            src={introImg} // replace with your image
            alt="Wedding Photography"
          />
    
          {/* Text */}
          <div className="p-10">
            <h2 className="text-2xl font-sans font-extrabold text-gray-500 uppercase leading-none">
              Best Marathi Wedding Photographer Mumbai
            </h2>
    
            {/* Link */}
            <a
              href="#"
              className="block mt-4 text-sm font-semibold text-gray-700 hover:underline"
            >
              View More
            </a>
          </div>
        </div>
      );
    };
    
 

export default SliderCard;
