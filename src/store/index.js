import { createStore } from 'redux';



const initialState = {
    photoSearchResult: [],
    searchInput: "Amsterdam",
};

const reducer = (state= initialState, action) => {
    console.log('reducer, action')

    switch (action.type) {
        case 'SEARCH':
        return {...state, searchInput: action.value};
        default:
        return state
    }
    
}

const store = createStore(reducer);

export default store;