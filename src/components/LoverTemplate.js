import React, { Component } from 'react';

class LoverTemplate extends Component {
    render(){
        return(
            <div className='templateText'>
                <p>My beloved {this.props.passedState.name},</p>

                <h2>My lover is {this.props.passedState.noun}</h2>
            </div>
        )
    }
}

export default LoverTemplate;