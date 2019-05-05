import React from "react";
import { connect } from "react-redux";
import { button } from "./Pagination.module.css";
import store from "../store/index";
import Api from "../api/api";

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

const mapStateToProps = state => ({
  searchInput: state.search.searchInput,
  currentPage: Number(state.gallery.photos.page),
  showGallery: state.gallery.showGallery
});

const mapDispatchToProps = dispatch => {
  return {
    handleNewSearch: () => {
      dispatch({ type: "FOCUSSEARCH" });
    },
    navigatePage: pageNumber => {
      dispatch({ type: "NAVIGATE" });
      store.dispatch(Api.loadPhotos(null, pageNumber + ""));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
