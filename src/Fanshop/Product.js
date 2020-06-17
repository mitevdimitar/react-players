import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDiv = styled.div`
    border: 1px solid grey;
    background-color: bisque;
    text-align: center;
`

const ProductImg = styled.img`
    max-width: 150px;
    max-height: 150px;
    margin: 10px auto;
`

const Product = ({name, img}) => {
    return (
            <ProductDiv className="product">
                <div>
                    <ProductImg src={require(`../img/${img}.png`)} alt={img} />
                </div>
                <h4>{name}</h4>
                <div className="order-product">
                    <span>
                        10 USD
                    </span>
                    <button>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </ProductDiv>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
}

export default Product;