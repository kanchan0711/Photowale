// CardSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import SliderCard from "./SliderCard";

export default function Slider() {
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
  ];

  return (
    <div className=" w-full  mx-auto"> {/* Centers & makes width 2/3 */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          0: { slidesPerView: 1 },     // mobile
          640: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 3 },  // desktop
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <SliderCard title={card.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
