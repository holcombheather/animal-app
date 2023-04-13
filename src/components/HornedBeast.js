import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let addClick = this.state.timesClicked + 1;
        this.setState({
            timesClicked: addClick
        })
    }

    render() {
        const handleCardClick = () => {
            this.onClick();
            this.handleClick();
        };

        return (
            <Card border='info' onClick={this.handleClick} style={{
                height: '400px',
                color: 'darkblue',
            }}>
                <CardHeader >
                    <HeartFill color='red'></HeartFill>
                    <span style={{ padding: '3px', }}>{this.state.timesClicked}</span>
                </CardHeader>
                
                <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} class='card-img-top' style={{
                    objectFit: 'contain',
                    height: '250px',
                    width: '100%',
                }}/>
               
                <Card.Title class='card-title text-center' style={{
                    fontWeight: 'bold',
                    marginTop: '10px',
                }}>{this.props.title}</Card.Title>
               
                <Card.Body>
                    <Card.Text class='text-center'>{this.props.description}</Card.Text>
                </Card.Body>

            </Card>
        )
    }
}

export default HornedBeast;
