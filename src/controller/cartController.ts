import { Cart } from "@/types/Cart";
import { Product } from "@/types/Product";

// Thêm giỏ hàng
export function addToCart(prevCart: Cart[], product: Product): Cart[] {
  const existing = prevCart.find((item) => item.nameProduct === product.name);

  if (existing) {
    return prevCart.map((item) =>
      item.nameProduct === product.name ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [
      ...prevCart,
      {
        nameProduct: product.name,
        quantity: 1,
        imageProduct: product.imageUrl,
        priceProduct: product.price,
        priceOldProduct: product.priceOld,
      },
    ];
  }
}
// Xóa giỏ hàng
export const removeFromCart = (cart: Cart[], nameProduct: string) => {
  return cart.filter((item: Cart) => item.nameProduct !== nameProduct);
};
