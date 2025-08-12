import React from "react";
import sampleVideo from "../../assets/PreWeddingVideo.mp4"; // your video file

export default function PreWeddingVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for dark effect) */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Centered Text */}
      <div className="relative flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4">
          Pre-Wedding and Wedding Films
          </h1>
        </div>
      </div>
    </div>
  );
}
