import React, { Component } from 'react';

class EnemyTemplate extends Component {
    render() {
        return(
            <div className='enemyTemplate'>
                <h2>My enemy is {this.props.passedState.noun}</h2>
            </div>
        )
    }
}