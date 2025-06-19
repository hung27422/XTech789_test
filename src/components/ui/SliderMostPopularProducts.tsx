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
import useProduct from "../hooks/data/useProducts";

export default function SliderMostPopularProducts() {
  const { products } = useProduct();
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="text-center mx-auto p-4">
            <div className="flex flex-col items-center justify-center gap-2 h-auto w-[250px] mx-auto shadow-md">
              <div className="bg-white relative overflow-hidden h-[300px] w-[250px]">
                <Image src={product.imageUrl} fill alt="product-image" />
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-base text-gray-400">{product.description}</span>
                <span className="text-base font-semibold w-[200px] truncate">{product.name}</span>
                <div className="flex items-center gap-2 text-lg ">
                  <span className="text-amber-500 font-semibold text-lg">${product.price}</span>
                  <span className="line-through text-gray-500 text-base">${product.priceOld}</span>
                </div>
              </div>
              <div className="w-full hover:opacity-90 cursor-pointer transition-opacity">
                <button className="bg-primary text-white px-4 py-2 cursor-pointer w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
