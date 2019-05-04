import axios from "axios";

const loadPhotos = (dispatch, searchInput) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}?method=${
      searchInput
        ? process.env.REACT_APP_API_METHOD_SEARCH
        : process.env.REACT_APP_API_METHOD_RECENT
    }&api_key=${
      process.env.REACT_APP_API_KEY
    }&tags=${searchInput}&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
  }).then(response => {
    dispatch({ type: "PHOTOS", photos: response.data.photos });
  });
};

export default { loadPhotos };
