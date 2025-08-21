import React from 'react'
import StatisticsCard from './StatisticsCard'
import OurServices from './OurServices'
import HeroCarousal from './HeroCarousal'
import AboutUs from './AboutUs'
import YoutubeVideo from '../YoutubeVideo'
import Intro from './Intro'
import ContactUsForm from '../ContactUsPageComponants/ContactUsForm'
import BestPreweddingShoots from '../BestPreweddingShoots'
import GalleryImages from '../Gallery/GalleryImages'
import { usePortfolio } from "../../context/PortfolioContext";

const Home = () => {

  const { getPortfolioById } = usePortfolio();
  const homeGalleryImg = getPortfolioById("home-img");
  console.log(homeGalleryImg?.photos)

  return (
    <div className="w-full h-full overflow-hidden">
    
    <HeroCarousal/>
    <AboutUs/>
    <YoutubeVideo/>
    <OurServices/>
    <div className='mt-20'>
    <h1 className="text-6xl text-center text-[#EC9A96] font-edu mb-10">
        Our Gallery
      </h1>
    <GalleryImages images = {homeGalleryImg?.photos} title={""}/>
    </div>
    <BestPreweddingShoots/> 
    <ContactUsForm/>
    <StatisticsCard/>
    {/* */}
        </div>
  )
}

export default Home