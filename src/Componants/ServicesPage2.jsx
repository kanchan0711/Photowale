import React from 'react'
import img3 from "../assets/Gal3.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import ServicesCard from './OurServicesComponants/ServicesCard';

const ServicesPage2 = () => {
  return (
    <div className=' size-full bg-[#E3DEDA] py-20 px-10'>
    <div className=' md:h-[750px]  flex flex-wrap justify-between  text-[#cd8878]  '>
        <div className='w-full md:w-[36%] '>
            <div className='h-[100px] '>
            <h1 className='font-edu mb-10 leading-none  text-center text-[6rem]  font-bold'>Events</h1>
            </div>
        <ServicesCard
            img={img2}
            title={"PreWedding Shoot"}
            des={"Hey Thire it is Pre Wedding shoot"}
            width={""}
            height={"580px"}
          />
        </div>
        <div className='w-full md:w-[22%]'>
        <ServicesCard
            img={img3}
            title={"PreWedding Shoot"}
            des={"Hey Thire it is Pre Wedding shoot"}
            width={""}
            height={""}
          />
        </div>
        <div className='w-full md:w-[36%]'>
        <ServicesCard
            img={img1}
            title={"PreWedding Shoot"}
            des={"Hey Thire it is Pre Wedding shoot"}
            width={""}
            height={"680px"}
          />
        </div>
    </div>
    </div>
  )
}

export default ServicesPage2