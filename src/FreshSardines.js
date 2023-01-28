import React from 'react';
import { NavLink } from 'react-router-dom';
import "./FreshSardines.css";

const FreshSardines = () => {
    return(
        <div className="FreshSardines">
            <div className="FreshSardines-message">
                <p>YOU DON'T EAT SARDINES. THEY EAT YOU</p>
                <NavLink className="FreshSardines-link" to='/'>GO BACK</NavLink>
            </div>
        </div>
    )
}

export default FreshSardines;