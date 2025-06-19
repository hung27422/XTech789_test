"use client";
import Categories from "@/components/layouts/categories";
import AwardSlider from "@/components/ui/AwardSlider";
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
          <div className="bg-primary text-white text-xl font-semibold px-6 py-3 rounded-md mt-8 cursor-pointer transition-colors hover:!bg-amber-500">
            SHOP NOW
          </div>
        </div>
      </div>
      <div>
        <SectionTitle title="Award And Recognition" />
      </div>
      <div className="bg-[#f3f2ee] p-4 rounded-md">
        <div className="w-[60%] mx-auto relative">
          <Image
            src="https://media.nuskin.com/m/1c720b25d221013b/Small--1-banner-webhomepage.jpg"
            width={1200}
            height={400}
            alt="Award and Recognition"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute flex flex-col items-center justify-center top-0 right-30 z-10 p-1 rounded pt-4">
            <span className="text-gray-500 font-semibold">WORLD&apos;S #1 COMPANY FOR</span>
            <span className="text-xl font-bold">Beauty & Wellness Device Systems</span>
            <span className="text-sm text-gray-600">Source: Euromonitor</span>
          </div>
        </div>
      </div>
      <div>
        <AwardSlider />
      </div>
    </div>
  );
}
