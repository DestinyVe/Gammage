import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';


export const Navbar = () => {
    return (
        <div className="navbar">
           <div className="links">
           <Link to="/"> Shop </Link>
           <Link to="/cart">
               <FiShoppingCart />
             </Link>
           </div>
        </div>
    );
};