import React from "react";
import ServicesCard from "./OurServicesComponants/ServicesCard";
import img3 from "../assets/Gal3.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const ServicesPage3 = () => {
  const arr = [img3, img2, img1];
  return (
    <div className="bg-[#E3DEDA] pt-20 pb-10 text-[#7D6C4E]">
      <div className="font-edu  leading-none mb-10 text-center text-[6rem]  font-bold">
        <p> Special Events    </p>
      </div>

      <div className=" flex flex-wrap gap-10 justify-evenly items-center  ">
        {arr.map((item, idx) => (
          <ServicesCard
            key={idx}
            img={item}
            title={"PreWedding Shoot"}
            des={"Hey Thire it is Pre Wedding shoot"}
            width={"350px"}
            height={"100%"}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage3;
