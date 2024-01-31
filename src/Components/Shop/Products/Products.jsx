import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import './Products.css'

const Products = ({product, addToHandleCart}) => {
    // console.log(product)
    const { name, img, ratings,id, seller, price } = product;
    const addToCartHanler = addToHandleCart;
    return ( 
       
         <div className='product-container'>
        <img src={img} alt="" />
        <div className="product-info">
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <p> <small>Manufacturer: {seller}</small></p>
            <p> <small>Ratings: {ratings}</small></p>
        </div>
        <button className='cart-btn' 
        onClick={ ()=> addToCartHanler(product)}
        >Add to Cart <FontAwesomeIcon icon={faCartShopping} />
        </button>
        </div>
    );
};

export default Products;