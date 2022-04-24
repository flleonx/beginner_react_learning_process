import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../data/products";

const product = products[0];

import "../styles/custom-styles.css";

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
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
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
