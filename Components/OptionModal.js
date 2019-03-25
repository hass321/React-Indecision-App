import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.clickOk}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <h5 className="modal__body">{props.selectedOption}</h5>}
            <button className="button" onClick={props.clickOk}>OK</button>
        </Modal>
    );
};

export default OptionModal;