import React, { Component } from 'react';

class LandingPage extends Component {
  render(){
    // const { handleNewPage } = this.props;
    return(
      <div className='landingPage'>
        <div className='landingPage__PostCard'>
          <div className='landingPage__PostCard--Front'>
            <h1>Landing Post Card</h1>
            <img src='' alt=''/>
            {/* have background image on div? */}
          </div>
          <div className='landingPage__PostCard--Back'>
            <img src='' alt=''/>
            <p>Describes what the app does</p>
            <button className='nextPage' onClick={() => this.props.handleNewPage('getPhotosPage')} >NextPage</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;