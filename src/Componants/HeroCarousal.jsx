import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/wed2.avif';
import img2 from '../assets/wed3.avif';
import img3 from '../assets/wed4.avif';
import HeroCard from './HeroCard';

const HeroCarousal = () => {
    console.log("img1:", img1); // ✅ Should log a string path
  console.log("img2:", img2);
  return (
    <Carousel
      autoPlay            // Starts automatically
      infiniteLoop        // Loops back to the first slide
      interval={3000}     // Time between slides in ms (3s here)
      transitionTime={0} // Slide animation duration in ms
      showThumbs={false}  // Hide thumbnails
      showStatus={false}  // Hide status like "1/3"
      showIndicators={false} // Dots below carousel
      stopOnHover={false} // Keeps autoplay even when hovering
      showArrows={false} // 👈 This hides the next/prev buttons

    >
      <div>
        {/* <img src={img1} alt="Slide 1" />
        <p className="legend">Legend 1</p> */}
        <HeroCard bg={img1}/>
      </div>
      <div>
        {/* <img src={img2} alt="Slide 2" />
        <p className="legend">Legend 2</p> */}
        <HeroCard bg={img2}/>
      </div>
      <div>
        {/* <img src={img1} alt="Slide 3" />
        <p className="legend">Legend 3</p> */}
        <HeroCard bg = {img3}/>
      </div>
    </Carousel>
  );
}

export default HeroCarousal;
