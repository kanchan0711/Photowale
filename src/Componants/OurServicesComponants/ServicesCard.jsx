import React from 'react';

const ServicesCard = ({ img, title }) => {
  return (
    // <div className="w-full h-[350px] md:w-1/2 lg:w-1/4 p-2 group overflow-hidden">
    //   <div className="bg-white relative">
    //     {/* Image container with transition */}
    //     <div className="overflow-hidden">
    //       <img
    //         src={img}
    //         alt="service"
    //         className="w-full h-64 object-cover transform transition-transform duration-200 ease-in-out group-hover:scale-115"
    //       />
    //     </div>

    //     {/* Bottom text box */}
    //     <div className="absolute w-full bottom-[-75px]">
    //       <div className="bg-[#F5F5F5] py-10 flex justify-center items-center mx-3">
    //         <p className="text-center text-gray-600 text-sm font-medium uppercase px-2">
    //           {title}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white rounded-md shadow-xl hover:shadow-lg transition-shadow duration-300 p-8 cursor-pointer">
    <div className="overflow-hidden rounded-md">
      <img
        src={img}
        alt={title}
        className="w-[22rem] h-96 object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
    <h3 className="text-center text-gray-800 text-lg font-medium mt-4">
      {title}
    </h3>
  </div>
  );
};

export default ServicesCard;
