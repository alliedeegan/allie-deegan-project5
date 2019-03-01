import React, { Component } from 'react';
import FamilyTemplate from './FamilyTemplate.js';
import LoverTemplate from './LoverTemplate.js';
import EnemyTemplate from './EnemyTemplate.js';

class DisplayPostCardPage extends Component {
    render() {
        return (
            <div className='displayPostCardPage'>
                <div className='displayPage__Header'>
                    <h2>Your Postcard!</h2>
                </div>

                <div className='displayPage__PostCard'>
                    <div className='displayPage__PostCard--Front'>
                        <img src={this.props.passedState.chosenPhoto.urls.regular} alt={this.props.passedState.chosenPhoto.description}/>       
                    </div>
                
                    <div className='displayPage__PostCard--Back'>
                        { this.props.passedState.recipient === 'family' ? <FamilyTemplate 
                        passedState={this.props.passedState}
                        /> : null }
                        { this.props.passedState.recipient === 'lover' ? <LoverTemplate 
                        passedState={this.props.passedState}
                        /> : null }
                        { this.props.passedState.recipient === 'enemy' ? <EnemyTemplate 
                        passedState={this.props.passedState}
                        /> : null } 
                    </div>
            
                </div>
            </div>
        )
    }
}

export default DisplayPostCardPage;