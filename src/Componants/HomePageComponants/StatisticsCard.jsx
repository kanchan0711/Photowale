import React from "react";
import img from "../../assets/img2.jpg";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useState } from "react";

const StatBlock = ({ end, suffix = "", heading, subtext }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only once per scroll into view
    threshold: 0.5,    // 50% visible
  });

  const [start, setStart] = useState(false);

  if (inView && !start) {
    setStart(true);
  }

  return (
    <div ref={ref} className="lg:w-[42%]">
      <p className="text-6xl font-poppins font-medium text-gray-300 my-4">
        {start && <CountUp end={end} duration={2} />}{suffix}
      </p>
      <p className="text-2xl font-poppins font-bold uppercase text-[#595861]">{heading}</p>
      <p className="text-[#595861] text-lg">{subtext}</p>
    </div>
  );
};


const StatisticsCard = () => {
  return (
    <div className="w-full p-10 lg:p-20 md:flex justify-between items-center gap-10">
      {/* Text Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-6xl  text-[#EC9A96] font-edu mb-10">
        Nurtured to perfection
        </h1>
        <div className="flex flex-wrap justify-between gap-y-16">
          <StatBlock
            end={75}
            suffix="+"
            heading="PreWedding Location"
            subtext="More location Available"
          />
          <StatBlock
            end={1000}
            suffix="+"
            heading="Happy couple"
            subtext="Hailing from varied cultures, regions and religions."
          />
          <StatBlock
            end={10}
            suffix="K+"
            heading="Photoes deliver"
            subtext="Edited pictures of life defining moments."
          />
          <StatBlock
            end={75}
            suffix="+"
            heading="Videos produced"
            subtext="Edited videos that are a real tribute to love and companionship."
          />
        </div>
      </div>

      {/* Image Section */}
      <img
        src={img}
        alt="img"
        className="w-full  md:w-[40%] mt-10 md:mt-0 rounded object-cover"
      />
    </div>
  );
};

export default StatisticsCard;
