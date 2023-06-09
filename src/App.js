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
 
const allBeasts = imageUrls;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      displayedBeasts: allBeasts,
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
    const selection = event.target.value;
    let filteredBeasts = [];

    if(selection === '1') {
      filteredBeasts = allBeasts.filter(beast => beast.horns === 1);
      this.setState({ displayedBeasts: filteredBeasts});
      console.log(filteredBeasts);
    } else if (selection === '2') {
      filteredBeasts = allBeasts.filter((beast) => beast.horns === 2);
      this.setState({ displayedBeasts: filteredBeasts});
      console.log(filteredBeasts);
    } else if (selection === '3') {
      filteredBeasts = allBeasts.filter((beast) => beast.horns === 3);
      this.setState({ displayedBeasts: filteredBeasts});
      console.log(filteredBeasts);
    }  else if (selection === '100') {
      filteredBeasts = allBeasts.filter((beast) => beast.horns === 100);
      this.setState({ displayedBeasts: filteredBeasts});
      console.log(filteredBeasts);
    } else {
      this.setState({ displayedBeasts: allBeasts});
    }
  };


  render() {
    return (
      <>
        <Header />
        <FilterForm onFilter={this.handleFilter}></FilterForm>
        <Main 
          imageUrls={this.state.displayedBeasts} 
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
