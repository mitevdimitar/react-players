import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../ContextWrapper';

const ProductDetails = () => {
        return (
                <ProductConsumer>
                    {(value) => {
                        const {img, title, price, info, id} = value.productDetails;
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
                                    <Link to="/shop" className="details-button">Continue shopping</Link>
                                    <Link to="/cart" onClick={()=>value.addToCart(id)} className="details-button">Add to cart</Link>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
        );
}

export default ProductDetails;