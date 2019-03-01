import React, { Component } from 'react';

class FamilyTemplate extends Component {
    render(){
        return(
            <div className='templateText'>
                <p className='greeting'>Dear Family,</p>

                <p>I miss all of you except {this.props.passedState.name}!</p>
                <p>Best wishes, {this.props.passedState.usersName}</p>
            </div>
        )
    }
}

export default FamilyTemplate;
