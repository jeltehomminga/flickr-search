import React from "react";
import { connect } from "react-redux";
import { searchAction } from "../actions/searchaction";
import { DebounceInput } from "react-debounce-input";

const SearchBar = props => {
  return (
    <>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        className='searchBox'
        name='searchInput'
        onChange={props.handleInputChange}
      />
      {/* <p>Value: {state.value}</p> */}
    </>
  );
};

const mapStateToProps = state => {
  return { searchInput: state.searchInput };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      console.log("handle input change happening ");
      dispatch(searchAction(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
