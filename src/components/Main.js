import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import imageUrls from '../data.json';

class Main extends Component {
   
    render() {

        const imageUrls = this.props.imageUrls;

        return (
            <Container class='container-fluid'> 
                <h2 style={{
                    color: 'coral',
                    fontStyle: 'oblique',
                    padding: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                }}>Click your favorites!</h2>
                <Row className='g-3'>
                {imageUrls.map((beast, index) => {
                    return (
                        <Col xs={12} md={6} lg={4}>
                        <HornedBeast 
                            key={beast._id}
                            title={beast.title}
                            image_url={beast.image_url}
                            description={beast.description}
                        />   
                        </Col>
                    )
                })
                }      
                </Row>
             </Container>   
        );
    }
}

export default Main;
