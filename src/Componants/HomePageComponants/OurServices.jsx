import React from "react";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg"; 

const services = [
  {
    title: "Wedding Photography",
    subtitle: "Wedding",
    img: img11,
  },
  {
    title: "Pre-Wedding Shoots",
    subtitle: "Pre Wedding",
    img: img12,
  },
  {
    title: "Destination Wedding",
    subtitle: "Destination",
    img: img13,
  },
  {
    title: "Event Photography",
    subtitle: "Event",
    img: img14,
  },
];

export default function OurServices() {
  return (
    <div className="py-12">
        <h1 className="text-6xl text-center text-[#EC9A96] font-edu mb-10">
        Let’s create your wedding
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
        {services.map((service, idx) => (
         <div
         key={idx}
         className="relative group overflow-hidden shadow-lg cursor-pointer"
       >
         {/* Image with zoom effect */}
         <img
           src={service.img}
           alt={service.title}
           className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
         />
       
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-gray-700 opacity-30  h transition duration-500 group-hover:opacity-75"></div>
       
         {/* Text */}
         <div className="absolute inset-0 flex flex-col justify-end pb-5 items-center text-center text-white px-3">
           <p className="text-sm font-extrabold uppercase tracking-widest">{service.subtitle}</p>
           <h3 className="text-2xl font-semibold">{service.title}</h3>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
}
