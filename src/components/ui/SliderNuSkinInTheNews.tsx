import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import useNews from "../hooks/data/useNews";

export default function SliderNuSkinInTheNews() {
  const { news } = useNews();

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          640: {
            slidesPerView: 2, // Small tablets
          },
          768: {
            slidesPerView: 2, // Tablets
          },
          1024: {
            slidesPerView: 4, // Desktop
          },
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id} className="text-center mx-auto p-4 mb-6">
            <div className="flex flex-col items-center justify-center gap-2 h-auto w-[222] mx-auto shadow-md">
              <div className="bg-white relative overflow-hidden h-[222] w-[222]">
                <Image src={item.imageUrl} alt="Nu Skin in the News" width={222} height={222} />
              </div>
              <div className="p-4">
                <p className="line-clamp-3 text-sm leading-snug overflow-hidden text-ellipsis h-16">
                  {item.title}
                </p>
                <span className="text-xs text-gray-500">{item.topic}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
