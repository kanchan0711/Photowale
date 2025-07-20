import React from 'react'
import ServicesCard from './OurServicesComponants/ServicesCard'
import img1 from "../assets/service.jpg"

const OurServices = () => {
  const arr = ["","","","","",""]
  return (
    <>
    <div className=' flex flex-col justify-center items-center mb-10 mt-20'>
            <h2 className="  text-3xl md:text-6xl  text-gray-600  whitespace-nowrap">
              We Offer Services
              </h2>
             
              <div className=" text-center block w-[90%] h-[2px] bg-gray-400 mt-1 mb-4" />
            
              </div>

    <div className='flex flex-wrap gap-4 justify-center items-center'>
      {arr.map((idx) => (
               <ServicesCard key={idx} img = {img1} title={"PreWedding Shoot"}/>
      ))}
      </div>
      </>
  )
}

export default OurServices