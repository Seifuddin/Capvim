import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>Capvim</div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to='/' onClick={toggleNavbar}>Home</Link>
                <Link to='/About' onClick={toggleNavbar}>About</Link>
                <Link to='/Services' onClick={toggleNavbar}>Services</Link>
                <Link to='/Contacts' onClick={toggleNavbar}>Contacts</Link>
            </div>
            <div className='navbar-toggle' onClick={toggleNavbar}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    );
};

export default Navbar;