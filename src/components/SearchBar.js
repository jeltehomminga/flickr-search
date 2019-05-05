import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { searchBox } from "./SearchBar.module.css";
import Api from "../api/api";

const SearchBar = props => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
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

const mapStateToProps = state => ({ searchInput: state.searchInput });

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      dispatch({ type: "SEARCH", value: e.target.value });
      Api.loadPhotos(dispatch, e.target.value);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
