import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Delete the product
      delete oldShoppingCart[product.id];
      return { ...oldShoppingCart };

      // if (count === 0) {
      //   delete oldShoppingCart[product.id];
      //   return { ...oldShoppingCart };
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: {
      //     ...product,
      //     count
      //   }
      // }
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
