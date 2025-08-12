import React from 'react'
import img from "../../assets/Gal3.jpg";
import { Link } from 'react-router';


const YtRedirectionBanner = () => {
  return (
    <Link
    onClick={(e) => {
      e.preventDefault(); // prevent internal routing
      window.open("https://www.youtube.com/results?search_query=photowaale", "_blank", "noopener,noreferrer");
    }}
    to="#"
  >
    <div
      className="relative flex flex-col items-center justify-center text-center h-[300px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`, // replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          VIEW OUR WEDDING FILMS
        </h1>
        <p className="mt-2 text-sm md:text-base tracking-widest text-gray-500">
          CLICKING HERE WILL REDIRECT YOU TO OUR YOUTUBE CHANNEL
        </p>
      </div>
    </div>
    </Link>
  )
}

export default YtRedirectionBanner