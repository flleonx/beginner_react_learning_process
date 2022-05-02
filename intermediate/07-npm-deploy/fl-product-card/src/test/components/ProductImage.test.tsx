import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../components';
import { product2 } from '../data/products';

describe('ProductImage', () => {

  test('It should show <ProductImage /> properly with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img="test-image.png"/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('It should show the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});
