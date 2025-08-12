




import React from "react";
import { ArrowUp } from "lucide-react";

const ServicesCard = ({ img, title, des, width, height }) => {
  return (
    <div>
      <img
        src={img}
        alt="service"
        style={{ width: width || '100%', height: height || 'auto' }}
        className="object-cover "
      />

      <div className="flex justify-between my-6 h-[70px] ">
        <div className="text-lg w-[70%]  leading-none	">
          <p className="italic font-semibold">{title}</p>
          <p>{des}</p>
        </div>
        <div>
          <ArrowUp size={20} />
        </div>
      </div>
    </div>
  
  );
};

export default React.memo(ServicesCard);
