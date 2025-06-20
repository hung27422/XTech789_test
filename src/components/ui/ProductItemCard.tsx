import { useAppContext } from "@/context/AppContextProvider";
import { Product } from "@/models/Product";
import Image from "next/image";
import useSnackbar from "../hooks/components/useSnackbar";
import { addToCart } from "@/controller/cartController";

interface ProductItemCardProps {
  product: Product;
}
function ProductItemCard({ product }: ProductItemCardProps) {
  const { setDataCart } = useAppContext();
  const { showSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    showSnackbar("Thêm giỏ hàng thành công", "success");
    setDataCart((prev) => addToCart(prev, product));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-auto w-[200px] lg:w-[250px] mx-auto shadow-md">
      <div className="bg-white relative overflow-hidden h-[200px] lg:h-[300px] w-[200px] lg:w-[250px]">
        <Image src={product.imageUrl} fill alt="product-image" />
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-base text-gray-400">{product.description}</span>
        <span className="text-base font-semibold w-[140px] lg:w-[200px] truncate">
          {product.name}
        </span>
        <div className="flex items-center gap-2 text-lg ">
          <span className="text-amber-500 font-semibold text-lg">${product.price}</span>
          <span className="line-through text-gray-500 text-base">${product.priceOld}</span>
        </div>
      </div>
      <div className="w-full hover:opacity-90 cursor-pointer transition-opacity">
        <button
          onClick={handleAddToCart}
          className="bg-primary text-white px-4 py-2 cursor-pointer w-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItemCard;
