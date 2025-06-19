import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import useProduct from "../hooks/data/useProducts";
import ProductItemCard from "./ProductItemCard";

export default function SliderMostPopularProducts() {
  const { products } = useProduct();
  return (
    <>
      <Swiper
        slidesPerView={4}
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
            <ProductItemCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
