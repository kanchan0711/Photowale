// CardSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // 👈 import pagination styles
import { Autoplay, Pagination } from "swiper/modules"; // 👈 import Pagination
import SliderCard from "./SliderCard";
import yt1 from "../../assets/yTImg/yt1.png"
import yt2 from "../../assets/yTImg/yt2.png"
import yt3 from "../../assets/yTImg/yt3.png"
import yt4 from "../../assets/yTImg/yt4.png"
import yt5 from "../../assets/yTImg/yt5.png"


export default function Slider() {
  const cards = [
    { id: 1, img: yt1, title: "Poonam & Saumya - Best wedding teaser 2024 ", link: "https://www.youtube.com/watch?v=SEdHgvZF3_A"},
    { id: 2, img: yt2, title: "Deepam & Lakshya - Jaipur Prewedding shoot 2025", link: "https://www.youtube.com/watch?v=fydPbYsG3Z0&list=RDfydPbYsG3Z0&start_radio=1" },
    { id: 3, img: yt3, title: "Delhi pre-wedding shoot - Best pre-wedding teaser 2025", link: "https://www.youtube.com/watch?v=_Or4ZbzdoL0" },
    { id: 4, img: yt4, title: "Vivek & kamya - Uttrakhand Triyuginarayan temple wedding", link: "https://www.youtube.com/watch?v=7SPIRh10DUY" },
    { id: 5, img: yt5, title: "shivangi & Anant - best ring ceremony video 2023", link:"https://www.youtube.com/watch?v=ORG6T3AOcBI" },
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]} // 👈 add Pagination
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // 👈 enable dots
        speed={1000}
        breakpoints={{
          0: { slidesPerView: 1 },     // mobile
          640: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 3 },  // desktop
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <SliderCard img={card.img} title={card.title} link={card.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
