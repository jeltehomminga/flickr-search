import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { debounce } from "lodash";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import store from './store'

class App extends Component {
  state = {
    photoSearchResult: [],
    searchInput: "Amsterdam",
    renderGallery: false
  };
  handleChange = debounce(inputValue => {
    this.setState({ renderGallery: false });
    this.setState({ searchInput: inputValue }, () => this.loadPhotos());
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
        this.setState({ renderGallery: true });
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
            
            <SearchBar store={store} onSearch={this.handleChange} />
            <h1>Flickr search</h1>
          </div>
        </header>

        {this.state.renderGallery &&
        <Gallery
          photos={this.state.photoSearchResult}
          renderGallery={this.state.renderGallery}
        /> }
      </div>
    );
  }
}

export default App;
