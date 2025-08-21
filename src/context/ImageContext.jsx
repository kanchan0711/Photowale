import React, { createContext, useContext } from "react";

import rImg1 from "../assets/rishikeshPreweddingPhotoes/1746083862280.jpg";
import rImg2 from "../assets/rishikeshPreweddingPhotoes/1746084401711.jpg";
import rImg3 from "../assets/rishikeshPreweddingPhotoes/1746084424832.jpg";
import rImg4 from "../assets/rishikeshPreweddingPhotoes/1746084631127.jpg";
import rImg5 from "../assets/rishikeshPreweddingPhotoes/1746084656116.jpg";
import rImg6 from "../assets/rishikeshPreweddingPhotoes/1746084707155.jpg";
import rImg7 from "../assets/rishikeshPreweddingPhotoes/1746085218737.jpg";
import rImg8 from "../assets/rishikeshPreweddingPhotoes/1746085325836.jpg";
import rImg9 from "../assets/rishikeshPreweddingPhotoes/1746086738850.jpg";
import rImg10 from "../assets/rishikeshPreweddingPhotoes/1746243674908.jpg";
import rImg11 from "../assets/rishikeshPreweddingPhotoes/1746243712229.jpg";
import rImg12 from "../assets/rishikeshPreweddingPhotoes/1746243776136.jpg";
import rImg13 from "../assets/rishikeshPreweddingPhotoes/1746254938979.jpg";
import rImg14 from "../assets/rishikeshPreweddingPhotoes/1746603484732.jpg";
import rImg15 from "../assets/rishikeshPreweddingPhotoes/1746603518648.jpg";
import rImg16 from "../assets/rishikeshPreweddingPhotoes/1746872988167.jpg";
import rImg17 from "../assets/rishikeshPreweddingPhotoes/1746873066850.jpg";
import rImg18 from "../assets/rishikeshPreweddingPhotoes/1746873140200.jpg";
import rImg19 from "../assets/rishikeshPreweddingPhotoes/1746892492913.jpg";
import rImg20 from "../assets/rishikeshPreweddingPhotoes/1747413333044.jpg";

const ImageContext = createContext();

const services = [
  {
    id: "wedding-photos",
    title: "Wedding Photography",
    subtitle: "Wedding",
    coverImg: rImg1,
    photos: [rImg11, rImg12, rImg13], 
  },
  {
    id: "delhi-prewedding-photos",
    title: "Delhi Pre-Wedding Photography",
    subtitle: "Delhi Pre-Wedding",
    coverImg: rImg6,    
    photos: [rImg13, rImg14],
  },
  {
    id: "rishikesh-prewedding-photos",
    title: "Rishikesh Pre-Wedding Photography",
    subtitle: "Rishikesh Pre-Wedding",
    coverImg: rImg20,
    photos: [rImg1, rImg2, rImg3, rImg4, rImg5, rImg6, rImg7, rImg8, rImg9, rImg10, rImg11, rImg12, rImg13, rImg14, rImg15, rImg16, rImg17, rImg18, rImg19, rImg20], 
  },
  {
    id: "jaipur-prewedding-photos",
    title: "Jaipur Prewedding Photography",
    subtitle: "Jaipur Pre-wedding",
    coverImg: rImg11,
    photos: [rImg14], 
  },
  {
    id: "ring-ceremony-photos",
    title: "Ring Ceremony Photography",
    subtitle: "Ring Ceremony",
    coverImg: rImg16,
    photos: [rImg14], 
  }
];

export const ImageProvider = ({ children }) => {
  return (
    <ImageContext.Provider value={{ services }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImageContext);
