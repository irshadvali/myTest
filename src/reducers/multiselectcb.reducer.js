import * as multiselectCBAction from '../actions/multiselectcb.action';
import {dataResult} from '../utils/dataResult';
const multiselectcb = (
  state = {
    cbList: dataResult.checkBoxData,
    selectedCbData: [],
    count: 0,
  },
  action,
) => {
  console.log('==============multiselectcb==', action.type);
  switch (action.type) {
    case multiselectCBAction.ONUPDATE: {
      state.cbList[action.index].selected = action.id;
      const selectedList = [...state.cbList].filter((value) => value.selected);
      const countSelectedCb = selectedList.length;
      console.log('====Afterchange--1-', [...state.cbList]);
      return Object.assign({}, state, {
        cbList: [...state.cbList],
        selectedCbData: selectedList,
        count: countSelectedCb,
      });
    }
    case multiselectCBAction.DELETE: {
      let myData = state.cbList.filter((value) => value.id === action.id);
      myData[0].selected = false;
      const selectedList = [...state.cbList].filter((value) => value.selected);
      const countSelectedCb = selectedList.length;
      return Object.assign({}, state, {
        cbList: dataResult.checkBoxData,
        selectedCbData: selectedList,
        count: countSelectedCb,
      });
    }
    default:
      return {cbList: state.cbList, count: state.count};
  }
};
export default multiselectcb;
