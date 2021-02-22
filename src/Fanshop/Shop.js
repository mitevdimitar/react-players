import React, {Component} from 'react';
import ProductCard from './ProductCard';
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
                                return <ProductCard key={product.id} company={product.company} info={product.info} id={product.id} 
                                name={product.title} img={product.img} handleDetails={value.handleDetails}
                                addToCart={value.addToCart} products={value.products} price={product.price}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default Shop;