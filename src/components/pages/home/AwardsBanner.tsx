import Image from "next/image";

function AwardsBanner() {
  return (
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
  );
}

export default AwardsBanner;
