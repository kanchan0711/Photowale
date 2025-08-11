import React from 'react'
import ServicesPage3 from '../ServicesPage3'
import StatisticsCard from './StatisticsCard'
import OurServices from './OurServices'
import HeroCarousal from './HeroCarousal'
import AboutUs from './AboutUs'
import YoutubeVideo from '../YoutubeVideo'
import Intro from './Intro'
import ContactUsForm from '../ContactUsPageComponants/ContactUsForm'

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden">
    
    <HeroCarousal/>
    <AboutUs/>
    <YoutubeVideo/>
    <Intro/>
    {/* <div className="w-full flex justify-center items-center">
    <Gallery/>
    </div> */}
    <ServicesPage3/>
    <OurServices/>
    <StatisticsCard/>
    <ContactUsForm/>
    {/* <BestPreweddingShoots/> */}
        </div>
  )
}

export default Home