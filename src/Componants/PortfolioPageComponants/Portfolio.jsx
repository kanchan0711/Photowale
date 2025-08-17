import React from 'react';
import Banner from '../Banner';
import PortfolioCard from './PortfolioCard';
import { usePortfolio } from '../../context/PortfolioContext';
import { useNavigate } from 'react-router-dom';
import Gallery from '../Gallery';

const Portfolio = () => {
  const { portfolioItems } = usePortfolio();
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    if (item.title === "Pre-Wedding and Wedding Films") {
      navigate("/prewedding"); // 👈 your special route
    } else {
      navigate(`/portfolio/${item.id}`);
    }
  };

  return (
    <div>
      <Banner img={portfolioItems[0].photos[0]} title="Portfolio" />
      <h1 className="text-5xl md:text-6xl text-center text-[#EC9A96] font-edu my-5 md:my-20">
        Our Work
      </h1>

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleCardClick(item)} 
            className="cursor-pointer"
          >
            <PortfolioCard img={item.photos[0]} title={item.title} />
          </div>
        ))}
      </div>
      <Gallery/>
    </div>
  );
};

export default Portfolio;
