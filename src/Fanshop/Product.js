import React from 'react';
import styled from 'styled-components';

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
                <h3>{name}</h3>
                <div>
                    <ProductImg src={require(`../img/${img}.png`)} alt={img} />
                </div>
            </ProductDiv>
    );
};

export default Product;