import { combineReducers } from "redux";

const initialState = {
  gallery: {
    photos: [],
    showGallery: false,
    showPage: 1
  },
  search: {
    newSearch: 1,
    scrollToGallery: 0,
    searchInput: ""
  },
  photoCard: {
    visibleCards: []
  }
};

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchInput: action.value
      };
    case "FOCUSSEARCH":
      return { ...state, newSearch: state.newSearch + 1 };
    case "PHOTOS":
      return { ...state, scrollToGallery: state.scrollToGallery + 1};
    default:
      return state;
  }
};

const galleryReducer = (state = initialState.gallery, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        showGallery: false
      };
    case "NAVIGATE":
      return {
        ...state,
        showGallery: false
      };
    case "PHOTOS":
      return {
        ...state,
        photos: action.photos,
        showGallery: true,
        showPage: action.page
      };
    default:
      return state;
  }
};

const photoCardReducer = (state = initialState.photoCard, action) => {
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
