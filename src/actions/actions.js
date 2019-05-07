const SEARCH = "SEARCH";
const PHOTOS = "PHOTOS";
const VISIBLE = "VISIBLE";
const FOCUSSEARCH = "FOCUSSEARCH";
const NAVIGATE = "NAVIGATE";

const actionCreator = {
  search: e => ({ type: SEARCH, value: e.target.value }),
  visible: i => ({ type: VISIBLE, index: i }),
  focus: () => ({ type: FOCUSSEARCH }),
  navigate: () => ({ type: NAVIGATE }),
  photos: (response, page) => ({
    type: PHOTOS,
    photos: response,
    page: page
  })
};

export default actionCreator;
