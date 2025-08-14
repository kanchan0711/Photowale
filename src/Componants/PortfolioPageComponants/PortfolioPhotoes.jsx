import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePortfolio } from "../../context/PortfolioContext";
import Banner from "../Banner";

const PortfolioPhotoes = () => {
  const { id } = useParams();
  const { getPortfolioById } = usePortfolio();
  const navigate = useNavigate();

  const portfolio = getPortfolioById(id);

  if (!portfolio) {
    return <div className="text-center text-red-500">Portfolio not found!</div>;
  }

  return (
    <div >
     <Banner img={portfolio.photos[0]} title={portfolio.title}/>


      {/* <button 
        className="mb-5 px-4 py-2 bg-gray-300 rounded"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-6">{portfolio.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolio.photos.map((photo, idx) => (
          <img 
            key={idx} 
            src={photo} 
            alt={`${portfolio.title} ${idx + 1}`} 
            className="w-full h-auto rounded shadow-lg"
          />
        ))}
      </div> */}
    </div>
  );
};

export default PortfolioPhotoes;
