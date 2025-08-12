import React from 'react';
import Banner from '../Banner';
import img from "../../assets/serviceCard2.webp";
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const portfolioItems = [
    { img: img, title: "Pre-Wedding and Wedding Films" },
    { img: img, title: "Wedding Reception" },
    { img: img, title: "Haldi Function Photos" },
    { img: img, title: "Engagement Ceremony" },
    { img: img, title: "Candid Moments" }
  ];

  return (
    <div>
      {/* Banner */}
      <Banner img={img} title="Portfolio" />
    
      <h1 className="text-5xl md:text-6xl  text-center text-[#EC9A96] font-edu my-5 md:my-20">
          Our Work
        </h1>
      {/* Portfolio Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"> */}

      <div className="flex flex-wrap justify-center gap-10 mt-20">

        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} img={item.img} title={item.title} />
        ))}
      </div>

      <div className="m-5 md:mx-20 md:mt-20">
        <p className="italic font-sans text-2xl font-semibold text-gray-500">At CandidShutters, we conceptualise and design our wedding films after a meticulous study of our lead characters-“The Bride & The Groom”.Stunning cinematography, immersive sound designing, crisp editing and a professional direction give you an opportunity to experience your most precious moments again and again for years to come.</p>
      </div>
    </div>
  );
};

export default Portfolio;
