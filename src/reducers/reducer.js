import { combineReducers } from "redux";

const initialState = {
  gallery: {
    photos: [],
    showGallery: true,
    showPages: 1
  },
  search: {
    newSearch: 1,
    searchInput: ""
  },
  photoCard: {
    visibleCards: []
  }
};

const searchReducer = (state = initialState.search, action) => {
  console.log("searchReducer", action);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchInput: action.value
      };
    case "FOCUSSEARCH":
      return { ...state, newSearch: state.newSearch + 1 };
    default:
      return state;
  }
};

const galleryReducer = (state = initialState.gallery, action) => {
  console.log("galleryReducer", action);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        showGallery: false
      };
    case "PHOTOS":
      return { ...state, photos: action.photos, showGallery: true };
    default:
      return state;
  }
};

const photoCardReducer = (state = initialState.photoCard, action) => {
  console.log("photoCardReducer", action);
  switch (action.type) {
    case "VISIBLE":
      return state.visibleCards.includes(action.index)
        ? state
        : {
            ...state,
            visibleCards: [...state.visibleCards, action.index]
          };

    default:
      return state;
  }
};

const reducers = combineReducers({
  gallery: galleryReducer,
  search: searchReducer,
  photoCard: photoCardReducer
});

export default reducers;
