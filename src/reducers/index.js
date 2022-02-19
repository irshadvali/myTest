import {combineReducers} from 'redux';
import image from './image.reducer';
import allbills from './allbills.reducer';
import testhooks from './testhooks.reducer';
import multiselectcb from './multiselectcb.reducer';
export default combineReducers({
  image,
  allbills,
  testhooks,
  multiselectcb,
});
