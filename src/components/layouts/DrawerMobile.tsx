"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { menuHeaders } from "./header/MainHeader";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DrawerMobile() {
  const pathName = usePathname();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex items-center justify-between gap-2 bg-primary text-white text-lg font-semibold py-4 shadow-md">
        <div className="flex items-center gap-2 px-4 cursor-pointer">
          <span className="hover:underline">SIGN IN</span> /
          <span className="hover:underline">SIGN UP</span>
        </div>
        <span className="px-4 border-l border-gray-400 cursor-pointer hover:text-red-500">
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>

      <div className="flex flex-col gap-2 text-xl font-semibold px-4 py-2">
        {menuHeaders.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            className={`text-base px-4 py-1 hover:text-purple-500 ${
              pathName === menu.path ? "text-purple-500 font-bold" : "text-black"
            }`}
          >
            {menu.name}
            {menu.icon && <span className="ml-1 text-base size-1">{menu.icon}</span>}
          </Link>
        ))}
      </div>

      <div className="border-b border-gray-400 w-full"></div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon className="size-10 text-3xl" icon={faBars} color="purple" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
