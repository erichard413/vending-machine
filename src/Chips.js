import React, {useState} from 'react';
import Chip from './Chip';
import uuid from 'react-uuid';
import { NavLink } from 'react-router-dom';
import './Chips.css';

const Chips = () => {

    const [chips, setChips] = useState([]);

    const addChip = () => {
        setChips([...chips, {name: 'chip', x: getRando(), y:getRando()}]);
    }

    const getRando = () => {
        const randomNum = Math.floor(Math.random() * 100)
        return randomNum;
    }

    return(
        <div className="Chips">
            <div className="Chips-box">
                <p>Bags Eaten: {chips.length}</p>
                <button onClick={addChip}>NOM NOM NOM</button>
                <NavLink to='/'>GO BACK</NavLink>
            </div>
            <div className="Chips-div">
                {chips.map(c => <Chip key={uuid()} x={c.x} y={c.y} />)}
            </div>
        </div>
    )
}

export default Chips;