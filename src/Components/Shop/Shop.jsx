import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../Utilitis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('/fakeData/products.json')
        .then(res => res.json())
        .then(data  => setProducts(data))
    },[])
     useEffect(()=>{
         const storedCart = getShoppingCart();
         const savedCart =[]
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                // console.log(addedProduct)
                savedCart.push(addedProduct);

            }
        }
        setCart(savedCart)

     },[products])
    // console.log(products)
    const addToHandleCart = (product) =>{
        let newCart = []
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }


        setCart(newCart)
        // const newCart = [...cart,  product]

        // console.log(newCart, product)
        setCart(newCart)
        addToDb(product.id)
    }
    const deleteCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
           <div className='product-section'>
            {
                products.map(product => <Products 
                    key={product.id}
                    product={product}
                    addToHandleCart={addToHandleCart}
                ></Products>)
            }
           </div>

           <div className='order-section'>
                {/* <h3>Order page</h3> */}
                {/* <h1>cart length: {cart.length}</h1> */}
                <Cart cart={cart} deleteCart={deleteCart}>
                  <div>
                
                    <Link to='/orders'> 
                    <button className='btn-Review'>  Review Order <FontAwesomeIcon icon={faArrowRight} className='btn-Review-icone' /></button>
                    </Link>

                  </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;