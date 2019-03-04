import React, { Component } from 'react';

class EnemyTemplate extends Component {
    render() {
        return(
            <div className='templateText'>
                <p>{this.props.passedState.recipientName},</p>
                <p className='message'>No doubt you're surprised to hear from me, since leaving me for dead in that pit of {this.props.passedState.adjective} {this.props.passedState.noun}. Since that day, I have been in hiding. But I will hide no more. I'm coming for you, and I will find you, even if I have to search all of {this.props.passedState.title}. You'll pay for what you and {this.props.passedState.petName} did to my family. Looking forward to the day I {this.props.passedState.verb} upon your grave.</p>
                <p className='signature'>{this.props.passedState.usersName}</p>
            </div>
        )
    }
}

export default EnemyTemplate;