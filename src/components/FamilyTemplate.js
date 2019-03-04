import React, { Component } from 'react';

class FamilyTemplate extends Component {
    render(){
        return(
            <div className='templateText'>
                <p className='greeting'>Hey Fam!</p>
                <p className='message'>I know you were worried about me traveling alone, but so far, I'm having a {this.props.passedState.adjective} time! I bought you a handful of {this.props.passedState.noun} as a souvenir yesterday. Tomorrow our tour is going to check out the {this.props.passedState.petName} ruins. They're said to be cursed, but whatevs! The locals here call me {this.props.passedState.title}, which is pretty rad. They say I {this.props.passedState.verb} better than anyone else they've ever met. I miss all of you except {this.props.passedState.recipientName}.</p> 
                <p className='signature'>Best wishes, {this.props.passedState.usersName}</p>
            </div>
        )
    }
}

export default FamilyTemplate;
