import React, { Component } from 'react';
import './LandingPage.css';
import mountains2 from '../assets/nitish-meena-37746-unsplash.jpg'

class LandingPage extends Component {
  render(){
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
              <p className='greeting'>Hey Kind Stranger,</p>
              <p>Remember Postcards? <br/> Those things you always promise to send your mom on vacation, but never do. <br/> With Post It, you can make a free digital postcard from the comfort of the internet instead!</p>
            </div>
          </div>
        </div>
        <button className='start' onClick={() => this.props.handleNewPage('getPhotosPage')}>Make custom postcard</button>
      </div>
    )
  }
}

export default LandingPage;