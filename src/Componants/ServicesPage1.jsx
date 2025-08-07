import React from "react";
import ServicesCard from "./OurServicesComponants/ServicesCard";
import img3 from "../assets/Gal3.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const ServicesPage1 = () => {
  const arr = [img1, img2, img3];
  return (
    <div className="bg-[#cd8878] pt-20 pb-10 text-gray-300">
      <div className="font-edu  leading-none mb-10 text-center text-[6rem]  font-bold">
        <pre className=" font-edu"> PreWedding      </pre>
        <pre className=" font-edu">       /Shoot</pre>
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

export default ServicesPage1;
