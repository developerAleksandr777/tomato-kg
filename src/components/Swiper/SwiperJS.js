import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import video from "../../assets/images/Томат kg.mp4";

const SwiperJS = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
    >
      <SwiperSlide>
        <iframe
          width="100%"
          height="100"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperJS;
