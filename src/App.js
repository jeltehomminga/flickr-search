import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Gallery from "./components/Gallery";

class App extends Component {
  state = { photoSearchResult: [] };
  componentDidMount() {
    axios({
      method: "get",
      url: process.env.REACT_APP_DEV_API_URL
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
      <div className="App">
        <header className="App-header">
          <h1>Flickr search</h1>
          <Gallery photos={this.state.photoSearchResult} />
        </header>
      </div>
    );
  }
}

export default App;
