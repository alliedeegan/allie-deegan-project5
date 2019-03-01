import React, { Component } from 'react';
import axios from 'axios';


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
        query: 'babies'
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
            <h1>Pick a Pic!</h1>
            <h2>Select a photo below or search for an image of your choice.</h2>

            <form action='submit' onSubmit={this.getPhotoOptions}>
              <input type='text' onChange={this.handleChange} required/>
              <input type='submit'/>
            </form>

            </div>
            <div className='getPhotosPage__Photos'>
              {
                this.state.resultData.map(data =>{
                  return(
                    <div key={data.id} className='photoOption'>
                      <div className='photoOptionImg'>
                        <img src={data.urls.regular} alt={data.description} onClick={() => {this.props.handleSelectPhoto(data); {this.props.handleNewPage('getTextPage')}}}/>
                      </div>
                      <div className='photoOptionText'>
                        <h2>Select</h2>
                        <h3>Photo by <a href={data.user.links.html} target='_blank'>{data.user.name}</a></h3>
                      </div>
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