import React from 'react';
import { ProductConsumer } from '../ContextWrapper';

const Product = ({name, img}) => {
    return (
        <div>
            <div className="product">
                <ProductConsumer>
                    {(value) => {
                        console.log(value.products)
                    }}
                </ProductConsumer>
                <h3>{name}</h3>
                <div>
                    <img src={img} alt="ball" />
                </div>
            </div>
        </div>
    );
};

export default Product;