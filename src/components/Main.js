import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import imageUrls from './data.json';

class Main extends Component {
    render() {

        const imageUrls = this.props.imageUrls;

        return (
            <Container>
                <h2>Main Component</h2>
                {imageUrls.map((beast, index) => (
                    <HornedBeast 
                        key={beast._id}
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                    />
                ))}
             </Container>   
            //     <Container>
            //         <Row>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[0].image_url} description={this.props.description} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[1].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[2].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[3].image_url} />
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[4].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast title={this.props.title} image_url={beastImages[5].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[6].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[7].image_url} />
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[8].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[9].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[10].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[11].image_url} />
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[12].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[13].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[14].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[15].image_url} />
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[16].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[17].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[18].image_url} />
            //             </Col>
            //             <Col>
            //                 <HornedBeast image_url={beastImages[19].image_url} />
            //             </Col>
            //         </Row>
            //     </Container>

            // </div>
        );
    }
}

export default Main;

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