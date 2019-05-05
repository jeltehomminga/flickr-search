import React from "react";
import { connect } from "react-redux";
import { button } from "./Pagination.module.css";
import Api from "../api/api";

const Pagination = props => {
  return (
    <>
      {" "}
      {props.nextPage ? (
        <button className={button}>Next Page</button>
      ) : (
        <button
          className={button}
          value={props.searchInput}
          onClick={props.handleInputChange}
        >
          New Search
        </button>
      )}
    </>
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
)(Pagination);
