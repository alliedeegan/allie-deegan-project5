import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js';
import GetPhotosPage from './components/GetPhotosPage.js';
import GetTextPage from './components/GetTextPage.js';
import DisplayPostCardPage from './components/DisplayPostCardPage.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resultData: [],
      query: '',
      chosenPhoto: '',
      currentPage: 'landingPage',
      recipient: '',
      noun: ''
    }
  }

  handleNewPage =(newpage)=> {
    this.setState({
      currentPage: newpage
    })
  }

  handleResultData = (data) => {
    this.setState({
      resultData: data
    })
  }

  handleSelectPhoto = (photo) => {
    console.log(photo)
    this.setState({
      chosenPhoto: photo
    })
  }

  handleChangeRecipient = (person) => {
    this.setState({
      recipient: person
    })
  }

  handleChangeNoun = (event) => {
    this.setState({
      noun: event.target.value
    })
  }

  

  render() {
    return (
      <div className='App'>

        { this.state.currentPage === 'landingPage' ? <LandingPage handleNewPage={this.handleNewPage}/> : null }
        { this.state.currentPage === 'getPhotosPage' ? <GetPhotosPage handleNewPage={this.handleNewPage} 
        handleResultData={this.handleResultData}
        handleSelectPhoto={this.handleSelectPhoto}
        /> : null }  
        { this.state.currentPage === 'getTextPage' ? <GetTextPage 
        handleNewPage={this.handleNewPage}
        handleChangeNoun={this.handleChangeNoun}
        handleChangeRecipient={this.handleChangeRecipient}
        /> : null }
        {this.state.currentPage === 'displayPostCardPage' ? <DisplayPostCardPage 
        handleNewPage={this.handleNewPage}
        passedState={this.state} 
        /> : null}
        
      </div>
    );
  }
}

export default App;
