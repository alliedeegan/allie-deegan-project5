import React, { Component } from 'react';

class LandingPage extends Component {
    render(){
        // const { handleNewPage } = this.props;
        return(
            <div className="postCard">
                <div className="postCardFront">
                    <h1>Landing Post Card</h1>
                    <img src="" alt=""/>
                </div>
                <div className="postCardBack">
                    <img src="" alt=""/>
                    <p>Describes what the app does</p>
                    <button className="nextPage" onClick={() => this.props.handleNewPage("getPhotosPage")} >NextPage</button>
                </div>
            </div>
        )
    }
}

export default LandingPage;