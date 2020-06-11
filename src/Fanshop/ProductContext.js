import React from 'react';

const ProductContext = React.createContext();

const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends React.Component {
    render() {
        return (
            <ProductContext.Provider value="Test Context">
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export { ProductProvider, ProductConsumer };