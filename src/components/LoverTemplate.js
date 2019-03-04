import React, { Component } from 'react';

class LoverTemplate extends Component {
    render(){
        return(
            <div className='templateText'>
                <p className='greeting'>My Sweet {this.props.passedState.recipientName},</p>
                <p className='message'>For many moons now we have been apart. Oh how I ache for your {this.props.passedState.adjective} embrace. Yesterday I saw some {this.props.passedState.noun} and was reminded of your smile. I have been telling all of {this.props.passedState.title} how beguiling you are. Soon we will be reunited and I will hear you call me {this.props.passedState.petName} as we {this.props.passedState.verb} together in the moonlight.</p>
                <p className='signature'>Your beloved, {this.props.passedState.usersName}</p>   
            </div>
        )
    }
}

export default LoverTemplate;