import Image from "next/image";

interface MarketingCardsProps {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
}
function MarketingCards({ imageUrl, subtitle, title }: MarketingCardsProps) {
  return (
    <div className="relative w-full h-52 overflow-hidden">
      <Image
        src={imageUrl || ""}
        alt="Marketing-Card"
        className="w-full h-full object-cover"
        fill
        priority
      />

      {/* <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-black/70 z-10"></div> */}

      <div className="absolute z-20 inset-0 flex flex-col items-start justify-center text-black text-2xl pl-10">
        <span className="font-semibold">{title}</span>
        <span className="font-bold my-4">{subtitle}</span>
        <span className="border-4 border-amber-400 px-4 py-2 rounded-md hover:bg-amber-400 hover:text-white cursor-pointer hover:px-4 hover:py-2 transition-all duration-300 font-semibold">
          Shop Now
        </span>
      </div>
    </div>
  );
}

export default MarketingCards;
