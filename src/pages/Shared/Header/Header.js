import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';


const Header = () => {
    return (
        
    
            <header className='sticky top-0 bg-green-300 p-4 rounded-md'>
                <nav className='flex justify-between text-2xl mx-3 mt-3 '>
                    <img className='h-10' src={logo} alt="" />
                    <div>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-white' to={'/'}>Home</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-white' to={'/about'}>About</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-white' to={'/contact'}>Contact me</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-white' to={'/register'}>Register</Link>
                        <Link className='mr-4 hover:underline underline-offset-8 hover:text-white' to={'/login'}>Login</Link>
                    </div>
                </nav>
                
            </header>
            
        
    );
};

export default Header;