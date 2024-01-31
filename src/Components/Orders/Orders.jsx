import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData ()
    console.log(cart)
    return (
        <div className='shop-container'>
            <div  className='product-section'>
                <h1>this is order page  {cart.length}</h1>
            </div>
            <div  className='order-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;