import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
    <div class="NavBar">
        <NavLink to="/vending-machine">Home</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/freshsardines">Fresh Sardines</NavLink>
    </div>
    )

}

export default NavBar;