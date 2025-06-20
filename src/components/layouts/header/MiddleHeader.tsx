"use client";
import ActionIcon from "../../ui/ActionIcon";
import SearchBar from "../../ui/SearchBar";
import DrawerMobile from "../DrawerMobile";

function MiddleHeader() {
  return (
    <div className="flex items-center justify-between gap-4 lg:h-24 bg-white shadow-sm p-4">
      <div className="lg:hidden">
        <DrawerMobile />
      </div>
      {/* Thanh search */}
      <div className="w-full md:w-2/3">
        <SearchBar />
      </div>
      {/* Icon giỏ hàng và yêu thích */}
      <div className="w-fit lg:w-auto">
        {/* Desktop icon (hiện từ lg trở lên) */}
        <div className="hidden lg:block">
          <ActionIcon />
        </div>
        {/* Mobile & Tablet icon (ẩn ở lg trở lên) */}
        <div className="block lg:hidden">
          <ActionIcon onlyShowCartIcon={true} />
        </div>
      </div>
    </div>
  );
}

export default MiddleHeader;
