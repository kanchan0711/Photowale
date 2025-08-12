import React from 'react'

const Banner = ({img, title}) => {
      return (
        <div
          className="relative flex items-center w-full h-screen justify-center size-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
    
          {/* Text */}
          <h1 className="text-5xl text-white md:text-7xl font-bold font-sans mb-4 uppercase">
            {title}
          </h1>
        </div>
      );
    
}

export default Banner