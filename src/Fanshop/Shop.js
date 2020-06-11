import React, {Component} from 'react';
import Product from './Product';
import ball from '../img/ball.png';
import { ProductProvider } from './ProductContext';
import './Shop.css'

class Shop extends Component {

    state = {
        products: []
    }

    render() {
        return (
            <ProductProvider>
                <div className="shop-container">
                    <h1>Shop</h1>
                    <div className="products-container">
                        <Product name="Premier league ball" img={ball} />
                        <div className="product">
                            Product 2
                        </div>
                        <div className="product">
                            Product 3
                        </div>
                    </div>
                </div>
            </ProductProvider>
        )
    }
}

export default Shop;