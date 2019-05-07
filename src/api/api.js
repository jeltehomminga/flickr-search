import axios from "axios";
const {
  REACT_APP_API_METHOD_SEARCH: search,
  REACT_APP_API_METHOD_RECENT: recent,
  REACT_APP_API_KEY: key,
  REACT_APP_API_URL: url
} = process.env;

const loadPhotos = (searchInput, page) => {
  //Thunk function returns a function
  return dispatch => {
    axios
      .get(url, {
        params: {
          method: searchInput ? search : recent,
          api_key: key,
          tags: searchInput,
          page: page,
          sort: "relevance",
          safe_search: "1",
          format: "json",
          nojsoncallback: 1
        }
      })
      .then(response => {
        dispatch({ type: "PHOTOS", photos: response.data.photos, page: page });
      })
      .catch(err => console.log(err));
  };
};

export default { loadPhotos };
