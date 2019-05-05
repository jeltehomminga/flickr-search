const initialState = {
    photos: [],
    searchInput: "",
    showGallery: true,
    showPages: 1,
    newSearch: 1
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
      case "FOCUSSEARCH":
        return { ...state, newSearch: state.newSearch + 1 };
      default:
        return state;
    }
  };

  export default reducer;