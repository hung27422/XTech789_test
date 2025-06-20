import { useAppContext } from "@/context/AppContextProvider";
import { removeFromCart } from "@/controller/cartController";
import { Cart } from "@/models/Cart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface CartItemProps {
  dataCart: Cart;
}
const CartItem: React.FC<CartItemProps> = ({ dataCart }: CartItemProps) => {
  const { setDataCart } = useAppContext();
  const handleRemoveCart = () => {
    setDataCart((prev) => removeFromCart(prev, dataCart.nameProduct));
  };
  return (
    <div className="flex items-center justify-between border-gray-400 border p-1 rounded-md px-2 my-2">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src={dataCart.imageProduct}
            width={100}
            height={100}
            className="w-18 h-16 rounded-md"
            alt="img-cart"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="w-[200px] truncate">{dataCart.nameProduct}</span>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">${dataCart.priceProduct}</span>
            <span className="text-gray-400 line-through">${dataCart.priceOldProduct}</span>
          </div>
          <span>SL: {dataCart.quantity}</span>
        </div>
        <div></div>
      </div>
      <div onClick={handleRemoveCart} className="mr-4 hover:text-red-500">
        <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-black hover:text-red-500 " />
      </div>
    </div>
  );
};

export default CartItem;
