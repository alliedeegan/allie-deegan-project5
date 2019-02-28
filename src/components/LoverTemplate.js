import React, { Component } from 'react';

class LoverTemplate extends Component {
    render(){
        return(
            <div className='loverTemplate'>
                <h2>My lover is {this.props.passedState.noun}</h2>
            </div>
        )
    }
}