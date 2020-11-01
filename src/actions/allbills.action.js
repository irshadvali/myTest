import {SUCCESS, REQUESTING, ERROR} from './constants.action';
import {dataResult} from '../utils/dataResult';
import _ from 'lodash';
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
export function addNewItem(newData, filterBy) {
  return async (dispatch, getState, api) => {
    dispatch(addBillsRequest());
    console.log(filterBy, '==============action=', [
      ...getState().allbills.billsData,
      ...newData,
    ]);
    const resultJson = [...getState().allbills.billsData, ...newData];
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
