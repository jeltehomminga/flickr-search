import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { DebounceInput } from "react-debounce-input";

const SearchBar = props => (
  <DebounceInput
    debounceTimeout={500}
    className='searchBox'
    name='searchInput'
    onChange={props.handleInputChange}
  />
);

const mapStateToProps = state => ({ searchInput: state.searchInput }); 

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      console.log("handle input change happening ");
      dispatch({ type: "SEARCH", value: e.target.value });
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}?method=${
          e.target.value
            ? process.env.REACT_APP_API_METHOD_SEARCH
            : process.env.REACT_APP_API_METHOD_RECENT
        }&api_key=${process.env.REACT_APP_API_KEY}&tags=${
          e.target.value
        }&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
      }).then(response => {
        dispatch({ type: "PHOTOS", photos: response.data.photos });
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
