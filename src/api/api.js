import axios from 'axios';

loadPhotos = () => {
    // TODO: add parameters to url variables
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}?method=${
        this.state.searchInput
          ? process.env.REACT_APP_API_METHOD_SEARCH
          : process.env.REACT_APP_API_METHOD_RECENT
      }&api_key=${process.env.REACT_APP_API_KEY}&tags=${
        this.state.searchInput
      }&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
    })
      .then(response => {
        console.log(response.data);
        let photoDetails = response.data.photos.photo.map(photo => ({
          id: photo.id,
          title: photo.title,
          src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
            photo.id
          }_${photo.secret}`
        }));
        this.setState({ photoSearchResult: photoDetails });
        this.setState({ renderGallery: true });
      })
      // TODO: proper error handling
      .catch(err => console.log(err));
  };

  export default loadPhotos;