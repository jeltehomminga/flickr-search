import { createStore } from "redux";

const initialState = {
  photos: [],
  searchInput: "",
  showGallery: true,
  showPages: 1,
  newSearch: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchInput: action.value,
        showGallery: false
      };
    case "PHOTOS":
      return { ...state, photos: action.photos, showGallery: true };
    case "FOCUSEARCH":
      return { ...state, newSearch: action.newSearch };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
