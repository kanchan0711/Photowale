import React from 'react'
import Hero from './HomeComponants/Hero'
import Intro from './Intro'
import ImgComponant from './ImgComponant'
import AboutHome from './HomeComponants/AboutHome'
import Gallery from './Gallery'
import OurServices from './ServicesPage1'
import YouTubeEmbed from './YoutubeVideo'
import ServicesPage1 from './ServicesPage1'
import ServicesPage2 from './ServicesPage2'
import ServicesPage3 from './ServicesPage3'
import StatisticsCard from './StatisticsCard'

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden">
    
    <Hero/>
    <Intro/>
    {/* <Info/> */}
    <AboutHome/>
    <div className="w-full flex justify-center items-center">
    <Gallery/>
    </div>
        {/* <ImgComponant/> */}
        <YouTubeEmbed/>
    {/* <ServicesPage1/> */}
    {/* <ServicesPage2/> */}
    <ServicesPage3/>
    <StatisticsCard/>
        </div>
  )
}

export default Home