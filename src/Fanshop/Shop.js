import React, {Component} from 'react';
import Product from './Product';
import './Shop.css'
import { ProductConsumer } from '../ContextWrapper';

class Shop extends Component {

    render() {
        return (
            <div className="shop-container">
                <h1>Shop</h1>
                <div className="products-container">
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map(product => {
                                return <Product key={product.id} id={product.id} name={product.title} img={product.img} handleDetails={value.handleDetails}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default Shop;