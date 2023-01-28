import React from 'react';
import {NavLink} from 'react-router-dom';
import img from './Images/soda.png';
import './Soda.css';

const Soda = () => {
    return(
        <div className="Soda">
            <div className="Soda-container">
                <div className="Soda-img-l">
                    <img src={img} alt="Coca Cola can"/>
                </div>
                <div className="Soda-main">
                    <p>OMG SUGAR!!</p>
                    <NavLink to='/vending-machine'>GO BACK</NavLink>
                </div>
                <div className="Soda-img-r">
                    <img src={img} alt="Coca Cola can"/>
                </div>
            </div>

        </div>
    )
}

export default Soda;