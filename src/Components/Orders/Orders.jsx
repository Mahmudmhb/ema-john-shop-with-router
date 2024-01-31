import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrdersItem from '../OrdersItem/OrdersItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../Utilitis';

const Orders = () => {
    const savedCart = useLoaderData ();
    const [cart, setCart ] = useState(savedCart);

    const removedFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }
    // console.log('cliked', cart)
    // console.log(cart)

    const deleteCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div  className='ordered-section'>
               
               <div>
               {
                    cart.map(product => <OrdersItem
                         product={product}
                          key={product.id}
                          removedFromCart={removedFromCart}
                          ></OrdersItem>)
                }
               </div>
            </div>
            <div  className='order-section'>
                <Cart 
                cart={cart}
                deleteCart={deleteCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;