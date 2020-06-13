import React from 'react';

const Product = ({name, img}) => {
    return (
        <div>
            <div className="product">
                <h3>{name}</h3>
                <div>
                    <img src={require(`../img/${img}.png`)} alt={img} />
                </div>
            </div>
        </div>
    );
};

export default Product;