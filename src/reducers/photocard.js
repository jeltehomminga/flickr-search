const initialPhotoCardState = { visibleCards: [] };

const photoCardReducer = (state = initialPhotoCardState, action) => {
  switch (action.type) {
    case "VISIBLE":
      return state.visibleCards.includes(action.index)
        ? state
        : {
            ...state,
            visibleCards: [...state.visibleCards, action.index]
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
