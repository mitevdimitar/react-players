import React from 'react';
import { ProductConsumer } from '../ContextWrapper';

const ProductDetails = () => {
        return (
                <ProductConsumer>
                    {(value) => {
                        const {img, title, price, info} = value.productDetails;
                        return (
                            <div className="product-details-container">
                                <div>
                                    <img src={require(`../img/${img}.png`)} alt="product"/>
                                </div>
                                <div className="product-text">
                                    <h5>{title}</h5>
                                    <div>
                                        {price}<span>USD</span>
                                    </div>
                                    <p>
                                        {info}
                                    </p>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
        );
}

export default ProductDetails;