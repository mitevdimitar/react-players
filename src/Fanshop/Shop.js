import React, {Component} from 'react';
import ball from '../img/ball.png';
import './Shop.css'

class Shop extends Component {

    render() {
        return (
            <div className="shop-container">
                <h1>Shop</h1>
                <div className="products-container">
                    <div className="product">
                        <h3>
                            Product 1
                        </h3>
                        <div>
                            <img src={ball} alt="ball" />
                        </div>
                    </div>
                    <div className="product">
                        Product 2
                    </div>
                    <div className="product">
                        Product 3
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;