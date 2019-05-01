import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Gallery from "./components/Gallery";

class App extends Component {
  state = { photoSearchResult: [], searchInput: "Amsterdam" };
  componentDidMount() {
    axios({
      method: "get",
      url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        process.env.REACT_APP_API_KEY
      }&tags=${this.state.searchInput}&format=json&nojsoncallback=1`
    }).then(response => {
      console.log(response.data);
      let photoDetails = response.data.photos.photo.map(photo => ({
        id: photo.id,
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}`
      }));
      this.setState({ photoSearchResult: photoDetails });
    });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <h1>Flickr search</h1>
            <input className='searchBox' />
          </div>
          <Gallery photos={this.state.photoSearchResult} />
        </header>
      </div>
    );
  }
}

export default App;
