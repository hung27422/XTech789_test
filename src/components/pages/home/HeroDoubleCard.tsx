import MarketingCards from "@/components/ui/MarketingCards";

function HeroDoubleCard() {
  return (
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
  );
}

export default HeroDoubleCard;
