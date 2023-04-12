import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />        
        <p>
          Horned animals 
        </p>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
