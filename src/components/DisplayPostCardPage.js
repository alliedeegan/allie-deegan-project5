import React, { Component } from 'react';
import FamilyTemplate from './components/FamilyTemplate.js';
import LoverTemplate from './components/LoverTemplate.js';
import EnemyTemplate from './components/EnemyTemplate.js';

class DisplayPostCardPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="displayPostCardPage">
                <div className="displayPage__Header">
                    <h2>Your Postcard!</h2>
                </div>
                <div className="displayPage__PostCard--Front">
                    .displayPage__PostCard--Front
                </div>
                <div className="displayPage__PostCard--Back">
                </div>

                <h2>{this.props.passedState.chosenPhoto.description}</h2>
                <img src={this.props.passedState.chosenPhoto.urls.regular} alt={this.props.passedState.chosenPhoto.description}/>
                <h2>Post card copy:</h2>
                <p>Testing this is a {this.props.passedState.noun}</p>


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
        )
    }
}

export default DisplayPostCardPage;