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
import useAwards from "../hooks/data/useAwards";

export default function AwardSlider() {
  const { awards } = useAwards();

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2, // Mobile
          },
          640: {
            slidesPerView: 2, // Small tablets
          },
          768: {
            slidesPerView: 3, // Tablets
          },
          1024: {
            slidesPerView: 4, // Desktop
          },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {awards.map((award) => (
          <SwiperSlide key={award.id} className="text-center mx-auto p-4">
            <div className="flex flex-col items-center justify-center gap-2 h-auto w-[180px] md:w-[250px] mx-auto">
              <div>
                <Image
                  src={award.imgUrl}
                  alt="award-image"
                  width={150}
                  height={150}
                  className="w-[120px] md:w-[150px]"
                />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="text-base font-semibold">{award.name}</h3>
                <p className="text-sm text-gray-500">{award.description}</p>
                <span className="text-xs text-gray-400">{award.sub}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
