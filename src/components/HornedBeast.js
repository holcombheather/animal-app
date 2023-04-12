import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {
    render() {
        const { title, imageUrl, description } = this.props;

        return (
            <Card className='HornedBeast'>
                <Card.Img src={imageUrl} alt={title} title={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;