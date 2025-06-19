import SideBar from "@/components/layouts/sidebar";
import BannerSlider from "@/components/ui/BannerSlider";
import MarketingCards from "@/components/ui/MarketingCards";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <div className="min-h-screen h-96">
      {/* Banner Slider */}
      <div className="grid grid-cols-12 gap-6 px-10 w-full">
        <div className="col-span-3 w-full">
          <SideBar />
        </div>
        <div className="col-span-9 w-full">
          <BannerSlider />
          {/* Marketing Cards */}
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

      <div>
        <SectionTitle title="Most Popular Products" />
      </div>
    </div>
  );
}
