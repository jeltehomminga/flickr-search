import React from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { searchBox } from './SearchBar.module.css';
import Api from "../api/api";

const SearchBar = props => (
 
    <DebounceInput
      debounceTimeout={500}
      className={searchBox}
      name='searchInput'
      onChange={props.handleInputChange}
      placeholder={'Search me...'}
    />
);

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
