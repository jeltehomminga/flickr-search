const initialSearchState = {
  newSearch: 1,
  scrollToGallery: 0,
  searchInput: ""
};

const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchInput: action.value
      };
    case "FOCUSSEARCH":
      return { ...state, newSearch: state.newSearch + 1 };
    case "PHOTOS":
      return { ...state, scrollToGallery: state.scrollToGallery + 1 };
    default:
      return state;
  }
};

export default searchReducer;
