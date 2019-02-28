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
              <input type='radio' id='family' name='recipient' value='family' onChange={() => this.props.handleChangeRecipient('family')} required/>
              <label htmlFor='lover'>Lover</label>
              <input type='radio' id='lover' name='recipient' value='lover' onChange={() => this.props.handleChangeRecipient('lover')}/>
              <label htmlFor='enemy'>Enemy</label>
              <input type='radio' id='enemy' name='recipient' value='enemy' onChange={() => this.props.handleChangeRecipient('enemy')}/>
              

              <label htmlFor='noun'>enter a <span>noun</span></label>
              <input type='text' id='noun' placeholder='boat, bird, etc...' onChange={this.props.handleChangeNoun} value={this.props.noun} required/>

              

              

              <input type='submit'/>
                      
            </form>
          </div>
        </div>

        <button className='NextPage' onClick={() => this.props.handleNewPage('displayPostCardPage')} >NEXT PAGE</button>
      </div>
    )
  }
}

export default GetTextPage;