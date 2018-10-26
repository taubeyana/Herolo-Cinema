import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
    return (
        <div className = 'backdrop'
            onClick = { (e) => props.closeModal(e) }>
        </div>)
}

export default Backdrop;