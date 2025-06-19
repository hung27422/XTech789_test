import ActionIcon from "../../ui/ActionIcon";
import SearchBar from "../../ui/SearchBar";

function MiddleHeader() {
  return (
    <div className="flex items-center justify-between h-24 bg-white shadow-sm p-4">
      {/* Thanh search */}
      <div>
        <SearchBar />
      </div>
      {/* Icon giỏ hàng và yêu thích */}
      <div>
        <ActionIcon />
      </div>
    </div>
  );
}

export default MiddleHeader;
