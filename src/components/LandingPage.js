import React, { Component } from 'react';
import './LandingPage.css';
import mountains from '../assets/bailey-zindel-396398-unsplash.jpg'
import postCardBack from '../assets/postCardBackQuick.jpg'
import mountains2 from '../assets/nitish-meena-37746-unsplash.jpg'

class LandingPage extends Component {
  render(){
    // const { handleNewPage } = this.props;
    return(
      <div className='landingPage'>
        <div className='landingPage__PostCard'>
          <div className='landingPage__PostCard--Front'>
            <h1>Post it</h1>
            <p>Greetings from the internet!</p>
            <img src={mountains2} alt='A river with majestic mountains in the distance at dusk'/>
          </div>
          <div className='landingPage__PostCard--Back'>
            <div className="landingPage__PostCard--BackText">
              <p>Hey Internet Stranger,</p>
              <p>Remember Postcards? That thing you always promise to send you mom on vacation and then you get there and you're like POSTAGE IS HOW MUCH?! Well why not make a digital post card?!</p>
            </div>
          </div>
        </div>
        <button className='start' onClick={() => this.props.handleNewPage('getPhotosPage')}>Make custom postcard</button>
      </div>
    )
  }
}

export default LandingPage;