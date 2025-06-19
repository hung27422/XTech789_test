import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ActionIcon() {
  return (
    <div className="flex items-center gap-4">
      <div className="border border-gray-400 rounded-md p-2 flex items-center gap-4">
        <FontAwesomeIcon className="size-8" icon={faHeart} />
        <span className="text-xl">0</span>
      </div>
      <div className="border border-gray-400 rounded-md p-2 flex items-center gap-4">
        <FontAwesomeIcon className="size-8" icon={faCartShopping} />
        <span className="text-xl">0</span>
      </div>
    </div>
  );
}

export default ActionIcon;
