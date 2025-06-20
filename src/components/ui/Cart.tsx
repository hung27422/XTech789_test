import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { useAppContext } from "@/context/AppContextProvider";
const styles = {
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};
export default function Cart() {
  const { dataCart } = useAppContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const quantity = dataCart.reduce((a, b) => a + b.quantity, 0);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div
          onClick={handleClick}
          className="border border-gray-400 rounded-md p-1 md:p-2 flex items-center gap-4 cursor-pointer"
        >
          <FontAwesomeIcon className="size-8" icon={faCartShopping} />
          <span className="text-xl">{quantity}</span>
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              ...styles,
              width: 400,
              p: 2,
              maxWidth: "90vw",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {dataCart.length === 0 && (
          <span className="flex items-center justify-center text-2xl text-red-500">
            Giỏ hàng trống!
          </span>
        )}
        {dataCart.map((item, index) => {
          return (
            <div key={index}>
              <CartItem dataCart={item} />
            </div>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}
