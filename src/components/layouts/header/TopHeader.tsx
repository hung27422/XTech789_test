import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopHeader() {
  return (
    <div>
      <div className="flex items-center justify-between text-xl bg-primary text-white px-10 w-full">
        <div className="cursor-pointer">
          <span>FAQs</span>
          <span className="border-r border-l border-gray-400 px-2 mx-2 ">Help</span>
          <span>Support</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <FontAwesomeIcon className="size-7" icon={faFacebook} />
          <FontAwesomeIcon className="size-7" icon={faTwitter} />
          <FontAwesomeIcon className="size-7" icon={faLinkedin} />
          <FontAwesomeIcon className="size-7" icon={faInstagram} />
          <FontAwesomeIcon className="size-7" icon={faYoutube} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default TopHeader;
