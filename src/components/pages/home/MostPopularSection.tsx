import SliderMostPopularProducts from "@/components/ui/SliderMostPopularProducts";
import Image from "next/image";
import { useState } from "react";

function MostPopularSection() {
  const [toggled, setToggled] = useState(1);
  const menuMostPopular = [
    { id: 1, name: "DESCRIPTION" },
    { id: 2, name: "SPECIFICATIONS" },
  ];
  return (
    <div>
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
        {/* Menu */}
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
          {/* Slider */}
          <div>
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
    </div>
  );
}

export default MostPopularSection;
