"use client";
import Categories from "@/components/layouts/categories";
import BannerSlider from "@/components/ui/BannerSlider";
import MarketingCards from "@/components/ui/MarketingCards";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderMostPopularProducts from "@/components/ui/SliderMostPopularProducts";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [toggled, setToggled] = useState(1);
  const menuMostPopular = [
    { id: 1, name: "DESCRIPTION" },
    { id: 2, name: "SPECIFICATIONS" },
  ];
  return (
    <div className="min-h-screen h-full">
      {/* Header của trang chủ */}
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-3 w-full">
          <Categories />
        </div>
        <div className="col-span-9 w-full">
          <BannerSlider />

          <div className="grid grid-cols-2 items-center gap-4 mt-4">
            <div className="col-span-1">
              <MarketingCards
                imageUrl="https://watermark.lovepik.com/photo/20211202/large/lovepik-fashion-model-holding-camera-picture_501399550.jpg"
                title="PREFER CUSTOMER 2025"
                subtitle="WINTER COLLECTION"
              />
            </div>
            <div className="col-span-1">
              <MarketingCards
                imageUrl="https://watermark.lovepik.com/photo/20211209/large/lovepik-youthful-fashion-cute-women-picture_501720281.jpg"
                title="PREFER CUSTOMER 2025"
                subtitle="WINTER COLLECTION"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Tiêu đề cho phần sản phẩm phổ biến */}
      <div>
        <SectionTitle title="Most Popular Products" />
      </div>
      {/* Phần sản phẩm phổ biến */}
      <div className="grid grid-cols-12 items-center gap-6 px-10 w-full bg-[#f3f7f8] p-4">
        <div className="col-span-3 relative">
          <Image
            src={"https://media.nuskin.com/m/44c3a91f9eeb1c29/webimage-MPP_Banner.png?format=webp"}
            width={400}
            height={400}
            priority
            alt="Spiral Arrow"
            className="h-[600px] w-full object-cover rounded-md"
          />
          <div className="flex flex-col absolute inset-0 pl-4 mt-4">
            <span className="text-3xl w-[120px]">Find out what everyone&apos;s talking about</span>
            <span className="mt-8 text-xl">Browse our best</span>
          </div>
        </div>
        <div className="flex flex-col col-span-9">
          <div>
            {menuMostPopular.map((item) => (
              <span
                onClick={() => setToggled(item.id)}
                key={item.id}
                className={`text-2xl font-semibold px-4 py-2 border cursor-pointer hover:bg-gray-200 mx-1 ${
                  toggled === item.id ? "border-t-4 border-t-amber-400" : "border-gray-300"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <SliderMostPopularProducts />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-2 bg-[#f3f2ee] gap-6 p-10">
        <div className="col-span-1 relative">
          <Image
            src="https://images.contentstack.io/v3/assets/blt7d4c4f4a1bf5a819/blt61389e3ec5974185/66a88d62c10344acda06735e/ageLOC-LumiSpa-iO.jpg?width=645"
            width={400}
            height={400}
            alt="Spiral Arrow"
            className="h-[600px] w-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col col-span-1 items-start justify-center p-8">
          <span className="text-red-600">ageLOC® LumiSpa® iO</span>
          <span className="text-3xl font-semibold my-2">ageLOC® LumiSpa® iO</span>
          <p className="text-lg mt-4">Elevate your skincare routine</p>
          <div className="bg-primary text-xl font-semibold px-4 py-2 text-white mt-8 cursor-pointer hover:opacity-90 transition-opacity">
            SHOP NOW
          </div>
        </div>
      </div>
    </div>
  );
}
