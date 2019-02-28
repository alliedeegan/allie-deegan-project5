import React, { Component } from 'react';

class FamilyTemplate extends Component {
    render(){
        return(
            <div className='familyTemplate'>
                <h2>My family member is {this.props.passedState.noun}</h2>
            </div>
        )
    }
}
