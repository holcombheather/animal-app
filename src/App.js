import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
// function 
    };
  }

  render() {
    return ( 
    <Container style={{
      background: 'lightblue',
    }}>
      <Header />        
      <Main imageUrls={imageUrls} />
      <Footer />
    </Container>
  ); 
  }
}

export default App;
