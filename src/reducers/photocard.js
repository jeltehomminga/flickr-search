const initialPhotoCardState = { visibleCards: [] };

const photoCardReducer = (state = initialPhotoCardState, { type, index }) => {
  switch (type) {
    case "VISIBLE":
      return state.visibleCards.includes(index)
        ? state
        : {
            ...state,
            visibleCards: [...state.visibleCards, index]
          };
    case "SEARCH":
      return { visibleCards: [] };
      case "NAVIGATE":
      return { visibleCards: [] };
    default:
      return state;
  }
};

export default photoCardReducer;
