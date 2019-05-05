import React from "react";
import { connect } from "react-redux";
import { button } from "./Pagination.module.css";

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
      dispatch({ type: "FOCUSSEARCH" });
    },
    handleNextPage: () => {
      dispatch({ type: "NEXTPAGE" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
