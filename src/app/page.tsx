"use client";
import Categories from "@/components/layouts/categories";
import AwardsBanner from "@/components/pages/home/AwardsBanner";
import HeroDoubleCard from "@/components/pages/home/HeroDoubleCard";
import MostPopularSection from "@/components/pages/home/MostPopularSection";
import NewsSection from "@/components/pages/home/NewsSection";
import NuSkinWay from "@/components/pages/home/NuSkinWay";
import AwardSlider from "@/components/ui/AwardSlider";
import BannerSlider from "@/components/ui/BannerSlider";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      {/* Header của trang chủ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <div className="col-span-3 w-full hidden lg:block">
          <Categories />
        </div>
        <div className="col-span-1 md:col-span-9 w-full">
          <BannerSlider />
          <HeroDoubleCard />
        </div>
      </div>

      {/* Phần sản phẩm phổ biến */}
      <div>
        <SectionTitle title="Most Popular Products" />
        <MostPopularSection />
      </div>

      {/* Giải thưởng và chứng nhận */}
      <div>
        <SectionTitle title="Award And Recognition" />
        <AwardsBanner />
        <AwardSlider />
      </div>

      {/* Phần Nu Skin Way */}
      <div>
        <SectionTitle title="The Nu Skin Way" />
        <NuSkinWay />
      </div>

      {/* Tin tức NuSkin */}
      <div>
        <SectionTitle title="Nu Skin In The News" />
        <NewsSection />
      </div>
    </div>
  );
}
