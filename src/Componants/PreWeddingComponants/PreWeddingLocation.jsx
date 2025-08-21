import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Gal1.jpg"

export default function PreWeddingLocation() {
  const navigate = useNavigate();
  const location =[
    {
        id: "pre-wedding-rishikesh",
        coverImg: img1,
        title: "Rishikesh Prewedding Photos"
    },
    {
        id: "pre-wedding-delhi",
        coverImg: img1,
        title: "Delhi Prewedding Photo s"
    },
    {
        id: "pre-wedding-jaipur",
        coverImg: img1,
        title: "Jaipur Prewedding Photo s"
    }
  ]

  return (
    <div className="py-12">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {location.map((location) => (
          <div
            key={location.id}
            onClick={() => navigate(`/services/${location.id}`)}
            className="relative group overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={location.coverImg}
              alt={location.title}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-30 transition duration-500 group-hover:opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center pb-5 items-center text-center text-white mx-auto">
             
              <h3 className="text-3xl font-sans font-semibold">{location.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

