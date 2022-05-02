import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

  test('It should show <ProductTitle /> properly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product"/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('It should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});
