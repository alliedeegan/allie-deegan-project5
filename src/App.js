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
      recipientName: '',
      usersName: '',
      noun: '',
      adjective: '',
      verb: '',
      petName: '',
      title: ''    
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

  handleRecipient = (person) => {
    this.setState({
      recipient: person
    })
  }

  handleRecipientName = (event) => {
    this.setState({
      recipientName: event.target.value
    })
  }

  handleNoun = (event) => {
    this.setState({
      noun: event.target.value
    })
  }

  handleAdjective = (event) => {
    this.setState({
      adjective: event.target.value
    })
  }

  handleVerb = (event) => {
    this.setState({
      verb: event.target.value
    })
  }

  handlePetName = (event) => {
    this.setState({
      petName: event.target.value
    })
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleUsersName = (event) => {
    this.setState({
      usersName: event.target.value
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
        handleNoun={this.handleNoun}
        handleRecipient={this.handleRecipient}
        handleRecipientName={this.handleRecipientName}
        handleAdjective={this.handleAdjective}
        handleVerb={this.handleVerb}
        handlePetName={this.handlePetName}
        handleTitle={this.handleTitle}
        handleUsersName={this.handleUsersName}
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