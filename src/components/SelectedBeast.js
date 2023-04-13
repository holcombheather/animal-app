import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
// import SelectedBeast from './Main';

function SelectedBeast({ best, onClose }) {
    if (!this.beast) {
        return null;
    }

    return (
        <Modal show={!!this.beast} onHide={onClose} centered>
            <p>{this.beast.title}</p>
        </Modal>
    );
}

export default SelectedBeast;