import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";

interface ActionIconProps {
  onlyShowCartIcon?: boolean;
}
function ActionIcon({ onlyShowCartIcon }: ActionIconProps) {
  return (
    <div className="flex items-center justify-end lg:justify-center gap-4">
      {onlyShowCartIcon ? (
        <Cart />
      ) : (
        <>
          <div className="border border-gray-400 rounded-md p-2 flex items-center gap-4">
            <FontAwesomeIcon className="size-8" icon={faHeart} />
            <span className="text-xl">0</span>
          </div>
          <Cart />
        </>
      )}
    </div>
  );
}

export default ActionIcon;
