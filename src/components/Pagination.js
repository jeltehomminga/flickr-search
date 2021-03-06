import React from "react";
import { connect } from "react-redux";
import { button } from "./Pagination.module.css";
import store from "../store/index";
import Api from "../api/api";
import actionCreator  from '../actions/actions'

const Pagination = ({
  searchInput,
  nextPage,
  currentPage,
  handleNewSearch,
  navigatePage,
  showGallery
}) => {
  return (
    <>
      {currentPage > 1 && (
        <button
          className={button}
          value={searchInput}
          onClick={() => navigatePage(currentPage - 1)}
        >
          Previous Page
        </button>
      )}
      {showGallery && (
        <button
          className={button}
          value={searchInput}
          onClick={handleNewSearch}
        >
          New Search
        </button>
      )}
      {nextPage && (
        <button
          className={button}
          value={searchInput}
          onClick={() => navigatePage(currentPage + 1)}
        >
          Next Page
        </button>
      )}
    </>
  );
};

const mapStateToProps = ({ search, gallery }) => ({
  searchInput: search.searchInput,
  //Convert page number to type number to increment/decrement page
  currentPage: Number(gallery.photos.page),
  showGallery: gallery.showGallery
});

const mapDispatchToProps = dispatch => {
  return {
    //Focus back in the searchbox with new search
    handleNewSearch: () => {
      dispatch(actionCreator.focus());
    },
    navigatePage: pageNumber => {
      dispatch(actionCreator.navigate());
      store.dispatch(Api.loadPhotos(null, pageNumber + ""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
