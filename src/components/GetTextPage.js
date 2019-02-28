import React, { Component } from 'react';

class GetTextPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="getTextPage">
                <h1>Get TEXT Page</h1>
                <button className="NextPage" onClick={() => this.props.handleNewPage("displayPostCardPage")} >NEXT PAGE</button>
            </div>
        )
    }
}

export default GetTextPage;