import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <SearchBar />
            <h1>Flickr search</h1>
          </div>
        </header>
        <Gallery />
      </div>
    );
  }
}

export default App;
