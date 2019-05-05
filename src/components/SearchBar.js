import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { searchBox } from "./SearchBar.module.css";
import Api from "../api/api";
import store from '../store/index'

const SearchBar = props => {
  const ref = useRef();
  useEffect(() => {
    if (props.newSearch) {
      ref.current.focus();
    }
  }, [props.newSearch]);
  return (
    <DebounceInput
      inputRef={ref}
      debounceTimeout={500}
      className={searchBox}
      name='searchInput'
      onChange={props.handleInputChange}
      placeholder={"Search me..."}
      autoComplete={"off"}
    />
  );
};

const mapStateToProps = state => ({
  searchInput: state.searchInput,
  newSearch: state.newSearch
});

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      dispatch({ type: "SEARCH", value: e.target.value });
      store.dispatch(Api.loadPhotos(e.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
