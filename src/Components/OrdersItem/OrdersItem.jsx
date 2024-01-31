import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './OrdersItem.css'

const OrdersItem = ({product,removedFromCart}) => {
    const  {name, id, price, img, quantity} =product;
    const removedFromCartHanler = removedFromCart;
    return (
        <div className='orders-item'>
            <div className='order-img'>
                <img src={img} alt="" />
            </div>
            <div className='order-info'>
                <h3>{name}</h3>
                <p>Price: <span className='price-item'>${price}</span></p>
                <p>Quantity: <span className='price-item'>{quantity}</span></p>
            </div>
            <button onClick={()=> removedFromCartHanler(id)} className='btn'><FontAwesomeIcon icon={faTrashCan} className='btn-trash' /></button>
        </div>
    );
};

export default OrdersItem;