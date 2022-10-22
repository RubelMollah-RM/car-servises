import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';


const Header = () => {
    return (
        
    
            <header className='sticky top-0 bg-white border border-gray-300 p-4 rounded-md'>
                <nav className='flex justify-between text-2xl mx-3 mt-3 '>
                    <img className='h-10' src={logo} alt="" />
                    <div>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/'}>Home</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/about'}>About</Link>                       
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/service'}>Service</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/expert'}>Expert</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/register'}>Register</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-indigo-700' to={'/login'}>Login</Link>
                    </div>
                </nav>
                <link rel="stylesheet" href="" />
            </header>
            
        
    );
};

export default Header;