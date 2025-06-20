"use client";
import useSnackbar from "@/components/hooks/components/useSnackbar";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SnackbarProvider } from "notistack";

export const menuHeaders = [
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
  const { showSnackbar } = useSnackbar();
  const handleCheckPage = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (["/shopdetail", "/page", "/blog"].includes(path)) {
      e.preventDefault();
      return showSnackbar("Hiện trang này chưa được phát triển vui lòng truy cập sau!", "warning");
    }
  };

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <div className="lg:flex item-cen justify-between h-20 hidden">
        <div className="flex items-center gap-2 text-xl font-semibold">
          {menuHeaders.map((menu) => (
            <Link
              key={menu.id}
              onClick={(e) => handleCheckPage(e, menu.path)}
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
        <div className="flex items-center gap-6 text-lg font-semibold cursor-pointer">
          <span className="hover:underline">Login</span>
          <span className="hover:underline">Register</span>
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default MainHeader;
