import React from 'react';
import './Cart.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({cart, deleteCart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
   
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;

        quantity = quantity + product.quantity;
       
    }
    const tex = totalPrice* 7 /  100; 
    const  subTotal= totalPrice + totalShipping + tex;
    return (
        <div className='cart-container'>
             <h3>Order Summary</h3>
            <h4>Selected Items:{quantity}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            <h4>Total Shipping Charge: ${totalShipping}</h4>
            <h4>Tax: ${tex .toFixed(2)}  </h4>
            <h2>Grand Total: ${subTotal}</h2>

            <button onClick={deleteCart} className='btn-clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrashCan} className='btn' /></button>
            
        </div>
    );
};

export default Cart;