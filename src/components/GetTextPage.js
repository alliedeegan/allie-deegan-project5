import React, { Component } from 'react';

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
            <h2>Message writing time!</h2>
            <h3>Fill in the info below to generate your postcard message.</h3>
          </div>

          <div className='getTextPage__Form'>
            <form action='submit' onSubmit={() => this.props.handleNewPage('displayPostCardPage')}>
    
              <p>Who is the recipient?</p>
              <label htmlFor='family'>Family</label>
              <input type='radio' id='family' name='recipient' value='family' onChange={() => this.props.handleRecipient('family')} required/>
              <label htmlFor='lover'>Lover</label>
              <input type='radio' id='lover' name='recipient' value='lover' onChange={() => this.props.handleRecipient('lover')}/>
              <label htmlFor='enemy'>Enemy</label>
              <input type='radio' id='enemy' name='recipient' value='enemy' onChange={() => this.props.handleRecipient('enemy')}/>
              
              <label htmlFor='recipientName'>enter the <span>recipient's name</span></label>
              <input type='text' id='recipientName' placeholder='Zoe, Jenny, Balthazar The Terrible, etc... ' onChange={this.props.handleRecipientName} value={this.props.recipientName} required/>

              <label htmlFor='noun'>enter a <span>noun</span></label>
              <input type='text' id='noun' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handleNoun} value={this.props.noun} required />

              <label htmlFor='adjective'>enter an <span>adjective</span></label>
              <input type='text' id='adjective' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handleAdjective} value={this.props.adjective} required />

              <label htmlFor='verb'>enter a <span>verb</span></label>
              <input type='text' id='verb' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handleVerb} value={this.props.verb} required />
              
              <label htmlFor='petName'>enter a <span>pet's name</span></label>
              <input type='text' id='petName' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handlePetName} value={this.props.petName} required />

              <label htmlFor='title'>enter a <span>Book or Movie Title</span></label>
              <input type='text' id='title' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handleTitle} value={this.props.title} required />
              
              <label htmlFor='usersName'>enter <span>Your Name</span></label>
              <input type='text' id='usersName' placeholder='doggo, ampersand, question, etc... ' onChange={this.props.handleUsersName} value={this.props.usersName} required />

              <input type='submit'/>
                      
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default GetTextPage;