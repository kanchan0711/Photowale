import React from 'react';

const PortfolioCard = ({ img, title }) => {
  return (
    <div className="max-w-sm relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 mb-20">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Title */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] bg-[#f1f1f1] flex items-center justify-center"
        style={{
          width: "300px", // fixed width
          height: "80px"  // fixed height
        }}
      >
        <h3 className="text-center text-gray-500 font-sans font-bold text-lg tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
