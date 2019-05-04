import { createStore } from 'redux';

const initialState = {
    photos: [],
    searchInput: "",
    // renderGallery: true
};

const reducer = (state= initialState, action) => {
    console.log('reducer', action)

    switch (action.type) {
        case 'SEARCH':
        return {...state, searchInput: action.value};
        case 'PHOTOS':
        return {...state, photos: action.photos};
        default:
        return state
    }
    
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;