import React, { createContext, useContext, useState } from "react";
import img from "../assets/serviceCard2.webp";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
// ... import all your images here

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioItems] = useState([
    {
      id: "1",
      title: "Pre-Wedding and Wedding Films",
      photos: [img, img1, img2 /* ... add up to 40 images */]
    },
    {
      id: "2",
      title: "Wedding Reception",
      photos: [img, img1, img2 /* ... */]
    },
    {
      id: "3",
      title: "Haldi Function Photos",
      photos: [img, img1, img2]
    },
    // Add all portfolio data here...
  ]);

  const getPortfolioById = (id) => portfolioItems.find(item => item.id === id);

  return (
    <PortfolioContext.Provider value={{ portfolioItems, getPortfolioById }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
