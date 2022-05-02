# fl-product-card

This is a test package to deploy in NPM.

### flleonx

## Example:

``` typescript
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fl-product-card'
```

``` typescript
<ProductCard
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
```
