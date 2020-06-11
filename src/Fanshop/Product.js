import React from 'react';
import { ProductConsumer } from './ProductContext';

const Product = ({name, img}) => {
    return (
        <div>
            <div className="product">
                <ProductConsumer>
                    {(value) => {
                        return <h1>{value}</h1>
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