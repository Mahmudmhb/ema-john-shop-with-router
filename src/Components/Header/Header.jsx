import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div  className='header-container'>
            <div className='header-img'>
                <img src="/images/Logo.svg" alt="" />
            </div>
           <div className='header-link'>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/'>Shop</Link>
                <Link to='/inventory'>Inventory</Link>
           </div>
        </div>
    );
};

export default Header;