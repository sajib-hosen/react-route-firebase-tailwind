import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Navigation = () => {
    const { logOut } = useFirebase();
    return (
        <div>
            <ul className='flex space-x-4 bg-gray-600'>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/home">Home</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/meals">Meals</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/myOrders">My Order</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/profile">Profile</NavLink></li>
                <li className='text-white hover:bg-indigo-500'><NavLink to="/about-us">About Us</NavLink></li>
                <li><button onClick={ logOut }>Log Out</button></li>
            </ul>
        </div>
    );
};

export default Navigation;