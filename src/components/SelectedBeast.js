import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { CloseButton, Image } from 'react-bootstrap';

class SelectedBeast extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modalOpen: false,
    //     };
    // }

    render() {
        return (
            <Modal show={this.props.show} onClose={this.props.onClose}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                    <CloseButton onClick={this.props.onClose}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Image 
                        src={this.props.image_url} 
                        alt={this.props.title}
                        style={{
                            width: '100%'
                        }}
                    />
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default SelectedBeast
