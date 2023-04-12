import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <Container>
      <Header />        
      <Main imageUrls={imageUrls} />
      <Footer />
    </Container>
  ); 
  }
}

export default App;
