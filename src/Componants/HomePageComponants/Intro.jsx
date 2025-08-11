import React from "react";
import introImg from "../../assets/intro.webp";

const Intro = () => {
  return (
    <div className="size-full  my-40 flex md:flex-row flex-col items-center justify-center gap-10">
      <div className="">
        <img
          src={introImg}
          alt="intro"
          className="h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] w-auto -rotate-6"
        />
      </div>

      <div className="relative  w-[80%] md:w-[30%] ">
        <div className="md:absolute left-[-120px] top-[-60px] text-6xl md:text-8xl text-[#EC9A96] font-edu ">
          Photowale
        </div>
        <div className=" text-3xl font-semibold text-gray-500 mt-5">
          <p className="">Who we are?</p>
        </div>
        <div className="text-gray-500 ">
          <p className="mt-5">
            Welcome to CandidShutters, where we infuse magic into your wedding
            memories turning them into timeless tales of love and companionship.
          </p>

          <p className="mt-5">
            We are an award-winning premium wedding photography and films brand,
            known for our artistic, professional and customer centric approach.
          </p>

          <p className="mt-5">
            We believe in and exist to showcase the most beautiful and heartfelt
            stories of your life in their true magnificence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
