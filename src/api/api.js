import axios from "axios";

//Thunk
const loadPhotos = (searchInput, page) => {
  return (dispatch, getState) => {
    const state = getState();    
    console.log('hier de state uit de thunk: ', state);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}?method=${
        searchInput
          ? process.env.REACT_APP_API_METHOD_SEARCH
          : process.env.REACT_APP_API_METHOD_RECENT
      }&api_key=${
        process.env.REACT_APP_API_KEY
      }&tags=${searchInput}&sort=relevance&safe_search=1&format=json&nojsoncallback=1&page=${page}`
    }).then(response => {
      dispatch({ type: "PHOTOS", photos: response.data.photos, page: page });
    });
  };
};

export default { loadPhotos };
