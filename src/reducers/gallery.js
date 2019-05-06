const initialGalleryState = {
    photos: [],
    showGallery: false,
    showPage: 1
  };

  const galleryReducer = (state = initialGalleryState, action) => {
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

export default galleryReducer;
