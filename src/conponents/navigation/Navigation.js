import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const Navigation = () => {
    const navCss = {
        backgroundColor: "#4B0082",
        color: "red"
    }
    return (
        <div>
            <ul className='flex space-x-4 bg-gray-600'>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/home" activeStyle={navCss}>Home</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/meals" activeStyle={navCss}>Meals</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/myOrders" activeStyle={navCss}>My Order</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/profile" activeStyle={navCss}>Profile</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/about-us" activeStyle={navCss}>About Us</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/logout" activeStyle={navCss}>logout</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;