import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { AppHeader, searchBox, SearchBoxContainer  } from "./SearchBar.module.css";
import Api from "../api/api";
import store from "../store/index";

const SearchBar = ({newSearch, handleInputChange, })=> {
  const ref = useRef();
  //Focus in SearchBox on initial load and new search
  useEffect(() => {
    newSearch && ref.current.focus();
  }, [newSearch]);
  //Debounce component to only search after typing finished
  return (
    <header className={AppHeader}>
      <div className={SearchBoxContainer}>
        <DebounceInput
          inputRef={ref}
          debounceTimeout={500}
          className={searchBox}
          name='searchInput'
          onChange={handleInputChange}
          placeholder={"Search me..."}
          autoComplete={"off"}
        />
        <h1>Flickr search</h1>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  searchInput: state.search.searchInput,
  newSearch: state.search.newSearch
});

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      dispatch({ type: "SEARCH", value: e.target.value });
      //Thunk-Redux use for asynch call to API
      store.dispatch(Api.loadPhotos(e.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
