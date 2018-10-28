import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = props => {
    return (
        <button
            className = { props.className ? props.className + " btn" : "btn"} 
            onClick = { props.onClick }
            type = { props.type }>
            { props.label || null } 
            { props.icon ? <FontAwesomeIcon icon = { props.icon } /> : null }
        </button>
    )
}

export default Button