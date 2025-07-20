import React from 'react'
import Hero from './HomeComponants/Hero'
import Intro from './Intro'
import ImgComponant from './ImgComponant'
import AboutHome from './HomeComponants/AboutHome'
import Gallery from './Gallery'
import OurServices from './OurServices'
import YouTubeEmbed from './YoutubeVideo'

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden">
    
    <Hero/>
    <Intro/>
    {/* <Info/> */}
    <AboutHome/>
    {/* <div className="w-full flex justify-center items-center">
    <Gallery/>
    </div> */}
        {/* <ImgComponant/> */}
        <YouTubeEmbed/>
    <OurServices/>
    </div>
  )
}

export default Home