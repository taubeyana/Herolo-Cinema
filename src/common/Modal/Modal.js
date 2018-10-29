import React, { Fragment } from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    return (
       props.modalOpen ? 
        (<Fragment>
            <Backdrop closeModal = { props.modalClose } ></Backdrop>
            <div className = { props.className ? props.className + " modal" : "modal" }> 
                {props.children}
            </div>
        </Fragment>) 
        : null
    )
}

export default Modal;   