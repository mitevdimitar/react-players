import React from 'react';
import firebase from './Services/firebase';
import {storeProducts, detailProduct} from './Fanshop/productsInfo';

export const UserContext = React.createContext({
    user: null,
    isLogged: false
});

export const ProductConsumer = UserContext.Consumer;

class ContextWrapper extends React.Component {

    state={
        user: null,
        isLogged: false,
        products: [],
        productDetails: detailProduct,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                this.setState({user: userInfo,
                isLogged:true})
            } else {
                this.setState({user: null,
                isLogged: false})
            }
        });
        let productsArr = [];
        storeProducts.forEach(product => {
            productsArr.push(product);
        })
        this.setState({products: productsArr});
    }

    selectProduct = (id) => {
        return this.state.products.filter(product => {
            return product.id === id;
        });
    }

    handleDetails = (id) => {
        const currentProduct = this.selectProduct(id)[0];
        this.setState({productDetails: currentProduct});
    }

    addToCart = (id)  => {
        const selectedProduct = this.selectProduct(id)[0];
        selectedProduct.inCart = true;
        selectedProduct.count += 1;

        let remainingProducts = [...this.state.products].filter(product=>product.id !== id);

        remainingProducts.push(selectedProduct)
        this.setState({products: remainingProducts});
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, handleDetails: this.handleDetails, addToCart: this.addToCart}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default ContextWrapper;