import React from "react";
import PreWeddingVideo from "./PreWeddingVideo";
import img from "../../assets/serviceCard2.webp";
import YtRedirectionBanner from "./YtRedirectionBanner";

const PreWedding = () => {
  return (
    <div className="">
      {/* <YoutubeVideo/> */}
      <PreWeddingVideo />

      <div className="my-20 ">
        <h1 className="text-5xl md:text-6xl  text-center text-[#EC9A96] font-edu mb-5 md:mb-20">
          Best Prewedding and Wedding films
        </h1>

       <div className="md:flex justify-center gap-5 w-full ">
           <img
                  src={img}
                  alt="img"
                  className="hidden md:block w-[50%] h-[700px] mt-10 md:mt-0 rounded object-cover"
            />
            <div className=" text-gray-500 text-center">
              
              <h1 className="text-3xl font-semibold   ">We Provide 3 Location for Prewedding PhotoShoots</h1>
              
              <p className=" mx-auto w-[80%] md:w-full h-[1px] bg-gray-400  mb-10"></p>
              <div className="my-3">
                <h2 className="text-xl font-bold">Rishikesh</h2>
                <p className="font-semibold">Best Location for PreWedding, we shoot over 10+ preWedding here </p>        
              </div>

              <div className="my-3">
                <h2 className="text-xl font-bold">Delhi</h2>
                <p className="font-semibold">Best Location for PreWedding, we shoot over 10+ preWedding here </p>
              </div>

              <div className="my-3">
                <h2 className="text-xl font-bold">Jaipur</h2>
                <p className="font-semibold">Best Location for PreWedding, we shoot over 10+ preWedding here </p>         
              </div>


              <h1 className="text-3xl font-semibold mt-10  ">We Provide best Wedding shoots</h1>
              
              <p className=" mx-auto w-[60%] h-[1px] bg-gray-400  mb-10"></p>

              <p className="font-semibold">Best Location for PreWedding, we shoot over 10+ preWedding here </p>         


            </div>
         </div> 
  
      </div>

      <YtRedirectionBanner/>

      <div className="m-5 md:mx-20 md:mt-20">
        <p className="italic font-sans text-2xl font-semibold text-gray-500">At CandidShutters, we conceptualise and design our wedding films after a meticulous study of our lead characters-“The Bride & The Groom”.Stunning cinematography, immersive sound designing, crisp editing and a professional direction give you an opportunity to experience your most precious moments again and again for years to come.</p>
      </div>
    </div>
  );
};

export default PreWedding;
