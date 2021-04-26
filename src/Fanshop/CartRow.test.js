import React from 'react';
import renderer from 'react-test-renderer';
import CartRow from './CartRow';
import { storeProducts } from "./productsInfo";

test('product', () => {
    const product = storeProducts[0];
    expect(product).toBeDefined();
});

test('Cart row should render corectly', () => {
  const component = renderer.create(
    <CartRow product={storeProducts[0]}></CartRow>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});