import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { debounce } from "lodash";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = { photoSearchResult: [], searchInput: "Amsterdam" };
  handleChange = debounce(inputValue => {
    this.setState({ searchInput: inputValue });
    this.loadPhotos();
  }, 500);
  componentDidMount = () => this.loadPhotos();
  loadPhotos = () => {
    // TODO: add parameters to url variables
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}?method=${
        this.state.searchInput
          ? process.env.REACT_APP_API_METHOD_SEARCH
          : process.env.REACT_APP_API_METHOD_RECENT
      }&api_key=${process.env.REACT_APP_API_KEY}&tags=${
        this.state.searchInput
      }&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
    })
      .then(response => {
        console.log(response.data);
        let photoDetails = response.data.photos.photo.map(photo => ({
          id: photo.id,
          title: photo.title,
          src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
            photo.id
          }_${photo.secret}`
        }));
        this.setState({ photoSearchResult: photoDetails });
      })
      // TODO: proper error handling
      .catch(err => console.log(err));
  };
  componentWillUnmount = () => this.handleChange.cancel();
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <h1>Flickr search</h1>
            <SearchBar onSearch={this.handleChange} />
          </div>
          <Gallery photos={this.state.photoSearchResult} />
        </header>
      </div>
    );
  }
}

export default App;
