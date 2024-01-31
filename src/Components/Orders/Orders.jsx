import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrdersItem from '../OrdersItem/OrdersItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../Utilitis';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                >
                <div>
                 <Link to='/orderproceed'>
                 <button className='btn-Review'>  Review Order <FontAwesomeIcon icon={faCreditCard} className='btn-Review-icone' /></button>
                 </Link>
                  </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;