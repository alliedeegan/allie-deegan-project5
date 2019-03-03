import React, { Component } from 'react';

class EnemyTemplate extends Component {
    render() {
        return(
            <div className='templateText'>
                <p>{this.props.passedState.name},</p>
                <p>You'll be surprised to receive this post</p>
                <h2>My enemy is {this.props.passedState.noun}</h2>
            </div>
        )
    }
}

export default EnemyTemplate;