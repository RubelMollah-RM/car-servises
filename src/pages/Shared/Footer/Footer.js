import React from 'react';

const Footer = () => {
    const year = new Date();
    const y = year.getFullYear();
    return (
        <footer className='text-center'>
            <p><small>&copy;Copyright {y}</small></p>
        </footer>
    );
};

export default Footer;