import React, { Component } from 'react';
import Header from './components/Header';
import FilterForm from './components/FilterForm';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Footer from './components/Footer';
import imageUrls from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppStyle.css';
// import { Form } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      // showAllBeasts: true
    };
  }

  handleModalOpen = (beast) => {
    this.setState({ 
      showModal: true,
      selectedBeast: beast,  
    })
  }

  handleModalClose = () => {
    this.setState({ 
        showModal: false,
        selectedBeast: {},
      });
  }

  handleFilter = (event) => {
    //update state
    // this.setState({
    // })
    alert(event.target.value);
  }


  render() {
    return (
      <>
        <Header />
        <FilterForm onFilter={this.handleFilter}></FilterForm>
        <Main 
          imageUrls={imageUrls} 
          onImageClick={(beast) => this.handleModalOpen({
            title: beast.title,
            image_url: beast.image_url,
            description: beast.description,
          })
          }
        />
        <SelectedBeast 
          show={this.state.showModal} 
          onClose={this.handleModalClose} 
          title={this.state.selectedBeast.title}
          image_url={this.state.selectedBeast.image_url}
          description={this.state.selectedBeast.description}
        />
        <Footer />
      </>
    );
  }

}


export default App;
