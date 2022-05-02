import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  // NOTE:
  // About the generic's input:
  /*
    Interpretation: Any number of keys that have assigned
    the following types/interface
  */

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>Counter: {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
