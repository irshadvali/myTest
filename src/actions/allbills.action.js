import {SUCCESS, REQUESTING, ERROR} from './constants.action';
import {dataResult} from '../utils/dataResult';
import _ from 'lodash';
import moment from 'moment';
import {getTotalAmount} from '../utils/Utils';
export const GET_ALL_BILLS_REQUEST = 'GET_ALL_BILLS_REQUEST';
export const GET_ALL_BILLS_SUCCESS = 'GET_ALL_BILLS_SUCCESS';
export const GET_ALL_BILLS_FAILURE = 'GET_ALL_BILLS_FAILURE';

export const ADD_BILLS_REQUEST = 'ADD_BILLS_REQUEST';
export const ADD_BILLS_SUCCESS = 'ADD_BILLS_SUCCESS';
export const ADD_BILLS_FAILURE = 'ADD_BILLS_FAILURE';

export const FILTER_REQUEST = 'FILTER_REQUEST';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_FAILURE = 'FILTER_FAILURE';

export const GRAPH_REQUEST = 'GRAPH_REQUEST';
export const GRAPH_SUCCESS = 'GRAPH_SUCCESS';
export const GRAPH_FAILURE = 'GRAPH_FAILURE';
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

export function graphRequest() {
  return {
    type: GRAPH_REQUEST,
    status: REQUESTING,
  };
}

export function graphSuccess(graphArray) {
  console.log('==============in action=', graphArray);
  return {
    type: GRAPH_SUCCESS,
    status: SUCCESS,
    graphArray,
  };
}

export function graphFailure(error) {
  return {
    type: GRAPH_FAILURE,
    status: ERROR,
    error,
  };
}

export function getAllBillsByYear(year) {
  return async (dispatch, getState, api) => {
    dispatch(graphRequest());
    const resultJson = getState().allbills.billsData;
    try {
      let graphArray = [];
      let labels = [];
      let data = [];
      let dataResult = {};
      let amountForJan = getTotalAmount(resultJson, `01-11-${year}`);
      graphArray.push({month: 'Jan', amount: amountForJan});
      labels.push(`Jan-${year}`);
      data.push(amountForJan);
      let amountForFeb = getTotalAmount(resultJson, `02-11-${year}`);
      graphArray.push({month: 'Feb', amount: amountForFeb});
      labels.push(`Feb-${year}`);
      data.push(amountForFeb);
      let amountForMarch = getTotalAmount(resultJson, `03-11-${year}`);
      graphArray.push({month: 'March', amount: amountForMarch});
      labels.push(`March${year}`);
      data.push(amountForMarch);
      let amountForApril = getTotalAmount(resultJson, `04-11-${year}`);
      graphArray.push({month: 'April', amount: amountForApril});
      labels.push(`April-${year}`);
      data.push(amountForApril);
      let amountForMay = getTotalAmount(resultJson, `05-11-${year}`);
      graphArray.push({month: 'May', amount: amountForMay});
      labels.push(`May-${year}`);
      data.push(amountForMay);
      let amountForJune = getTotalAmount(resultJson, `06-11-${year}`);
      graphArray.push({month: 'June', amount: amountForJune});
      labels.push(`June-${year}`);
      data.push(amountForJune);
      let amountForJuly = getTotalAmount(resultJson, `07-11-${year}`);
      graphArray.push({month: 'July', amount: amountForJuly});
      labels.push(`July-${year}`);
      data.push(amountForJuly);
      let amountForAugust = getTotalAmount(resultJson, `08-11-${year}`);
      graphArray.push({month: 'August', amount: amountForAugust});
      labels.push(`August-${year}`);
      data.push(amountForAugust);
      let amountForSept = getTotalAmount(resultJson, `09-11-${year}`);
      graphArray.push({month: 'Sept', amount: amountForSept});
      labels.push(`Sept-${year}`);
      data.push(amountForSept);
      let amountForOct = getTotalAmount(resultJson, `10-11-${year}`);
      graphArray.push({month: 'Oct', amount: amountForOct});
      labels.push(`Oct-${year}`);
      data.push(amountForOct);
      let amountForNov = getTotalAmount(resultJson, `11-11-${year}`);
      graphArray.push({month: 'Nov', amount: amountForNov});
      labels.push(`Nov-${year}`);
      data.push(amountForNov);
      let amountForDec = getTotalAmount(resultJson, `12-11-${year}`);
      graphArray.push({month: 'Dec', amount: amountForDec});
      labels.push(`Dec-${year}`);
      data.push(amountForDec);

      dataResult = {
        labels: labels,
        datasets: [
          {
            data: data,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2,
          },
        ],
        legend: ['Spend'],
      };

      dispatch(graphSuccess(dataResult));
    } catch (e) {
      dispatch(graphRequest(e.message));
    }
  };
}
