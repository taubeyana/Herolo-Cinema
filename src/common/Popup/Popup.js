import React from 'react';
// import './Popup.css';
import Modal from '../Modal/Modal';

const Popup = props => {
    return (
        <Modal 
            modalOpen = { props.popupOpen }
            modalClose = { props.modalClose }>
            <button onClick = { (e) => props.confirmDeletion(e) }> OK </button>    
            <button onClick = { props.togglePopup }> Cancel </button>    
        </Modal>)
}

export default Popup;   