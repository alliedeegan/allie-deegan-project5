import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js';
import GetPhotosPage from './components/GetPhotosPage.js';
import GetTextPage from './components/GetTextPage.js';
import DisplayPostCardPage from './components/DisplayPostCardPage.js';


const resultPhoto = (props) => {
  //render?
  return(
    <div>
      <img className="photoOption" src={props.urls.regular} alt={props.description}/>
      <div className="hidden">
        <button>Select</button>
      </div>
    </div>
  )
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resultData: [],
      query: "",
      chosenPhoto: '',
      chosenId: '',
      currentPage: "landingPage"
    }
  }

  handleSelectPhoto = (photo) => {
    console.log(photo)
    this.setState({
      chosenPhoto: photo
    })
  }

  handleResultData = (data) => {
    this.setState({
      resultData: data
    })
  }

  handleNewPage =(newpage)=> {
    this.setState({
      currentPage: newpage
    })
  }

  render() {
    return (
      <div className="App">

        { this.state.currentPage === "landingPage" ? <LandingPage handleNewPage={this.handleNewPage}/> : null }
        { this.state.currentPage === "getPhotosPage" ? <GetPhotosPage handleNewPage={this.handleNewPage} 
        handleResultData={this.handleResultData}
        handleSelectPhoto={this.handleSelectPhoto}
        /> : null }  
        { this.state.currentPage === "getTextPage" ? <GetTextPage handleNewPage={this.handleNewPage}/> : null }
        {this.state.currentPage === "displayPostCardPage" ? <DisplayPostCardPage handleNewPage={this.handleNewPage  } /> : null}
        
      </div>
    );
  }
}

export default App;
