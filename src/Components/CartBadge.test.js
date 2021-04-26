import React from 'react';
import renderer from 'react-test-renderer';
import CartBadge from './CartBadge';

test('Cart badge shold show product quantity', () => {
  const component = renderer.create(
    <CartBadge count="4"></CartBadge>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});