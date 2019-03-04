import React, { Component } from 'react';
import axios from 'axios';
import './GetPhotosPage.css';


const apiKey = 'Client-ID 35b099672297de16a0daab970e196de3980e769efd3fffd4f2b18b262ce57705';

class GetPhotosPage extends Component {
  constructor(){
    super();
    this.state = {
      resultData: [],
      chosenPhoto: '',
      query: ''
    }
  }

  componentDidMount() {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method: 'GET',
      responseType: 'json',
      headers: {
        'Accept-Version': 'v1',
        Authorization: apiKey
      },
      params: {
        format: 'json',
        orientation: 'landscape',
        per_page: '8',
        query: 'mountains'
      }
    }).then(response => {
      console.log(response);
      const resultData = response.data.results
      this.setState({
        resultData: response.data.results
      })
      console.log(resultData);
      this.props.handleResultData(resultData);
    })
  }  

  getPhotoOptions=(event)=>{
    event.preventDefault();
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method: 'GET',
      responseType: 'json',
      headers: {
        'Accept-Version': 'v1',
        Authorization: apiKey
      },
      params: {
        format: 'json',
        orientation: 'landscape',
        per_page: '8',
        query: this.state.query
      }
    }).then(response => {
      console.log(response);
      const resultData = response.data.results
      this.setState({
        resultData: response.data.results
      })
      this.props.handleResultData(resultData);
    })
  }

  handleChange =(event)=> {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return(
      <div className='getPhotosPage'>
        <div className='wrapper'>
          <div className='getPhotosPage__Header'>
            <h2>Pick a Pic!</h2>
            <h3>Select a photo below or search for an image of your choice.</h3>

            <form action='submit' onSubmit={this.getPhotoOptions}>
              <input type='text' onChange={this.handleChange} required/>
              <input type='submit' value='Search'/>
            </form>

            </div>
            <div className='getPhotosPage__Photos'>
              {
                this.state.resultData.map(data =>{
                  return(
                    <div key={data.id} className='photoOption'> 
                      <div className="photoOption__Image" onClick={() => { this.props.handleSelectPhoto(data); { this.props.handleNewPage('getTextPage') } }}>
                        <img src={data.urls.regular} alt={data.description} />
                        <div className="photoOverlay">
                          <p>This one!</p>
                        </div>
                      </div> 
                      <a href={data.user.links.html} target='_blank'><i class="fas fa-camera-retro"></i> by {data.user.name}</a>
                    </div>                    
                  )
                })     
              }
          </div>
        </div>
      </div>
    )
  }
}

export default GetPhotosPage;