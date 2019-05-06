import { combineReducers } from "redux";
import searchReducer from './search';
import galleryReducer from './gallery';
import photoCardReducer from './photocard';

const reducers = combineReducers({
  gallery: galleryReducer,
  search: searchReducer,
  photoCard: photoCardReducer
});

export default reducers;
