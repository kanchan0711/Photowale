import React from 'react'

const Banner = ({img, title}) => {
      return (
        <div
        className="relative w-full h-[400px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Center Title */}
        <h1 className="relative text-white text-5xl md:text-6xl font-bold z-10">
          {title}
        </h1>
  
      
      </div>
    
      );
    
}

export default Banner;