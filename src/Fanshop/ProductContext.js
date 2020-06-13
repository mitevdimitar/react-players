import React from 'react';
import {storeProducts} from './productsInfo';

const ProductContext = React.createContext();

const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends React.Component {
    
    state = {
        products: storeProducts
    }

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export { ProductProvider, ProductConsumer };