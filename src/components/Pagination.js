import React from "react";
import { connect } from "react-redux";
import { button } from "./Pagination.module.css";
// import Api from "../api/api";

const Pagination = props => {
  return (
    <>
      {props.nextPage ? (
        <button className={button}>Next Page</button>
      ) : (
        <button
          className={button}
          value={props.searchInput}
          onClick={props.handleNewSearch}
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
    handleNewSearch: () => {
      dispatch({ type: "FOCUSEARCH", newSearch: true });
      setTimeout(
        () => dispatch({ type: "FOCUSEARCH", newSearch: false }),
        3000
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
