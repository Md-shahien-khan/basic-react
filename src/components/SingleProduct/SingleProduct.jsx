import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({product, handleSelectedProduct}) => {
    // console.log(product)
    const {id, name, img, description, price, category, isFeature} = product;
    // console.log(image)
    return (
        <div className='card'>
            <img className='img' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="cart-price">
                <p>${price}</p>
                <p>{isFeature?"Feature Category" : "Not Category"}</p>
            </div>
            <button onClick={()=>handleSelectedProduct(product)}>Add to cart</button>
        </div>
    );
};

export default SingleProduct;