import React, { Component } from 'react';
import './GetTextPage.css';

class GetTextPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='getTextPage'>
        <div className='wrapper'>
          <div className='getTextPage__Header'>
            <h2>The write stuff!</h2>
            <h3>Finding the right words is hard. Fill out this form and we'll take care of the rest!</h3>
          </div>

          <div className='getTextPage__Form'>
            <form action='submit' onSubmit={() => this.props.handleNewPage('displayPostCardPage')}>

              <div className="getTextPage__Form--Radio">
                <p>Who is the recipient?</p>
                <input type='radio' id='family' name='recipient' value='family' onChange={() => this.props.handleRecipient('family')} required/>
                <label htmlFor='family'>Family</label>
                <input type='radio' id='lover' name='recipient' value='lover' onChange={() => this.props.handleRecipient('lover')}/>
                <label htmlFor='lover'>Lover</label>
                <input type='radio' id='enemy' name='recipient' value='enemy' onChange={() => this.props.handleRecipient('enemy')}/>
                <label htmlFor='enemy'>Enemy</label>
              </div>

              <label htmlFor='recipientName'>enter the <span>recipient's name</span></label>
              <input type='text' id='recipientName' placeholder='Grandma, Natalie, Balthazar The Terrible, etc... ' onChange={this.props.handleRecipientName} value={this.props.recipientName} maxLength='20' required/>

              <label htmlFor='noun'>enter a <span>plural noun</span></label>
              <input type='text' id='noun' placeholder='rubber duckies, questions, bees, etc...' onChange={this.props.handleNoun} value={this.props.noun} maxLength='15' required />

              <label htmlFor='adjective'>enter an <span>adjective</span></label>
              <input type='text' id='adjective' placeholder='beautiful, illuminating, boyant, etc...  ' onChange={this.props.handleAdjective} value={this.props.adjective} maxLength='15' required />

              <label htmlFor='verb'>enter a <span>verb</span></label>
              <input type='text' id='verb' placeholder='run, worry, festoon, etc...' onChange={this.props.handleVerb} value={this.props.verb} maxLength='15' required />
              
              <label htmlFor='petName'>enter a <span>pet's name</span></label>
              <input type='text' id='petName' placeholder='Mittens, Mr. Fluffington, Brown Dog... etc' onChange={this.props.handlePetName} value={this.props.petName} maxLength='20' required />

              <label htmlFor='title'>enter a <span>place name</span></label>
              <input type='text' id='title' placeholder='Jamaica, Applebees, the Moon, etc...' onChange={this.props.handleTitle} value={this.props.title} maxLength='20' required />
              
              <label htmlFor='usersName'>enter <span>your name</span></label>
              <input type='text' id='usersName' placeholder='I hope you know your own name!' onChange={this.props.handleUsersName} value={this.props.usersName} maxLength='15' required />

              <input type='submit' value='Generate Postcard!'/>
                      
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default GetTextPage;