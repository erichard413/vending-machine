import React from 'react';
import img from './Images/chip.png'


const Chip = ({y,x}) => {

    return(
        <div className="Chip" style={{
            position: 'absolute',
            top: `${y}vh`,
            left: `${x}vw`
        }}>
            <img src={img} alt="Bag of chips" />
        </div>
    )
}

export default Chip;