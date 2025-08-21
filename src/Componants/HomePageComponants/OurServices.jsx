import React from "react";
import { useNavigate } from "react-router-dom";
import { useImages } from "../../context/ImageContext";

export default function OurServices() {
  const { services } = useImages();
  const navigate = useNavigate();

  return (
    <div className="py-12">
      <h1 className="text-6xl text-center text-[#EC9A96] font-edu mb-10">
        Let’s create your wedding
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => {
              if (service.subtitle === "Pre Wedding") {
                navigate("/prewedding");  // 👈 custom route for this one
              } else {
                navigate(`/services/${service.id}`); // 👈 default route for others
              }
            }}
            className="relative group overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={service.coverImg}
              alt={service.title}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-40 transition duration-500 group-hover:opacity-50"></div>
            <div className="absolute  inset-0 flex flex-col justify-center pb-5 items-center text-center text-white mx-auto">
              <p className="text-sm shadow-xl font-extrabold uppercase tracking-widest">
                {service.subtitle}
              </p>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
