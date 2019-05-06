import axios from "axios";

const loadPhotos = (searchInput, page) => {
  //Thunk function returns a function
  return dispatch => {
    axios({
      method: "get",
      //Search by tag if search input provided, otherwise call recent recommended by Flickr
      //Safe search and sort by relevance to prevent NSFW pics, warning: NSFW can still show up!
      url: `${process.env.REACT_APP_API_URL}?method=${
        searchInput
          ? process.env.REACT_APP_API_METHOD_SEARCH
          : process.env.REACT_APP_API_METHOD_RECENT
      }&api_key=${
        process.env.REACT_APP_API_KEY
      }&tags=${searchInput}&page=${page}&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
    }).then(response => {
      dispatch({ type: "PHOTOS", photos: response.data.photos, page: page });
    });
  };
};

export default { loadPhotos };
