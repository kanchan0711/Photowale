import React from "react";
import introImg from "../../assets/intro.webp";

const SliderCard = ({ img,title, link }) => {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block max-w-sm bg-white shadow-sm mb-1 hover:shadow-lg transition"
  >
        <div className="max-w-sm bg-white shadow-sm mb-10">
          {/* Image */}
          <img
            className=" w-full h-60 object-cover"
            src={img} // replace with your image
            alt="Wedding Photography"
          />
    
          {/* Text */}
          <div className="p-10">
            <h2 className="text-2xl font-sans font-extrabold text-gray-500 uppercase leading-none">
              {title}
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
        </a>
      );
    };
    
 

export default SliderCard;
