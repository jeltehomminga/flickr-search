import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
      <div className='App'>
        <header className='App-header'>
            <SearchBar />
            <h1>Flickr search</h1>
        </header>
        <Gallery />
      </div>
    );
  }

export default App;
