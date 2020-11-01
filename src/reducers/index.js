import {combineReducers} from 'redux';
import image from './image.reducer';
import allbills from './allbills.reducer';
export default combineReducers({
  image,
  allbills,
});
