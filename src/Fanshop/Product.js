import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDiv = styled.div`
    background-color: rgb(252, 251, 253);
    text-align: center;
`

const ProductImg = styled.img`
    max-width: 150px;
    max-height: 150px;
    margin: 10px auto;
`

const Product = ({id, name, img, handleDetails}) => {
    return (
            <ProductDiv className="product">
                <Link to="/product-details" onClick={() => handleDetails(id)}>
                    <div className="product-image">
                        <ProductImg src={require(`../img/${img}.png`)} alt={img} />
                    </div>
                    <h5>{name}</h5>
                </Link>
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