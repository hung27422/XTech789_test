"use client";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { id: "1", name: "Home", path: "/", icon: "" },
  {
    id: "2",
    name: "Shop",
    path: "/shopdetail",
    icon: "",
  },
  {
    id: "3",
    name: "Page",
    path: "/page",
    icon: <FontAwesomeIcon icon={faCaretDown} />,
  },
  {
    id: "4",
    name: "Blog",
    path: "/blog",
    icon: "",
  },
];
function MainHeader() {
  const pathName = usePathname();
  console.log({ pathName });

  return (
    <div className="flex item-cen justify-between h-20">
      <div className="flex items-center gap-2 text-xl font-semibold">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            className={`text-lg font-semibold px-4 py-2 hover:text-[#c8b4ad] ${
              pathName === menu.path ? "text-[#c8b4ad]" : "text-black"
            }`}
          >
            {menu.name}
            {menu.icon && <span className="ml-1 text-base size-1">{menu.icon}</span>}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6 text-lg font-semibold">
        <span>Login</span>
        <span>Register</span>
      </div>
    </div>
  );
}

export default MainHeader;
