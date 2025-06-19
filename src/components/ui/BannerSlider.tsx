"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const imagesBanner = [
  {
    id: 1,
    src: "https://360.com.vn/wp-content/uploads/2025/03/BANNER-WEB-1350X490.jpg",
  },
  {
    id: 2,
    src: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-pink-autumn-and-winter-new-fashion-new-product-listing-clothing-banner-image_906490.jpg",
  },
  {
    id: "3",
    src: "https://file.hstatic.net/1000331599/file/w-banner_2000x800_5d42dff4956248538a887eba1fc51904.jpg",
  },
];
export default function BannerSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {imagesBanner.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              alt="img"
              className="h-[530px] w-full object-cover"
              width={1920}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
