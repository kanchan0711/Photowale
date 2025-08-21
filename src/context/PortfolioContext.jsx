import React, { createContext, useContext, useState } from "react";
import img from "../assets/serviceCard2.webp";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import rImg1 from "../assets/rishikeshPreweddingPhotoes/1746083862280.jpg";
import rImg2 from "../assets/rishikeshPreweddingPhotoes/1746084401711.jpg";
import rImg3 from "../assets/rishikeshPreweddingPhotoes/1746084424832.jpg";
import rImg4 from "../assets/rishikeshPreweddingPhotoes/1746084631127.jpg";
import rImg5 from "../assets/rishikeshPreweddingPhotoes/1746084656116.jpg";
import rImg6 from "../assets/rishikeshPreweddingPhotoes/1746084707155.jpg";
import rImg7 from "../assets/rishikeshPreweddingPhotoes/1746085218737.jpg";
import rImg8 from "../assets/rishikeshPreweddingPhotoes/1746085325836.jpg";
import rImg9 from "../assets/rishikeshPreweddingPhotoes/1746086738850.jpg";
// ... import all your images here

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioItems] = useState([
    {
      id: "home-img",
      photos: [img, img1, img2, rImg1, rImg2, rImg3, rImg4, rImg5, rImg6, rImg7, rImg8, rImg9 /* ... add up to 40 images */]
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
