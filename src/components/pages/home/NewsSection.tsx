import SliderNuSkinInTheNews from "@/components/ui/SliderNuSkinInTheNews";
import Image from "next/image";

function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:gap-6">
      <div className="col-span-2 w-full h-full relative md:hidden">
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
      <div className="col-span-4 mt-4 px-2 md:m-0 md:p-0">
        <div className="text-right underline">View all {">>"}</div>
        <SliderNuSkinInTheNews />
      </div>
      <div className="col-span-2 w-full h-full relative hidden md:block ">
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
  );
}

export default NewsSection;
