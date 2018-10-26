import React from 'react';
import './Button.css';

const Button = props => (
    <button
        className = { props.className } 
        onClick = { props.handleClick }> 
        { props.label } 
    </button>
)

export default Button