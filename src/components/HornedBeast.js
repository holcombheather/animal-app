import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

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

        return (
            <Card class='card' onClick={this.handleClick}>
                <CardHeader class='card-header'>{this.state.timesClicked}</CardHeader>
                <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} class='card-img-top'/>
               
                <Card.Title>{this.props.title}</Card.Title>
               
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>

            </Card>
        )
    }
}

export default HornedBeast;


// **DEMO code for reference**
// class HornedBeast extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "status": "Yay"
//         }
//     }

//     handleClick = () => {
//         const newStatus = this.state.status == "Nay" ? "Yay" : "Nay";
//         this.setState({
//             status: newStatus
//         });
//     }

//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <Image src={this.props.image_url} alt="some horned beast" rounded flued />
//                 <h3>{this.state.status}</h3>
//             </div>
//         )
//     }
// }