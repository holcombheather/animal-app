import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageUrls from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SelectedBeast from './components/SelectedBeast';

function App () {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  };

  const handleClose = () => {
    setSelectedBeast(null);
  };


    return ( 
    <Container style={{
      background: 'lightblue',
    }}>
      <Header />        
      <Main imageUrls={imageUrls} onBeastSelect={handleBeastSelect} />
      <Footer beast={selectedBeast} onClose={handleClose}/>
    </Container>
  ); 
  }


export default App;
