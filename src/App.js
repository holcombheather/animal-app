import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    };
  }

  handleModalOpen = (beast) => {
    // alert('hi');
    this.setState({ 
      showModal: true,
      selectedBeast: {},
      
    })
  }

  handleModalClose = () => {
    this.setState({ 
          showModal: false,
        selectedBeast: {},
      
      })
  }


  render() {
    return (
      <>
        <Header />
        <Main imageUrls={imageUrls} onImageClick={this.handleModalOpen} />
        <SelectedBeast show={this.state.showModal} onClose={this.handleModalClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }

}


export default App;
