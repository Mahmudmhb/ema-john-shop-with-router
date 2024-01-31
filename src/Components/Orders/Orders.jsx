import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrdersItem from '../OrdersItem/OrdersItem';
import './Orders.css'

const Orders = () => {
    const cart = useLoaderData ()
    console.log(cart)
    return (
        <div className='shop-container'>
            <div  className='ordered-section'>
               
               <div>
               {
                    cart.map(product => <OrdersItem product={product} key={product.id}></OrdersItem>)
                }
               </div>
            </div>
            <div  className='order-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;