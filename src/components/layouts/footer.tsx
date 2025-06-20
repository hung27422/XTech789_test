import {
  faCaretRight,
  faCopyright,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const atms = [
  {
    id: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png",
  },
  {
    id: 2,
    imageUrl: "https://ibrand.vn/wp-content/uploads/2024/07/Mastercard-Logo-1.png",
  },
  {
    id: 3,
    imageUrl:
      "https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/paypal-758x483.png",
  },
  {
    id: 4,
    imageUrl:
      "https://dltm-cdn.vnptit3.vn/resources/portal//Images/VLG/superadminportal.vlg/Ti%E1%BB%87n%20%C3%ADch/ATM/636529926612553293_1507081911266atm-vietcom.png",
  },
  {
    id: 5,
    imageUrl: "https://pay2s.vn/blog/wp-content/uploads/2024/10/thumbnail-logo-BIDV.jpg",
  },
  {
    id: 6,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Logo_MB_new.png/1200px-Logo_MB_new.png",
  },
];

function Footer() {
  return (
    <div className="bg-primary">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 border-b-2 border-gray-200 px-10 py-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ut voluptatibus rerum
          </p>
          <ul className="mt-4">
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span>123 Street, New York, USA</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>info@example.com</span>
            </li>{" "}
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+ 012 345 6789</span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:mx-auto">
          <p>Quick Links</p>
          <ul>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Home</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Our Shop</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Shop Detail</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Shopping Cart</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Checkout</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:mx-auto">
          <p>Quick Links</p>
          <ul>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Home</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Our Shop</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Shop Detail</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Shopping Cart</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Checkout</span>
            </li>
            <li className="flex gap-3 my-2">
              <span>
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-10 py-5 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <div className="flex items-center">
            <span className="mr-4">
              <FontAwesomeIcon className="text-lg" icon={faCopyright} />
            </span>
            <div>
              <p>
                <span className="font-bold">Your Site Name</span> . All rights Reserved. Designed by
                <span className="font-bold"> HTML Codex</span>
              </p>
            </div>
          </div>
          <div className="text-center my-2">Distributed By ThemeWagon</div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {atms.map((item) => (
            <Image
              key={item.id}
              src={item.imageUrl}
              alt="img-atm"
              width={60}
              height={40}
              className="col-span-1 bg-white px-4 py-2 h-8  md:h-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
