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
    <div className="bg-primary text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base md:px-10 gap-2">
        {/* FAQs / Help / Support */}
        <div className="flex md:flex-row items-center gap-2 md:gap-4 cursor-pointer border-b border-gray-400 md:border-0 pb-2 md:pb-0">
          <span className="hover:underline">FAQs</span>
          <span className="md:border-t-0 md:border-l md:border-r px-2 md:px-3 hover:underline">
            Help
          </span>
          <span className="hover:underline">Support</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
          <FontAwesomeIcon className="size-5 md:size-6" icon={faFacebook} />
          <FontAwesomeIcon className="size-5 md:size-6" icon={faTwitter} />
          <FontAwesomeIcon className="size-5 md:size-6" icon={faLinkedin} />
          <FontAwesomeIcon className="size-5 md:size-6" icon={faInstagram} />
          <FontAwesomeIcon className="size-5 md:size-6" icon={faYoutube} />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
