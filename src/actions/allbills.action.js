import {SUCCESS, REQUESTING, ERROR} from './constants.action';
import {dataResult} from '../utils/dataResult';
import _ from 'lodash';
import moment from 'moment';
export const GET_ALL_BILLS_REQUEST = 'GET_ALL_BILLS_REQUEST';
export const GET_ALL_BILLS_SUCCESS = 'GET_ALL_BILLS_SUCCESS';
export const GET_ALL_BILLS_FAILURE = 'GET_ALL_BILLS_FAILURE';

export const ADD_BILLS_REQUEST = 'ADD_BILLS_REQUEST';
export const ADD_BILLS_SUCCESS = 'ADD_BILLS_SUCCESS';
export const ADD_BILLS_FAILURE = 'ADD_BILLS_FAILURE';

export const FILTER_REQUEST = 'FILTER_REQUEST';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_FAILURE = 'FILTER_FAILURE';
//===================Image List================//
export function getAllBillsRequest() {
  return {
    type: GET_ALL_BILLS_REQUEST,
    status: REQUESTING,
  };
}

export function getAllBillsSuccess(allBillsData) {
  return {
    type: GET_ALL_BILLS_SUCCESS,
    status: SUCCESS,
    allBillsData,
  };
}

export function getAllBillsFailure(error) {
  return {
    type: GET_ALL_BILLS_FAILURE,
    status: ERROR,
    error,
  };
}

export function getAllBills(filterBy) {
  return async (dispatch, getState, api) => {
    dispatch(getAllBillsRequest());
    try {
      const resultJson = dataResult.bills;
      let filterData = _.sortBy(resultJson, [`${filterBy}`]);
      dispatch(getAllBillsSuccess(filterData));
    } catch (e) {
      dispatch(getAllBillsFailure(e.message));
    }
  };
}

export function addBillsRequest() {
  return {
    type: ADD_BILLS_REQUEST,
    status: REQUESTING,
  };
}

export function addBillsSuccess(addData) {
  return {
    type: ADD_BILLS_SUCCESS,
    status: SUCCESS,
    addData,
  };
}

export function addBillsFailure(error) {
  return {
    type: ADD_BILLS_FAILURE,
    status: ERROR,
    error,
  };
}
export function addNewItem(newData, filterBy, billDate) {
  return async (dispatch, getState, api) => {
    dispatch(addBillsRequest());
    const resultJson = [...getState().allbills.billsData, ...newData];

    // const result = resultJson.filter((word) => word.date === billDate);
    // //  console.log(billDate, '=========================in action=', result);
    // //  console.log(billDate, '=========================in action=', resultJson);
    // // let maxCallback = ( acc, cur ) => {return {   acc.amount+cur.amount }};
    // let totalAmount = (accumulator, currentValue) => {
    //   // console.log('==============in=', accumulator.amount, currentValue.amount);
    //   return accumulator.amount + currentValue.amount;
    // };
    // console.log(
    //   billDate,
    //   '=========================in action totalAmount=',
    //   result.reduce(totalAmount),
    // );
    let filterData = _.sortBy(resultJson, [`${filterBy}`]);
    try {
      dispatch(addBillsSuccess(filterData));
    } catch (e) {
      dispatch(addBillsFailure(e.message));
    }
  };
}

export function filterRequest() {
  return {
    type: FILTER_REQUEST,
    status: REQUESTING,
  };
}

export function filterSuccess(filterData) {
  return {
    type: FILTER_SUCCESS,
    status: SUCCESS,
    filterData,
  };
}

export function filterFailure(error) {
  return {
    type: FILTER_FAILURE,
    status: ERROR,
    error,
  };
}
export function sortedBy(filterBy) {
  return async (dispatch, getState, api) => {
    dispatch(filterRequest());
    const resultJson = getState().allbills.billsData;
    let filterData = _.sortBy(resultJson, [`${filterBy}`]);
    try {
      dispatch(filterSuccess(filterData));
    } catch (e) {
      dispatch(filterFailure(e.message));
    }
  };
}

export function getAllBillsByYear(year) {
  console.log('================year=', year);
  return async (dispatch, getState, api) => {
    dispatch(filterRequest());
    const resultJson = getState().allbills.billsData;
    try {
      const result = resultJson.filter(
        (word) => moment(word.date).isSame(year, 'year') === true,
      );
      console.log(this.state.date, '==================in result=', result);
      const resultJan = result.filter(
        (word) => moment(word.date).isSame('01', 'month') === true,
      );
      console.log(
        this.state.date,
        '==================in resultJan=',
        resultJan,
      );
      let initialValueJan = 0;
      let amountForMonthJan = resultJan.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValueJan,
      );
      console.log('================jan=', amountForMonthJan);
      // for (let i = 0; i <= result.length; i++) {
      //   let janData=

      // }
      console.log(year, '============y2=', result);
      //dispatch(filterSuccess(filterData));
    } catch (e) {
      //dispatch(filterFailure(e.message));
    }
  };
}
