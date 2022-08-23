import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="py-5"> 
            <nav className="fixed-top bg-primary container">
                <Link className="link text-light" to='/'>Home</Link>
                <Link className="link text-light" to='/reviews'>Reviews</Link>
                <Link className="link text-light" to="/dashboard">Dashboard</Link>
                <Link className="link text-light" to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;