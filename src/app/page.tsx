"use client";
import Categories from "@/components/layouts/categories";
import AwardSlider from "@/components/ui/AwardSlider";
import BannerSlider from "@/components/ui/BannerSlider";
import MarketingCards from "@/components/ui/MarketingCards";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderMostPopularProducts from "@/components/ui/SliderMostPopularProducts";
import SliderNuSkinInTheNews from "@/components/ui/SliderNuSkinInTheNews";
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
                className={`text-2xl  px-4 py-2 border cursor-pointer hover:bg-gray-200 mx-1 ${
                  toggled === item.id
                    ? "border-t-4 border-t-amber-400"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="mt-10 text-right">
            <span className="underline cursor-pointer font-semibold">View All &gt;&gt;</span>
          </div>
          <div className="">
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
      {/* Giải thưởng và chứng nhận */}
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
      {/* Phần Nu Skin Way */}
      <div>
        <SectionTitle title="The Nu Skin Way" />
      </div>
      <div className="grid grid-cols-2 items-center gap-6 px-10 w-full p-4 border border-gray-400 rounded-sm">
        <div className="col-span-1 text-3xl">
          <span className="text-3xl">
            Nu Skin,<br></br> Improving Lives Everyday
          </span>
        </div>
        <div className="col-span-1 flex justify-around ">
          <div className="max-w-52">
            <span className="text-xl font-bold">25+</span>
            <p>Years of Giving</p>
          </div>
          <div className="max-w-52">
            <a href="#" className="text-xl font-bold">
              20+
            </a>
            <p className="underline">Current Social Projects</p>
          </div>
          <div className="max-w-52">
            <a href="#" className="text-xl font-bold">
              850M+
            </a>
            <p className="underline">Meals Donated through Nourish the Children</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-4 w-full mt-4">
        <div className="col-span-1">
          <Image
            src={"https://media.nuskin.com/m/7bdb7e1a3fef7a1/webimage-NSWay_Force-for-Good.png"}
            priority
            width={400}
            height={400}
            alt="Nu Skin Way Force for Good"
            className="w-full h-full"
          />
        </div>
        <div className="col-span-1 bg-[##f7f7f7] shadow-sm w-full h-full p-8">
          <h4 className="text-3xl font-semibold">Being a Force for Good</h4>
          <p className="text-gray-800 mt-2">
            Some call it corporate social responsibility. We call it our purpose. Together we’re
            engaged in initiatives worldwide—nourishing thousands of hungry children, funding
            pediatric health and wellness services, or striving for a more sustainable future. And
            sometimes, we’re simply taking meaningful steps to improve our local communities.
            Whatever we do, we believe changing the world begins with a single action.
          </p>
          <a href="#" className="block mt-4 hover:text-primary hover:font-bold">
            Explore our projects
          </a>
        </div>
        <div className="col-span-1 bg-[##f7f7f7] shadow-sm w-full h-full p-8">
          <h4 className="text-3xl font-semibold">Nature + Science</h4>
          <p className="text-gray-800 mt-2">
            Capturing the best in nature to bring you the best results is our personal mission. We
            combine powerful ingredients with innovative science and technology. The result?
            World-class products that deliver real benefits. And even though we’ve spent more than
            30 years researching aging at the genetic level, Mother Nature continually inspires us
            to push the boundaries of inquiry and innovation. We bottle what’s best and bring it
            right to your door.
          </p>
          <a href="#" className="block mt-4 hover:text-primary hover:font-bold">
            Discover more
          </a>
        </div>
        <div className="col-span-1">
          <Image
            src={"https://media.nuskin.com/m/6a3ffb6d6d3dd68f/webimage-NSWay_Nature-Science.png"}
            priority
            width={400}
            height={400}
            alt="Nu Skin Way Force for Good"
            className="w-full h-full"
          />
        </div>
      </div>
      <div>
        <SectionTitle title="Nu Skin In The News" />
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4">
          <div className="text-right underline">View all {">>"}</div>
          <SliderNuSkinInTheNews />
        </div>
        <div className="col-span-2 w-full h-full relative">
          <Image
            src={"https://media.nuskin.com/m/6fba631dae178fec/webimage-ITN_HERO.png"}
            alt="image"
            width={400}
            height={200}
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl text-white font-bold">News</p>
            <span className="text-sm underline text-white">Nu Skin The News</span>
          </div>
        </div>
      </div>
    </div>
  );
}
