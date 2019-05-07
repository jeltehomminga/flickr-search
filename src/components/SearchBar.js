import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { AppHeader, searchBox, SearchContainer  } from "./SearchBar.module.css";
import Api from "../api/api";
import store from "../store/index";
import actionCreator  from '../actions/actions'

const SearchBar = ({newSearch, handleInputChange, })=> {
  const ref = useRef();
  //Focus in SearchBox on initial load and new search
  useEffect(() => {
    newSearch && ref.current.focus();
  }, [newSearch]);
  //Debounce component to only search after typing finished
  return (
    <header className={AppHeader}>
      <div className={SearchContainer}>
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

const mapStateToProps = ({ search })=> ({
  searchInput: search.searchInput,
  newSearch: search.newSearch
});

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      dispatch(actionCreator.search(e));
      //Thunk-Redux use for asynch call to API
      store.dispatch(Api.loadPhotos(e.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
