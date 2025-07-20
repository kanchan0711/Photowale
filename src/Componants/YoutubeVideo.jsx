import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import img from "../assets/HomeYoutube.png"
import { Play } from 'lucide-react';

const CustomYouTubePlayer = () => {
  const playerRef = useRef(null);
  const [started, setStarted] = useState(false);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const handleStart = () => {
    setStarted(true);
    playerRef.current.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className="relative w-full  mx-auto aspect-video  overflow-hidden shadow-lg">
      {/* YouTube Video */}
      <YouTube
        videoId="ufCv-gj5ThQ"
        opts={{ ...opts, width: '100%', height: '100%' }}
        onReady={onPlayerReady}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay Image and Button */}
      {!started && (
        <div className="absolute inset-0 z-10">
          {/* Thumbnail Image */}
          <img
            src={img} // replace with your thumbnail URL or import
            alt="Video Preview"
            className="w-full h-full object-cover"
          />
          {/* Button Overlay */}
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <button
              onClick={handleStart}
              className="bg-white text-black font-bold p-6  rounded-full text-lg hover:bg-gray-200 transition"
            >
              <Play size={40} color='#787878' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomYouTubePlayer;
