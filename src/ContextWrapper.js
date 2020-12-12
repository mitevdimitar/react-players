import React from 'react';
import firebase from './Services/firebase';
import {storeProducts, detailProduct} from './Fanshop/productsInfo';
import {setConfig} from 'react-hot-loader';

export const UserContext = React.createContext({
    user: null,
    isLogged: false,
    products: []
});

export const ProductConsumer = UserContext.Consumer;
setConfig({disableHotRenderer: true});

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
        console.log(this.state.products)
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
        const {products} = this.state;
        const selectedProduct = this.selectProduct(id)[0];
        const index = products.indexOf(selectedProduct)
        selectedProduct.inCart = true;
        selectedProduct.count += 1;

        let currentProducts = [...products]
        currentProducts.splice(index, 1, selectedProduct);
        console.log(currentProducts)
        this.setState({products: currentProducts});
    }

    quantityChange = (product, quantity) => {
        const {products} = this.state;
        const index = products.indexOf(product)
        product.count = +quantity;
        
        let currentProducts = [...products]
        currentProducts.splice(index, 1, product);
        this.setState({products: currentProducts});
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, 
            handleDetails: this.handleDetails, 
            addToCart: this.addToCart,
            quantityChange: this.quantityChange}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default ContextWrapper;